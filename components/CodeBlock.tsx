import React, { useState, useMemo } from 'react';
import type { CodeContent } from '../types';
import { Clipboard, Check } from 'lucide-react';

// Make hljs available on the window object for TypeScript
declare global {
    interface Window {
        hljs: any;
    }
}

export const CodeBlock: React.FC<{ content: CodeContent }> = ({ content }) => {
  const [copied, setCopied] = useState(false);

  const highlightedHtml = useMemo(() => {
    if (window.hljs && window.hljs.getLanguage(content.language)) {
      try {
        return window.hljs.highlight(content.code, { language: content.language, ignoreIllegals: true }).value;
      } catch (error) {
        console.error("Error highlighting code:", error);
        // Fallback to unhighlighted code on error
        return content.code;
      }
    }
    // Fallback if hljs is not available or language is not supported
    return content.code;
  }, [content.code, content.language]);


  const handleCopy = () => {
    navigator.clipboard.writeText(content.code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="my-6 rounded-md border border-slate-300 dark:border-slate-700 shadow-md">
      <div className="flex justify-between items-center bg-slate-200 dark:bg-slate-700/50 px-4 py-2 rounded-t-md">
        <span className="text-sm font-medium text-slate-600 dark:text-slate-300">{content.fileName || content.language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          {copied ? <Check size={16} className="text-green-500" /> : <Clipboard size={16} />}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
       <pre className="bg-slate-800 text-white p-4 rounded-b-md overflow-x-auto text-sm">
            <code
                className={`language-${content.language} hljs`}
                dangerouslySetInnerHTML={{ __html: highlightedHtml }}
            />
       </pre>
    </div>
  );
};
