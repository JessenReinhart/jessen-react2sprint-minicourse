import React, { useState, useCallback, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { CourseContent } from './components/CourseContent';
import { TutorChat } from './components/TutorChat';
import { courseData } from './course/courseData';
import type { LessonIdentifier } from './types';
import { useCourseProgress } from './hooks/useCourseProgress';
import { Menu, X } from 'lucide-react';
import { ApiKeyModal } from './components/ApiKeyModal';

const App: React.FC = () => {
  const [currentLesson, setCurrentLesson] = useState<LessonIdentifier>({
    moduleIndex: 0,
    lessonIndex: 0,
  });
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isTutorOpen, setIsTutorOpen] = useState(false);
  const [apiKey, setApiKey] = useState<string | null>(() => localStorage.getItem('gemini-api-key'));
  const [isApiKeyModalOpen, setIsApiKeyModalOpen] = useState(false);

  useEffect(() => {
    const key = localStorage.getItem('gemini-api-key');
    const skipped = sessionStorage.getItem('api-key-prompt-skipped');
    if (!key && !skipped) {
      setIsApiKeyModalOpen(true);
    }
  }, []);

  const { completedLessons, toggleLessonCompletion } = useCourseProgress();

  const totalLessons = courseData.reduce((acc, module) => acc + module.lessons.length, 0);
  const completedLessonsCount = Object.keys(completedLessons).length;

  const lesson = courseData[currentLesson.moduleIndex].lessons[currentLesson.lessonIndex];

  let currentLessonNumber = 0;
  for (let i = 0; i < currentLesson.moduleIndex; i++) {
    currentLessonNumber += courseData[i].lessons.length;
  }
  currentLessonNumber += currentLesson.lessonIndex + 1;


  const navigateTo = (moduleIndex: number, lessonIndex: number) => {
    if (
      moduleIndex >= 0 &&
      moduleIndex < courseData.length &&
      lessonIndex >= 0 &&
      lessonIndex < courseData[moduleIndex].lessons.length
    ) {
      setCurrentLesson({ moduleIndex, lessonIndex });
      setIsSidebarOpen(false); // Close sidebar on navigation
    }
  };

  const handleNext = () => {
    const { moduleIndex, lessonIndex } = currentLesson;
    if (lessonIndex < courseData[moduleIndex].lessons.length - 1) {
      navigateTo(moduleIndex, lessonIndex + 1);
    } else if (moduleIndex < courseData.length - 1) {
      navigateTo(moduleIndex + 1, 0);
    }
  };

  const handlePrev = () => {
    const { moduleIndex, lessonIndex } = currentLesson;
    if (lessonIndex > 0) {
      navigateTo(moduleIndex, lessonIndex - 1);
    } else if (moduleIndex > 0) {
      navigateTo(moduleIndex - 1, courseData[moduleIndex - 1].lessons.length - 1);
    }
  };
  
  const handleMarkComplete = useCallback(() => {
    toggleLessonCompletion(currentLesson);
  }, [currentLesson, toggleLessonCompletion]);
  
  const handleSaveApiKey = (key: string) => {
    localStorage.setItem('gemini-api-key', key);
    setApiKey(key);
    setIsApiKeyModalOpen(false);
  };

  const handleSkipApiKey = () => {
    sessionStorage.setItem('api-key-prompt-skipped', 'true');
    setIsApiKeyModalOpen(false);
  };
  
  const handleAskTutor = () => {
    if (apiKey) {
      setIsTutorOpen(true);
    } else {
      setIsApiKeyModalOpen(true);
    }
  };

  const isLastLesson = currentLesson.moduleIndex === courseData.length - 1 && currentLesson.lessonIndex === courseData[currentLesson.moduleIndex].lessons.length - 1;
  const isCurrentLessonComplete = !!completedLessons[`${currentLesson.moduleIndex}-${currentLesson.lessonIndex}`];

  return (
    <div className="flex h-screen bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200">
      <ApiKeyModal
        isOpen={isApiKeyModalOpen}
        onSave={handleSaveApiKey}
        onSkip={handleSkipApiKey}
      />
      {/* Mobile Sidebar Toggle */}
      <button 
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-slate-900 dark:text-white"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
        aria-expanded={isSidebarOpen}
      >
        {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <Sidebar
        courseData={courseData}
        currentLesson={currentLesson}
        navigateTo={navigateTo}
        completedLessons={completedLessons}
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />
      
      <main className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4 md:p-8 lg:p-12">
          <CourseContent
            lesson={lesson}
            moduleTitle={courseData[currentLesson.moduleIndex].title}
            handlePrev={handlePrev}
            handleNext={handleNext}
            isLastLesson={isLastLesson}
            currentLessonNumber={currentLessonNumber}
            totalLessons={totalLessons}
            completedLessonsCount={completedLessonsCount}
            isComplete={isCurrentLessonComplete}
            onMarkComplete={handleMarkComplete}
            onAskTutor={handleAskTutor}
          />
        </div>
      </main>
      
      {isTutorOpen && apiKey && (
        <TutorChat 
          lesson={lesson}
          moduleTitle={courseData[currentLesson.moduleIndex].title}
          onClose={() => setIsTutorOpen(false)} 
          apiKey={apiKey}
        />
      )}
    </div>
  );
};

export default App;
