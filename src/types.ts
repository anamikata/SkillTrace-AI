export type Screen =
  | 'entry'
  | 'landing'
  | 'goal'
  | 'profile'
  | 'diagnostic'
  | 'analysis'
  | 'hint'
  | 'retry'
  | 'reassessment'
  | 'updated';

export type SkillLevel = 'Strong' | 'Developing' | 'Improved' | 'Weak';

export interface Skill {
  name: string;
  level: SkillLevel;
  priorityGap?: boolean;
}

export interface GoalOption {
  id: string;
  title: string;
  skills: Skill[];
  priorityGap: string;
}

export type StepStatus = 'correct' | 'warning' | 'error';

export interface ReasoningStep {
  status: StepStatus;
  label: string;
  detail: string;
}

export interface AnalysisResult {
  finalAnswerCorrect: boolean;
  reasoningQuality: string;
  reasoningSteps: ReasoningStep[];
  correctSteps: string[];
  errorPoint: string;
  misconception: string;
  consequence: string;
  confidence: number;
  targetedHint: string;
  nextConcept: string;
  improvementSummary: string;
}

export interface Attempt {
  answer: string;
  reasoning: string;
  analysis: AnalysisResult;
}
