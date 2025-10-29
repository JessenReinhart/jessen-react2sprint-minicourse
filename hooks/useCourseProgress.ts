import { useState, useEffect, useCallback } from 'react';
import type { LessonIdentifier } from '../types';

const COURSE_PROGRESS_KEY = 'spring-boot-course-progress';

const createLessonKey = (id: LessonIdentifier) => `${id.moduleIndex}-${id.lessonIndex}`;

export const useCourseProgress = () => {
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>(() => {
    try {
      const savedProgress = window.localStorage.getItem(COURSE_PROGRESS_KEY);
      if (savedProgress) {
        const parsed = JSON.parse(savedProgress);
        // Basic validation to ensure it's an object, not a Set or other structure
        if (typeof parsed === 'object' && parsed !== null && !Array.isArray(parsed)) {
            return parsed;
        }
      }
    } catch (error) {
      console.error('Error loading course progress from localStorage', error);
    }
    return {};
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(COURSE_PROGRESS_KEY, JSON.stringify(completedLessons));
    } catch (error) {
      console.error('Error saving course progress to localStorage', error);
    }
  }, [completedLessons]);

  const toggleLessonCompletion = useCallback((lessonIdentifier: LessonIdentifier) => {
    const key = createLessonKey(lessonIdentifier);
    setCompletedLessons(prev => {
      const newProgress = { ...prev };
      if (newProgress[key]) {
        delete newProgress[key]; // Mark as incomplete
      } else {
        newProgress[key] = true; // Mark as complete
      }
      return newProgress;
    });
  }, []);

  return { completedLessons, toggleLessonCompletion };
};
