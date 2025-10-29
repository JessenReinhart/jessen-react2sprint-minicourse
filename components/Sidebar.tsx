import React from 'react';
import type { Module, LessonIdentifier } from '../types';
import { Circle, CheckCircle } from 'lucide-react';

interface SidebarProps {
  courseData: Module[];
  currentLesson: LessonIdentifier;
  navigateTo: (moduleIndex: number, lessonIndex: number) => void;
  completedLessons: Record<string, boolean>;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ courseData, currentLesson, navigateTo, completedLessons, isOpen, setIsOpen }) => {
  return (
    <>
      <div className={`fixed inset-0 bg-black/50 z-30 transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)}></div>
      <aside className={`flex-shrink-0 w-80 bg-white dark:bg-slate-800/70 dark:backdrop-blur-sm border-r border-slate-200 dark:border-slate-700 flex flex-col transition-transform duration-300 ease-in-out lg:transform-none lg:static fixed inset-y-0 left-0 z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 border-b border-slate-200 dark:border-slate-700">
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Spring Boot Course</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">For React Developers</p>
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-4">
          {courseData.map((module, moduleIndex) => (
            <div key={moduleIndex}>
              <h2 className="px-2 text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">{module.title}</h2>
              <ul>
                {module.lessons.map((lesson, lessonIndex) => {
                  const isCurrent = currentLesson.moduleIndex === moduleIndex && currentLesson.lessonIndex === lessonIndex;
                  const isCompleted = !!completedLessons[`${moduleIndex}-${lessonIndex}`];
                  
                  return (
                    <li key={lessonIndex}>
                      <button
                        onClick={() => navigateTo(moduleIndex, lessonIndex)}
                        className={`w-full text-left flex items-center p-2 rounded-md transition-colors text-sm ${
                          isCurrent 
                            ? 'bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300 font-medium' 
                            : 'hover:bg-slate-100 dark:hover:bg-slate-700/50 text-slate-600 dark:text-slate-300'
                        }`}
                      >
                        {isCompleted ? (
                          <CheckCircle className="w-4 h-4 mr-3 text-sky-600 dark:text-sky-500 flex-shrink-0" />
                        ) : (
                          <Circle className="w-4 h-4 mr-3 text-slate-400 dark:text-slate-500 flex-shrink-0" />
                        )}
                        <span className="flex-1">{lesson.title}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
};
