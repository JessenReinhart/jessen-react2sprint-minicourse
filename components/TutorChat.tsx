import React, { useState, useEffect, useRef } from 'react';
import type { Lesson, ChatMessage } from '../types';
import { GoogleGenAI } from '@google/genai';
import { X, Send, Bot, User, Loader } from 'lucide-react';

const API_KEY = process.env.API_KEY;
if (!API_KEY) {
  // In a real app, you'd handle this more gracefully.
  // Here we assume it's always available in the execution environment.
  console.warn("API_KEY environment variable not set.");
}
const ai = new GoogleGenAI({ apiKey: API_KEY! });

interface TutorChatProps {
  lesson: Lesson;
  moduleTitle: string;
  onClose: () => void;
}

// Function to strip HTML for a cleaner context
const stripHtml = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
};

const lessonToText = (lesson: Lesson, moduleTitle: string): string => {
    let text = `Module: ${moduleTitle}\nLesson: ${lesson.title}\n\n`;
    lesson.steps.forEach(step => {
        switch (step.type) {
            case 'heading':
                text += `## ${step.content}\n\n`;
                break;
            case 'text':
                text += `${stripHtml(step.content as string)}\n\n`;
                break;
            case 'code':
                const codeContent = step.content as any;
                text += `\`\`\`${codeContent.language}\n${codeContent.code}\n\`\`\`\n\n`;
                break;
            // We can ignore quiz/analogy for the text context to keep it concise
        }
    });
    return text;
};


export const TutorChat: React.FC<TutorChatProps> = ({ lesson, moduleTitle, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([
      {
        role: 'model',
        content: `Hello! I'm your AI tutor. How can I help you with the lesson on "${lesson.title}"?`,
      },
    ]);
  }, [lesson.title]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
        const lessonContext = lessonToText(lesson, moduleTitle);
        const systemInstruction = `You are a helpful and friendly programming tutor. Your student is a React/TypeScript developer learning Spring Boot.
        Your goal is to explain concepts clearly, drawing analogies to React/TS where helpful.
        Keep your answers concise and focused on the user's question.
        The user is currently on the following lesson, use it for context:
        ---
        ${lessonContext}
        ---
        `;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: [
            ...messages.map(msg => ({ role: msg.role, parts: [{ text: msg.content }] })),
            { role: 'user', parts: [{ text: input }] }
          ],
          config: {
              systemInstruction: systemInstruction,
          }
        });

        const modelMessage: ChatMessage = { role: 'model', content: response.text };
        setMessages(prev => [...prev, modelMessage]);

    } catch (error) {
      console.error('Error calling Gemini API:', error);
      const errorMessage: ChatMessage = {
        role: 'model',
        content: 'Sorry, I encountered an error. Please try again.',
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-40 flex justify-center items-center" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="tutor-chat-title">
      <div className="w-full max-w-2xl h-[90vh] max-h-[700px] bg-white dark:bg-slate-800 rounded-lg shadow-2xl flex flex-col" onClick={e => e.stopPropagation()}>
        <header className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
          <h2 id="tutor-chat-title" className="text-lg font-bold text-slate-900 dark:text-white">AI Tutor</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700" aria-label="Close chat">
            <X size={20} />
          </button>
        </header>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex items-start gap-3 ${msg.role === 'user' ? 'justify-end' : ''}`}>
              {msg.role === 'model' && (
                <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center flex-shrink-0">
                  <Bot size={20} className="text-white" />
                </div>
              )}
              <div className={`max-w-[80%] p-3 rounded-lg ${msg.role === 'user' ? 'bg-sky-600 text-white' : 'bg-slate-100 dark:bg-slate-700'}`}>
                <p className="text-sm" dangerouslySetInnerHTML={{ __html: msg.content.replace(/\n/g, '<br />') }} />
              </div>
               {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center flex-shrink-0">
                  <User size={20} className="text-white" />
                </div>
              )}
            </div>
          ))}
          {isLoading && (
             <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center flex-shrink-0">
                  <Bot size={20} className="text-white" />
                </div>
                <div className="max-w-[80%] p-3 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center">
                    <Loader size={20} className="animate-spin text-slate-500" />
                </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-slate-200 dark:border-slate-700">
          <form onSubmit={handleSend} className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask a question about the lesson..."
              className="flex-1 px-4 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-full focus:outline-none focus:ring-2 focus:ring-sky-500"
              disabled={isLoading}
              aria-label="Chat input"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="w-10 h-10 bg-sky-600 text-white rounded-full flex items-center justify-center flex-shrink-0 hover:bg-sky-700 disabled:bg-slate-400 disabled:cursor-not-allowed"
              aria-label="Send message"
            >
              {isLoading ? <Loader size={20} className="animate-spin" /> : <Send size={20} />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
