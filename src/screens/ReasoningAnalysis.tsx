import {
  ArrowRight,
  Lightbulb,
  AlertCircle,
  GitBranch,
  BookOpen,
  CheckCircle2,
  Scan,
  Brain,
} from 'lucide-react';
import type { AnalysisResult } from '../types';
import { Button } from '../components/Button';
import { ScreenContainer, SectionLabel } from '../components/Shared';
import { StatusIcon, StatusLabel } from '../components/StatusIcon';

export function ReasoningAnalysis({
  analysis,
  onContinue,
  continueLabel,
  showHint,
}: {
  analysis: AnalysisResult;
  onContinue: () => void;
  continueLabel: string;
  showHint: boolean;
}) {
  return (
    <ScreenContainer dark>
      <div className="animate-fade-in-up">
        <SectionLabel dark>STEP 4 · AI REASONING ANALYSIS</SectionLabel>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Reasoning trace
        </h1>
        <p className="text-white/50 mb-8">
          Here's what happened inside your reasoning.
        </p>

        {/* Final Answer + Quality */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <div
            className={`rounded-2xl border-2 p-5 ${
              analysis.finalAnswerCorrect
                ? 'border-accent-500/30 bg-accent-500/10'
                : 'border-amber-500/30 bg-amber-500/10'
            }`}
          >
            <p className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-2">
              Final Answer
            </p>
            <div className="flex items-center gap-2.5">
              {analysis.finalAnswerCorrect ? (
                <CheckCircle2 className="w-7 h-7 text-accent-400" />
              ) : (
                <AlertCircle className="w-7 h-7 text-amber-400" />
              )}
              <span className="text-2xl font-bold text-white">
                {analysis.finalAnswerCorrect ? 'Correct' : 'Incorrect'}
              </span>
            </div>
          </div>
          <div className="rounded-2xl border-2 border-midnight-700 bg-midnight-800/50 p-5">
            <p className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-2">
              Reasoning Quality
            </p>
            <div className="flex items-center gap-2.5">
              <Brain className="w-6 h-6 text-brand-400" />
              <span className="text-2xl font-bold text-white">
                {analysis.reasoningQuality}
              </span>
            </div>
          </div>
        </div>

        {/* Reasoning Trace — signature visual */}
        <div className="rounded-2xl border border-midnight-700 bg-midnight-800/50 p-6 sm:p-8 mb-6">
          <div className="flex items-center gap-2 mb-6">
            <Scan className="w-4 h-4 text-brand-400" />
            <h2 className="text-sm font-semibold text-white/60 uppercase tracking-wide">
              Reasoning Trace
            </h2>
          </div>

          <div className="space-y-0">
            {analysis.reasoningSteps.map((step, i) => (
              <div key={i} className="flex gap-4">
                {/* Node + connector */}
                <div className="flex flex-col items-center">
                  <div
                    className="animate-node-appear"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    <StatusIcon status={step.status} size={22} />
                  </div>
                  {i < analysis.reasoningSteps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-midnight-600 to-midnight-700 my-1.5 min-h-[28px]" />
                  )}
                </div>
                {/* Content */}
                <div
                  className={`pb-6 animate-fade-in-up ${i === analysis.reasoningSteps.length - 1 ? 'pb-0' : ''}`}
                  style={{ animationDelay: `${i * 0.15 + 0.05}s` }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-white/30">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <StatusLabel status={step.status} />
                  </div>
                  <p className="font-semibold text-white text-sm mb-1">
                    {step.label}
                  </p>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Error Point */}
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5 mb-4">
          <div className="flex items-start gap-3">
            <span className="w-10 h-10 rounded-xl bg-red-500/15 border border-red-500/20 flex items-center justify-center shrink-0">
              <AlertCircle className="w-5 h-5 text-red-400" />
            </span>
            <div>
              <h3 className="text-xs font-semibold tracking-widest text-red-400 uppercase mb-1">
                Where Your Thinking Went Wrong
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {analysis.errorPoint}
              </p>
            </div>
          </div>
        </div>

        {/* Misconception */}
        <div className="rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5 mb-4">
          <div className="flex items-start gap-3">
            <span className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/20 flex items-center justify-center shrink-0">
              <GitBranch className="w-5 h-5 text-amber-400" />
            </span>
            <div>
              <h3 className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-1">
                Misconception Detected
              </h3>
              <p className="text-sm font-semibold text-white mb-3">
                {analysis.misconception}
              </p>
              <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wide mb-1">
                Why It Matters
              </h4>
              <p className="text-sm text-white/60 leading-relaxed">
                {analysis.consequence}
              </p>
            </div>
          </div>
        </div>

        {/* Targeted Hint */}
        {showHint && (
          <div className="relative rounded-2xl border-2 border-brand-400/30 bg-gradient-to-br from-brand-500/10 to-violet-500/5 p-5 mb-6 animate-scale-in overflow-hidden">
            {/* Glow */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-500/15 rounded-full blur-3xl" />
            <div className="relative flex items-start gap-3">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center shrink-0 shadow-lg shadow-brand-500/30">
                <Lightbulb className="w-5 h-5 text-white" />
              </span>
              <div>
                <h3 className="text-xs font-semibold tracking-widest text-brand-300 uppercase mb-1">
                  AI Hint
                </h3>
                <p className="text-sm text-white/90 leading-relaxed font-medium">
                  {analysis.targetedHint}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Next concept preview */}
        {!showHint && (
          <div className="rounded-2xl border border-midnight-700 bg-midnight-800/30 p-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-midnight-700 border border-midnight-600 flex items-center justify-center shrink-0">
                <BookOpen className="w-5 h-5 text-white/40" />
              </span>
              <div>
                <p className="text-xs font-semibold text-white/30 uppercase tracking-wide">
                  Next Recommended Concept
                </p>
                <p className="text-sm font-semibold text-white/70">
                  {analysis.nextConcept}
                </p>
              </div>
            </div>
          </div>
        )}

        <Button onClick={onContinue} className="text-base">
          {continueLabel}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </ScreenContainer>
  );
}
