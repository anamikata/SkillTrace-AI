import { useState } from 'react';
import { ArrowRight, HelpCircle, MessageSquare, PenLine } from 'lucide-react';
import { DIAGNOSTIC_QUESTION } from '../data';
import { Button } from '../components/Button';
import { ScreenContainer, SectionLabel, StepDots } from '../components/Shared';

export function Diagnostic({
  attemptNumber,
  previousAnswer,
  previousReasoning,
  onSubmit,
}: {
  attemptNumber: number;
  previousAnswer?: string;
  previousReasoning?: string;
  onSubmit: (answer: string, reasoning: string) => void;
}) {
  const [answer, setAnswer] = useState('');
  const [reasoning, setReasoning] = useState('');

  const canSubmit = answer.trim().length > 0 && reasoning.trim().length > 0;
  const isRetry = attemptNumber > 1;

  return (
    <ScreenContainer dark={isRetry}>
      <div className={isRetry ? 'animate-fade-in-up' : 'animate-fade-in-up'}>
        <div className="flex items-center justify-between mb-6">
          <SectionLabel dark={isRetry}>
            {isRetry ? `STEP 7 · RETRY — ATTEMPT ${attemptNumber}` : 'STEP 3 · DIAGNOSTIC 01'}
          </SectionLabel>
          <StepDots total={3} current={2} />
        </div>

        {/* Context bar */}
        <div className="flex items-center gap-3 mb-6">
          <span className={`px-3 py-1 rounded-full text-xs font-mono ${isRetry ? 'bg-midnight-800 text-brand-300' : 'bg-ink-100 text-ink-500'}`}>
            DIAGNOSTIC 01
          </span>
          <span className={`text-sm font-medium ${isRetry ? 'text-white/60' : 'text-ink-500'}`}>
            JAVA · OBJECT-ORIENTED PROGRAMMING
          </span>
          <span className={`ml-auto text-xs font-mono ${isRetry ? 'text-white/40' : 'text-ink-400'}`}>
            01 / 01
          </span>
        </div>

        <h1 className={`text-3xl sm:text-4xl font-bold mb-2 ${isRetry ? 'text-white' : 'text-ink-900'}`}>
          {isRetry ? 'Try again' : 'Diagnostic question'}
        </h1>
        <p className={`mb-8 ${isRetry ? 'text-white/50' : 'text-ink-500'}`}>
          {isRetry
            ? 'Take another shot. Your first attempt is preserved separately.'
            : 'Answer the question and explain your reasoning. Both are required.'}
        </p>

        {/* Question card */}
        <div
          className={`rounded-2xl border p-6 mb-6 ${
            isRetry
              ? 'border-brand-400/20 bg-gradient-to-br from-midnight-800 to-midnight-900'
              : 'border-brand-200 bg-gradient-to-br from-brand-50 to-white shadow-premium'
          }`}
        >
          <div className="flex items-start gap-4">
            <span
              className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                isRetry
                  ? 'bg-brand-500/20 border border-brand-400/30'
                  : 'bg-gradient-to-br from-brand-500 to-brand-600 shadow-lg shadow-brand-500/25'
              }`}
            >
              <HelpCircle className={`w-5.5 h-5.5 ${isRetry ? 'text-brand-300' : 'text-white'}`} />
            </span>
            <div>
              <p className={`text-xs font-semibold tracking-widest uppercase mb-2 ${isRetry ? 'text-brand-400' : 'text-brand-700'}`}>
                Question
              </p>
              <p className={`text-lg leading-relaxed font-medium ${isRetry ? 'text-white/90' : 'text-ink-900'}`}>
                {DIAGNOSTIC_QUESTION}
              </p>
            </div>
          </div>
        </div>

        {/* Previous attempt reference (retry only) */}
        {isRetry && previousAnswer && (
          <div className="rounded-2xl border border-midnight-700 bg-midnight-800/50 p-5 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <p className="text-xs font-semibold text-amber-400/80 uppercase tracking-wide">
                Your Attempt 1 (for reference)
              </p>
            </div>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-white/40">Answer: </span>
                <span className="text-white/70">{previousAnswer}</span>
              </div>
              <div>
                <span className="text-white/40">Reasoning: </span>
                <span className="text-white/70">{previousReasoning}</span>
              </div>
            </div>
          </div>
        )}

        {/* Answer input */}
        <div className="mb-5">
          <label className={`flex items-center gap-2 text-sm font-semibold mb-2 ${isRetry ? 'text-white/80' : 'text-ink-700'}`}>
            <MessageSquare className="w-4 h-4" />
            YOUR ANSWER
          </label>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            rows={3}
            placeholder="Which implementation executes?"
            className={`w-full rounded-xl border px-4 py-3.5 transition-all resize-none focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent ${
              isRetry
                ? 'bg-midnight-800 border-midnight-700 text-white placeholder-white/30'
                : 'bg-white border-ink-200 text-ink-900 placeholder-ink-300'
            }`}
          />
        </div>

        {/* Reasoning input — more prominent */}
        <div className="mb-8">
          <label className={`flex items-center gap-2 text-sm font-semibold mb-2 ${isRetry ? 'text-white/80' : 'text-ink-700'}`}>
            <PenLine className="w-4 h-4" />
            EXPLAIN YOUR REASONING
          </label>
          <p className={`text-xs mb-2 ${isRetry ? 'text-white/40' : 'text-ink-400'}`}>
            Don't just give the answer. Explain how you arrived there.
          </p>
          <textarea
            value={reasoning}
            onChange={(e) => setReasoning(e.target.value)}
            rows={6}
            placeholder="Walk through your thinking step by step..."
            className={`w-full rounded-xl border px-4 py-3.5 transition-all resize-none focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent ${
              isRetry
                ? 'bg-midnight-800 border-midnight-700 text-white placeholder-white/30'
                : 'bg-white border-ink-200 text-ink-900 placeholder-ink-300'
            }`}
          />
        </div>

        <Button
          onClick={() => onSubmit(answer, reasoning)}
          disabled={!canSubmit}
          className="text-base"
        >
          {isRetry ? 'SUBMIT ATTEMPT 2' : 'ANALYZE MY REASONING'}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </ScreenContainer>
  );
}
