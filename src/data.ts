import type { GoalOption } from './types';

export const GOALS: GoalOption[] = [
  {
    id: 'java-backend',
    title: 'Java Backend Developer',
    priorityGap: 'Java OOP',
    skills: [
      { name: 'Java Fundamentals', level: 'Strong' },
      { name: 'OOP', level: 'Developing', priorityGap: true },
      { name: 'Data Structures', level: 'Developing' },
      { name: 'SQL', level: 'Weak' },
      { name: 'JDBC', level: 'Weak' },
    ],
  },
  {
    id: 'python-dev',
    title: 'Python Developer',
    priorityGap: 'Python OOP',
    skills: [
      { name: 'Python Fundamentals', level: 'Strong' },
      { name: 'OOP', level: 'Developing', priorityGap: true },
      { name: 'Data Structures', level: 'Developing' },
      { name: 'File I/O', level: 'Weak' },
      { name: 'Decorators', level: 'Weak' },
    ],
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    priorityGap: 'Statistics',
    skills: [
      { name: 'Python', level: 'Strong' },
      { name: 'Pandas', level: 'Developing' },
      { name: 'Statistics', level: 'Developing', priorityGap: true },
      { name: 'SQL', level: 'Weak' },
      { name: 'ML Models', level: 'Weak' },
    ],
  },
  {
    id: 'software-engineer',
    title: 'Software Engineer',
    priorityGap: 'System Design',
    skills: [
      { name: 'Data Structures', level: 'Strong' },
      { name: 'Algorithms', level: 'Developing' },
      { name: 'System Design', level: 'Developing', priorityGap: true },
      { name: 'Databases', level: 'Weak' },
      { name: 'Concurrency', level: 'Weak' },
    ],
  },
];

export const DIAGNOSTIC_QUESTION =
  'In Java, a parent class and child class both define a method with the same signature. If a child object is referenced using a parent-class reference and the method is called, which implementation executes and why?';

export const CORRECT_ANSWER_KEYWORDS = [
  'child',
  'runtime',
  'override',
  'dynamic dispatch',
  'object',
  'actual',
  'subclass',
];

export const PARENT_REFERENCE_TRAP = [
  'parent determines',
  'reference type determines',
  'parent implementation',
  'reference decides',
  'compile-time',
  'parent method',
];
