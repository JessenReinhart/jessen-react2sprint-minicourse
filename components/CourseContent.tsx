import React from 'react';
import type { Lesson, Step, CodeContent, QuizContent, AnalogyContent } from '../types';
import { CodeBlock } from './CodeBlock';
import { Quiz } from './Quiz';
import { ChevronLeft, ChevronRight, MessageSquarePlus, Check } from 'lucide-react';

interface CourseContentProps {
  lesson: Lesson;
  moduleTitle: string;
  handlePrev: () => void;
  handleNext: () => void;
  isLastLesson: boolean;
  currentLessonNumber: number;
  totalLessons: number;
  completedLessonsCount: number;
  isComplete: boolean;
  onMarkComplete: () => void;
  onAskTutor: () => void;
}

const ProgressBar: React.FC<{ value: number; max: number }> = ({ value, max }) => {
    const percentage = max > 0 ? (value / max) * 100 : 0;
    return (
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 mb-4">
            <div 
                className="bg-sky-600 h-2.5 rounded-full transition-all duration-500" 
                style={{ width: `${percentage}%` }}
                aria-valuenow={value}
                aria-valuemin={0}
                aria-valuemax={max}
                role="progressbar"
                aria-label="Course completion progress"
            ></div>
        </div>
    );
};

const AnalogyCard: React.FC<{ content: AnalogyContent }> = ({ content }) => {
    return (
        <div className="bg-sky-50 dark:bg-sky-900/40 border border-sky-200 dark:border-sky-800 rounded-lg p-6 my-6">
            <h3 className="text-lg font-bold text-sky-800 dark:text-sky-200 mb-4">React/TS Developer Analogy</h3>
            <div className="grid md:grid-cols-2 gap-4">
                <div>
                    <p className="font-semibold text-slate-700 dark:text-slate-300">React Concept</p>
                    <p className="text-slate-900 dark:text-white font-mono bg-slate-200 dark:bg-slate-700 inline-block px-2 py-1 rounded">{content.reactConcept}</p>
                </div>
                 <div>
                    <p className="font-semibold text-slate-700 dark:text-slate-300">Spring Boot Equivalent</p>
                    <p className="text-slate-900 dark:text-white font-mono bg-slate-200 dark:bg-slate-700 inline-block px-2 py-1 rounded">{content.springConcept}</p>
                </div>
            </div>
            <p className="mt-4 text-slate-600 dark:text-slate-300">{content.explanation}</p>
        </div>
    );
};

const renderStep = (step: Step, index: number) => {
  switch (step.type) {
    case 'heading':
        return <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">{step.content as string}</h2>;
    case 'text':
      return <p key={index} className="my-4 leading-relaxed text-slate-700 dark:text-slate-300" dangerouslySetInnerHTML={{ __html: step.content as string }} />;
    case 'code':
      return <CodeBlock key={index} content={step.content as CodeContent} />;
    case 'quiz':
      return <Quiz key={index} content={step.content as QuizContent} />;
    case 'analogy':
      return <AnalogyCard key={index} content={step.content as AnalogyContent} />;
    default:
      return null;
  }
};

export const CourseContent: React.FC<CourseContentProps> = ({ 
    lesson, moduleTitle, handlePrev, handleNext, isLastLesson,
    currentLessonNumber, totalLessons, completedLessonsCount, isComplete, onMarkComplete, onAskTutor
}) => {
    const isFirstLesson = currentLessonNumber === 1;

    return (
        <div className="max-w-4xl mx-auto relative">
             <button
                onClick={onAskTutor}
                className="fixed bottom-6 right-6 z-20 flex items-center gap-2 px-4 py-3 bg-sky-600 text-white rounded-full font-semibold shadow-lg hover:bg-sky-700 transition-all transform hover:scale-105"
                aria-label="Ask AI Tutor"
            >
                <MessageSquarePlus size={20} />
                <span className="hidden sm:inline">Ask AI Tutor</span>
            </button>

            <header className="mb-8">
                <ProgressBar value={completedLessonsCount} max={totalLessons} />
                <p className="text-sm font-semibold text-sky-600 dark:text-sky-400">{moduleTitle}</p>
                <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-1">{lesson.title}</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-2">Lesson {currentLessonNumber} of {totalLessons}</p>
            </header>
            
            <article className="prose prose-slate dark:prose-invert max-w-none">
                {lesson.steps.map(renderStep)}
            </article>

            {/* Navigation & Completion */}
            <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
                <button
                    onClick={handlePrev}
                    disabled={isFirstLesson}
                    className="flex items-center w-full sm:w-auto justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    <ChevronLeft size={16} />
                    Previous
                </button>

                 <button
                    onClick={onMarkComplete}
                    className={`flex items-center gap-2 px-6 py-2 text-base font-medium rounded-md transition-colors ${
                        isComplete
                        ? 'bg-green-600 text-white cursor-default'
                        : 'bg-sky-600 text-white hover:bg-sky-700'
                    }`}
                >
                    {isComplete ? <Check size={20} /> : null}
                    {isComplete ? 'Completed' : 'Mark as Complete'}
                </button>

                <button
                    onClick={handleNext}
                    disabled={isLastLesson}
                    className="flex items-center w-full sm:w-auto justify-center gap-2 px-4 py-2 text-sm font-medium rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    Next
                    <ChevronRight size={16} />
                </button>
            </div>
        </div>
    );
};
