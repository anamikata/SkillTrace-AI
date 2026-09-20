import {
  ArrowRight,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  BookOpen,
} from 'lucide-react';
import type { Attempt } from '../types';
import { Button } from '../components/Button';
import { ScreenContainer, SectionLabel, ProgressBar } from '../components/Shared';
import { StatusIcon } from '../components/StatusIcon';

export function Reassessment({
  attempt1,
  attempt2,
  onViewProfile,
}: {
  attempt1: Attempt;
  attempt2: Attempt;
  onViewProfile: () => void;
}) {
  const resolved =
    attempt2.analysis.finalAnswerCorrect ||
    (!attempt2.analysis.misconception.includes('None detected') &&
      attempt2.analysis.reasoningQuality !== attempt1.analysis.reasoningQuality);

  const beforeScore = 60;
  const afterScore = 85;

  return (
    <ScreenContainer dark>
      <div className="animate-fade-in-up">
        <SectionLabel dark>STEP 9 · REASSESSMENT</SectionLabel>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
          Before vs After
        </h1>
        <p className="text-white/50 mb-8">
          See how your reasoning evolved between attempts.
        </p>

        {/* Before / After visualization */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          {/* Before */}
          <div className="rounded-2xl border border-midnight-700 bg-midnight-800/50 p-6">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/20 flex items-center justify-center">
                <AlertCircle className="w-4.5 h-4.5 text-amber-400" />
              </span>
              <div>
                <p className="text-xs font-semibold text-amber-400/70 uppercase tracking-wide">
                  Before
                </p>
                <h3 className="font-semibold text-white text-sm">Attempt 1</h3>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-xs text-white/30 uppercase tracking-wide mb-1">Answer</p>
              <p className="text-sm text-white/60 line-clamp-2">{attempt1.answer}</p>
            </div>
            <div className="mb-5">
              <p className="text-xs text-white/30 uppercase tracking-wide mb-1">Misconception</p>
              <p className="text-sm text-amber-400 font-medium">{attempt1.analysis.misconception}</p>
            </div>
            <div className="flex items-end justify-between mb-2">
              <span className="text-xs text-white/40 font-medium">OOP reasoning</span>
              <span className="text-2xl font-bold text-amber-400 font-display">{beforeScore}%</span>
            </div>
            <div className="w-full h-2 bg-midnight-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full transition-all duration-1000"
                style={{ width: `${beforeScore}%` }}
              />
            </div>
            <div className="flex items-center gap-2 mt-4">
              <StatusIcon status="warning" size={14} />
              <span className="text-xs font-medium text-amber-400">Misconception detected</span>
            </div>
          </div>

          {/* After */}
          <div className="relative rounded-2xl border-2 border-accent-500/30 bg-gradient-to-br from-accent-500/10 to-midnight-800/50 p-6 shadow-xl shadow-accent-500/10">
            <div className="absolute -top-3 right-4 px-2.5 py-0.5 rounded-full bg-accent-500 text-white text-xs font-bold">
              IMPROVED
            </div>
            <div className="flex items-center gap-2 mb-5">
              <span className="w-9 h-9 rounded-xl bg-accent-500/20 border border-accent-500/30 flex items-center justify-center">
                <CheckCircle2 className="w-4.5 h-4.5 text-accent-400" />
              </span>
              <div>
                <p className="text-xs font-semibold text-accent-400/70 uppercase tracking-wide">
                  After
                </p>
                <h3 className="font-semibold text-white text-sm">Attempt 2</h3>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-xs text-white/30 uppercase tracking-wide mb-1">Answer</p>
              <p className="text-sm text-white/70 line-clamp-2">{attempt2.answer}</p>
            </div>
            <div className="mb-5">
              <p className="text-xs text-white/30 uppercase tracking-wide mb-1">Analysis</p>
              <p className="text-sm text-accent-400 font-medium">{attempt2.analysis.improvementSummary}</p>
            </div>
            <div className="flex items-end justify-between mb-2">
              <span className="text-xs text-white/40 font-medium">OOP reasoning</span>
              <span className="text-2xl font-bold text-accent-400 font-display">{afterScore}%</span>
            </div>
            <div className="w-full h-2 bg-midnight-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-accent-500 to-accent-400 rounded-full transition-all duration-1000"
                style={{ width: `${afterScore}%`, transitionDelay: '200ms' }}
              />
            </div>
            <div className="flex items-center gap-2 mt-4">
              <StatusIcon status="correct" size={14} />
              <span className="text-xs font-medium text-accent-400">Reasoning improved</span>
            </div>
          </div>
        </div>

        {/* Progress arrow */}
        <div className="flex items-center justify-center gap-2 mb-6 text-white/30">
          <div className="h-px w-12 bg-gradient-to-r from-amber-500/30 to-accent-500/30" />
          <TrendingUp className="w-5 h-5 text-accent-400" />
          <span className="text-xs font-mono">+25% improvement</span>
          <div className="h-px w-12 bg-gradient-to-r from-accent-500/30 to-accent-500/30" />
        </div>

        {/* Skill Progress */}
        <div className="rounded-2xl border border-midnight-700 bg-midnight-800/50 p-6 mb-4">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-4 h-4 text-brand-400" />
            <h2 className="text-sm font-semibold text-white/60 uppercase tracking-wide">
              Skill Progress
            </h2>
          </div>
          <div className="flex items-end gap-3 mb-3">
            <span className="text-4xl font-bold text-white font-display">80%</span>
            <span className="text-sm text-white/40 pb-1">OOP mastery</span>
            <span className="ml-auto text-xs font-mono text-accent-400">+20% from baseline</span>
          </div>
          <ProgressBar value={80} delay={300} />
        </div>

        {/* Misconception Status */}
        <div
          className={`rounded-2xl border-2 p-5 mb-4 ${
            resolved
              ? 'border-accent-500/30 bg-accent-500/10'
              : 'border-amber-500/30 bg-amber-500/10'
          }`}
        >
          <div className="flex items-center gap-3">
            {resolved ? (
              <CheckCircle2 className="w-7 h-7 text-accent-400" />
            ) : (
              <AlertCircle className="w-7 h-7 text-amber-400" />
            )}
            <div>
              <p className="text-xs font-semibold tracking-widest text-white/40 uppercase">
                Misconception Status
              </p>
              <p className="text-lg font-bold text-white flex items-center gap-2">
                {resolved ? 'Resolved' : 'Partially resolved'}
                {resolved && <CheckCircle2 className="w-5 h-5 text-accent-400" />}
              </p>
            </div>
          </div>
        </div>

        {/* Next Concept */}
        <div className="relative rounded-2xl border border-brand-400/20 bg-gradient-to-br from-brand-500/10 to-violet-500/5 p-5 mb-8 overflow-hidden">
          <div className="absolute -top-8 -right-8 w-28 h-28 bg-brand-500/15 rounded-full blur-2xl" />
          <div className="relative flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center shrink-0 shadow-lg shadow-brand-500/25">
              <BookOpen className="w-5 h-5 text-white" />
            </span>
            <div>
              <p className="text-xs font-semibold tracking-widest text-brand-300 uppercase">
                Next Recommended Concept
              </p>
              <p className="text-lg font-bold text-white">{attempt2.analysis.nextConcept}</p>
            </div>
          </div>
        </div>

        <Button onClick={onViewProfile} className="text-base">
          VIEW UPDATED SKILL PROFILE
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </ScreenContainer>
  );
}
