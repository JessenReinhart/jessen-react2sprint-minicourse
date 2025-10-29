import React, { useState } from 'react';
import { KeyRound, X } from 'lucide-react';

interface ApiKeyModalProps {
  isOpen: boolean;
  onSave: (apiKey: string) => void;
  onSkip: () => void;
}

export const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onSave, onSkip }) => {
  const [key, setKey] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleSave = () => {
    if (key.trim()) {
      onSave(key.trim());
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex justify-center items-center" role="dialog" aria-modal="true" aria-labelledby="api-key-modal-title">
      <div className="w-full max-w-lg bg-white dark:bg-slate-800 rounded-lg shadow-2xl flex flex-col" onClick={e => e.stopPropagation()}>
        <header className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <KeyRound className="text-sky-500" size={24} />
            <h2 id="api-key-modal-title" className="text-lg font-bold text-slate-900 dark:text-white">Set Up AI Tutor</h2>
          </div>
          <button onClick={onSkip} className="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700" aria-label="Close setup">
            <X size={20} />
          </button>
        </header>

        <div className="p-6">
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            To enable the AI Tutor and other generative AI features, please provide your Google Gemini API key.
            This key is stored only in your browser's local storage and is not sent to our servers.
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
            You can get a free API key from <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-sky-500 hover:underline">Google AI Studio</a>.
          </p>
          
          <div className="mb-4">
            <label htmlFor="apiKeyInput" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Gemini API Key
            </label>
            <input
              id="apiKeyInput"
              type="password"
              value={key}
              onChange={e => setKey(e.target.value)}
              placeholder="Enter your API key here"
              className="w-full px-3 py-2 bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>
        </div>

        <footer className="p-4 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 flex justify-end gap-3">
          <button
            onClick={onSkip}
            className="px-4 py-2 text-sm font-medium rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            Continue without AI
          </button>
          <button
            onClick={handleSave}
            disabled={!key.trim()}
            className="px-4 py-2 bg-sky-600 text-white rounded-md font-semibold text-sm hover:bg-sky-700 disabled:bg-slate-400 disabled:cursor-not-allowed"
          >
            Save and Continue
          </button>
        </footer>
      </div>
    </div>
  );
};
