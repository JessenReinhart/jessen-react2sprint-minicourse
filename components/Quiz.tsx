
import React, { useState } from 'react';
import type { QuizContent } from '../types';
import { CheckCircle, XCircle, Lightbulb } from 'lucide-react';

export const Quiz: React.FC<{ content: QuizContent }> = ({ content }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (index: number) => {
    if (!submitted) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setSubmitted(true);
    }
  };

  const isCorrect = selectedAnswer === content.correctAnswerIndex;

  return (
    <div className="my-8 p-6 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg shadow-sm">
      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">🧠 Check Your Understanding</h3>
      <p className="text-slate-700 dark:text-slate-300 mb-4">{content.question}</p>
      
      <div className="space-y-3">
        {content.options.map((option, index) => {
          let stateClasses = 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700';
          if (submitted) {
            if (index === content.correctAnswerIndex) {
              stateClasses = 'border-green-500 bg-green-50 dark:bg-green-900/40';
            } else if (index === selectedAnswer) {
              stateClasses = 'border-red-500 bg-red-50 dark:bg-red-900/40';
            }
          } else if (selectedAnswer === index) {
            stateClasses = 'border-sky-500 bg-sky-50 dark:bg-sky-900/30 ring-2 ring-sky-500';
          }

          return (
            <button
              key={index}
              onClick={() => handleSelect(index)}
              disabled={submitted}
              className={`w-full text-left p-4 border rounded-md flex items-center justify-between transition-all ${stateClasses}`}
            >
              <span>{option}</span>
              {submitted && index === content.correctAnswerIndex && <CheckCircle className="text-green-600 dark:text-green-500" />}
              {submitted && index === selectedAnswer && index !== content.correctAnswerIndex && <XCircle className="text-red-600 dark:text-red-500" />}
            </button>
          );
        })}
      </div>
      
      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={selectedAnswer === null}
          className="mt-6 px-4 py-2 bg-sky-600 text-white rounded-md font-semibold hover:bg-sky-700 disabled:bg-slate-400 disabled:cursor-not-allowed"
        >
          Submit Answer
        </button>
      ) : (
        <div className={`mt-6 p-4 rounded-md ${isCorrect ? 'bg-green-100 dark:bg-green-900/50' : 'bg-red-100 dark:bg-red-900/50'}`}>
          <div className="flex items-start">
              <div className="flex-shrink-0">
                  {isCorrect ? <CheckCircle className="h-5 w-5 text-green-500" /> : <XCircle className="h-5 w-5 text-red-500" />}
              </div>
              <div className="ml-3">
                  <h4 className={`text-sm font-medium ${isCorrect ? 'text-green-800 dark:text-green-200' : 'text-red-800 dark:text-red-200'}`}>
                      {isCorrect ? 'Correct!' : 'Not quite!'}
                  </h4>
                  <div className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                      <p>{content.explanation}</p>
                  </div>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};
