import type { AnalysisResult, ReasoningStep } from './types';
import {
  CORRECT_ANSWER_KEYWORDS,
  PARENT_REFERENCE_TRAP,
} from './data';

function normalize(text: string): string {
  return text.toLowerCase().trim();
}

function containsAny(text: string, keywords: string[]): boolean {
  return keywords.some((kw) => text.includes(kw));
}

/**
 * Deterministic fallback analysis for the Java method-override diagnostic.
 * Produces structured reasoning-trace data so the demo always works without
 * any external API.
 */
export function analyzeReasoning(
  answer: string,
  reasoning: string,
): AnalysisResult {
  const ans = normalize(answer);
  const rea = normalize(reasoning);
  const combined = `${ans} ${rea}`;

  const mentionsChildImpl = containsAny(combined, CORRECT_ANSWER_KEYWORDS);
  const hasParentTrap = containsAny(combined, PARENT_REFERENCE_TRAP);

  let finalAnswerCorrect = false;
  let reasoningQuality = '';
  const steps: ReasoningStep[] = [];
  const correctSteps: string[] = [];
  let errorPoint = '';
  let misconception = '';
  let consequence = '';
  let confidence = 0;

  if (mentionsChildImpl && !hasParentTrap) {
    // Fully correct
    finalAnswerCorrect = true;
    reasoningQuality = 'Strong';
    confidence = 95;

    steps.push(
      {
        status: 'correct',
        label: 'Correctly identified the inheritance relationship',
        detail:
          'You recognized that a child class extends a parent and overrides the method.',
      },
      {
        status: 'correct',
        label: 'Correctly identified runtime method selection',
        detail:
          'You understood that the actual object type — not the reference type — determines which overridden method runs.',
      },
      {
        status: 'correct',
        label: 'Correctly identified dynamic method dispatch',
        detail:
          'You connected this to Java\u2019s runtime polymorphism (dynamic dispatch).',
      },
    );
    correctSteps.push(
      'Identified inheritance relationship',
      'Identified runtime method selection',
      'Identified dynamic dispatch',
    );
    errorPoint = 'No significant reasoning error detected.';
    misconception = 'None detected \u2014 reasoning is sound.';
    consequence =
      'Your understanding of polymorphism is solid. Continue to deeper OOP concepts.';
  } else if (mentionsChildImpl && hasParentTrap) {
    // Partially correct — right answer, flawed reasoning
    reasoningQuality = 'Needs Attention';
    confidence = 60;

    steps.push(
      {
        status: 'correct',
        label: 'Correctly identified the inheritance relationship',
        detail:
          'You recognized that a child class extends a parent and overrides the method.',
      },
      {
        status: 'warning',
        label: 'Mixed up reference type vs. object type',
        detail:
          'You mentioned the parent reference determines the implementation, even though you arrived at the child method.',
      },
      {
        status: 'warning',
        label: 'Reasoning is internally inconsistent',
        detail:
          'The conclusion contradicts the stated rule — the reference type does NOT select the method at runtime.',
      },
    );
    correctSteps.push('Identified inheritance relationship');
    errorPoint =
      'You assumed the parent reference type influences method selection at runtime.';
    misconception =
      'Confusing compile-time reference type with runtime method overriding.';
    consequence =
      'This confusion leads to unpredictable predictions when casting, interfaces, or multiple inheritance levels are involved.';
  } else if (!mentionsChildImpl && hasParentTrap) {
    // Fully incorrect with the classic trap
    reasoningQuality = 'Needs Attention';
    confidence = 35;

    steps.push(
      {
        status: 'correct',
        label: 'Correctly identified the inheritance relationship',
        detail:
          'You recognized that a child class extends a parent and overrides the method.',
      },
      {
        status: 'warning',
        label: 'Assumed the parent reference determines the implementation',
        detail:
          'You concluded the parent-class reference selects the parent\u2019s method.',
      },
      {
        status: 'error',
        label: 'Reasoning Error',
        detail:
          'This assumption leads to the incorrect method-selection conclusion.',
      },
    );
    correctSteps.push('Identified inheritance relationship');
    errorPoint =
      'You assumed the parent reference type determines which method runs.';
    misconception =
      'Confusing compile-time reference type with runtime method overriding.';
    consequence =
      'This leads to wrong predictions about polymorphic behavior, making it hard to reason about frameworks that rely on dynamic dispatch (e.g., Spring, Hibernate).';
  } else {
    // Vague or incomplete — no clear signal
    reasoningQuality = 'Needs Attention';
    confidence = 40;

    steps.push(
      {
        status: 'warning',
        label: 'Insufficient reasoning provided',
        detail:
          'Your answer did not clearly identify the inheritance or dispatch mechanism.',
      },
      {
        status: 'warning',
        label: 'No clear method-selection logic',
        detail:
          'You did not explain which object\u2019s implementation is selected at runtime.',
      },
      {
        status: 'error',
        label: 'Reasoning Error',
        detail:
          'Without identifying runtime dispatch, the conclusion cannot be justified.',
      },
    );
    correctSteps.push('Identified inheritance relationship');
    errorPoint =
      'You did not identify which object\u2019s implementation is selected at runtime.';
    misconception =
      'Confusing compile-time reference type with runtime method overriding.';
    consequence =
      'Without understanding dynamic dispatch, you cannot predict behavior in polymorphic systems or framework code.';
  }

  return {
    finalAnswerCorrect,
    reasoningQuality,
    reasoningSteps: steps,
    correctSteps,
    errorPoint,
    misconception,
    consequence,
    confidence,
    targetedHint:
      'Think about which object\u2019s implementation is selected at runtime \u2014 not the type of the reference variable.',
    nextConcept: 'Dynamic Method Dispatch',
    improvementSummary:
      'Reasoning improved \u2014 correctly identified runtime method dispatch after targeted hint.',
  };
}
