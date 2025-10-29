export interface LessonIdentifier {
  moduleIndex: number;
  lessonIndex: number;
}

export interface QuizContent {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface CodeContent {
    language: 'java' | 'xml' | 'html' | 'bash' | 'properties' | 'typescript' | 'css' | 'sql' | 'text';
    code: string;
    fileName?: string;
}

export interface AnalogyContent {
    reactConcept: string;
    springConcept: string;
    explanation: string;
}

export type StepContent = string | CodeContent | QuizContent | AnalogyContent;

export interface Step {
  type: 'text' | 'code' | 'quiz' | 'analogy' | 'heading';
  content: StepContent;
}

export interface Lesson {
  title: string;
  steps: Step[];
}

export interface Module {
  title: string;
  lessons: Lesson[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
