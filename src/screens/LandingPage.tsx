import {
  ArrowRight,
  GitBranch,
  Brain,
  Target,
  TrendingUp,
  Zap,
  Sparkles,
  ChevronDown,
  AlertCircle,
  Search,
  Lightbulb,
} from 'lucide-react';
import { Button } from '../components/Button';

const flowSteps = [
  { label: 'GOAL', icon: Target },
  { label: 'SKILL GAP', icon: Search },
  { label: 'REASONING', icon: Brain },
  { label: 'MISCONCEPTION', icon: AlertCircle },
  { label: 'HINT', icon: Lightbulb },
  { label: 'IMPROVEMENT', icon: TrendingUp },
];

const traditionalSteps = ['Question', 'Answer', 'Right/Wrong', 'Score'];

const skillTraceSteps = [
  'Question',
  'Answer + Reasoning',
  'Reasoning Analysis',
  'Misconception',
  'Targeted Hint',
  'Retry',
  'Improvement',
];

export function LandingPage({ onStart }: { onStart: () => void }) {
  return (
    <div className="min-h-screen bg-ink-50">
      {/* ========================================
          HERO — Two-column composition
         ======================================== */}
      <section className="relative overflow-hidden bg-midnight-950">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-midnight-950 via-midnight-900 to-brand-950" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-600/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
            backgroundSize: '56px 56px',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* LEFT */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-400" />
                <span className="text-xs font-semibold tracking-widest text-white/70 uppercase">
                  AI-Powered Learning Intelligence
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display tracking-tight leading-[1.1] mb-6">
                KNOW WHAT TO LEARN.
                <br />
                <span className="text-white/60">UNDERSTAND WHY</span>
                <br />
                <span className="text-white/60">YOU STRUGGLE.</span>
                <br />
                <span className="bg-gradient-to-r from-brand-400 via-violet-400 to-brand-300 bg-clip-text text-transparent">
                  PROVE YOU IMPROVED.
                </span>
              </h1>

              <p className="text-lg text-white/50 max-w-lg mb-8 leading-relaxed">
                SkillTrace AI identifies skill gaps and traces the reasoning
                behind mistakes to deliver targeted, personalized feedback.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Button onClick={onStart} variant="primary" className="text-base">
                  START DIAGNOSTIC
                  <ArrowRight className="w-5 h-5" />
                </Button>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white/70 hover:text-white border border-white/10 hover:border-white/20 hover:bg-white/5 transition-all duration-200 font-semibold text-sm"
                >
                  EXPLORE HOW IT WORKS
                  <ChevronDown className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* RIGHT — Flow visualization */}
            <div className="relative animate-fade-in-up animate-stagger-2">
              <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 sm:p-10">
                {/* Glow */}
                <div className="absolute -inset-px bg-gradient-to-b from-brand-500/10 to-transparent rounded-3xl pointer-events-none" />

                <p className="text-xs font-semibold tracking-widest text-white/40 uppercase mb-6">
                  The SkillTrace Engine
                </p>

                <div className="space-y-1">
                  {flowSteps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <div key={step.label}>
                        <div
                          className="flex items-center gap-3 animate-node-appear"
                          style={{ animationDelay: `${0.3 + i * 0.12}s` }}
                        >
                          <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500/20 to-violet-500/10 border border-brand-400/20 flex items-center justify-center shrink-0">
                            <Icon className="w-5 h-5 text-brand-300" />
                          </span>
                          <span className="text-sm font-semibold text-white/80 tracking-wide">
                            {step.label}
                          </span>
                          {i === 0 && (
                            <span className="ml-auto text-xs text-accent-400 font-mono">
                              START
                            </span>
                          )}
                          {i === flowSteps.length - 1 && (
                            <span className="ml-auto text-xs text-accent-400 font-mono">
                              RESULT
                            </span>
                          )}
                        </div>
                        {i < flowSteps.length - 1 && (
                          <div className="ml-5 h-5 w-px bg-gradient-to-b from-brand-400/30 to-brand-400/5" />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          HOW IT WORKS
         ======================================== */}
      <section id="how-it-works" className="max-w-6xl mx-auto px-5 sm:px-6 py-16 sm:py-20">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-brand-600 uppercase mb-3">
            HOW IT WORKS
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-3">
            From skill gap to improvement
          </h2>
          <p className="text-ink-500 max-w-lg mx-auto">
            A complete learning loop that identifies, analyzes, guides, and
            measures your growth.
          </p>
        </div>

        {/* Flow chain */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-16">
          {flowSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.label} className="flex items-center gap-2 sm:gap-3">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white border border-ink-200 shadow-card text-sm font-medium text-ink-700">
                  <Icon className="w-4 h-4 text-brand-500" />
                  {step.label}
                </div>
                {i < flowSteps.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-ink-300" />
                )}
              </div>
            );
          })}
        </div>

        {/* Feature highlights */}
        <div className="grid sm:grid-cols-3 gap-5">
          {[
            { icon: Target, title: 'Pinpoint Gaps', desc: 'Identify exactly which skills need work and why.' },
            { icon: Brain, title: 'Trace Reasoning', desc: 'See where your thinking goes wrong, step by step.' },
            { icon: TrendingUp, title: 'Prove Growth', desc: 'Reassess and show measurable improvement.' },
          ].map((f, i) => (
            <div
              key={f.title}
              className="card-premium p-6 hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200 animate-fade-in-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-50 to-violet-50 border border-brand-100 flex items-center justify-center mb-4">
                <f.icon className="w-5 h-5 text-brand-600" />
              </span>
              <h4 className="font-semibold text-ink-900 text-base mb-1.5">{f.title}</h4>
              <p className="text-sm text-ink-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================
          COMPARISON — Traditional vs SkillTrace
         ======================================== */}
      <section className="bg-white border-y border-ink-200 py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold tracking-widest text-violet-600 uppercase mb-3">
              WHY SKILLTRACE
            </p>
            <h2 className="text-2xl sm:text-4xl font-bold text-ink-900 leading-tight max-w-2xl mx-auto">
              An answer tells you <span className="text-ink-400">WHAT</span> happened.
              <br />
              Reasoning tells you <span className="gradient-text">WHY.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 items-start">
            {/* Traditional */}
            <div className="card-surface p-6 sm:p-8 opacity-80">
              <div className="flex items-center gap-2.5 mb-6">
                <span className="w-9 h-9 rounded-xl bg-ink-100 flex items-center justify-center">
                  <Zap className="w-4.5 h-4.5 text-ink-400" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-ink-500 uppercase tracking-wide">
                    Traditional Assessment
                  </h3>
                  <p className="text-xs text-ink-400">Binary feedback loop</p>
                </div>
              </div>
              <div className="space-y-2">
                {traditionalSteps.map((s, i) => (
                  <div key={s} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-ink-100 flex items-center justify-center text-xs font-mono text-ink-400 shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-sm text-ink-500 font-medium">{s}</span>
                    {i < traditionalSteps.length - 1 && (
                      <span className="ml-auto text-ink-300 text-xs">↓</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* SkillTrace */}
            <div className="relative rounded-2xl border-2 border-brand-300 bg-gradient-to-br from-brand-50 via-white to-violet-50 shadow-xl shadow-brand-600/10 p-6 sm:p-8">
              <div className="absolute -top-3 left-6 px-3 py-1 rounded-full bg-brand-600 text-white text-xs font-bold tracking-wide">
                SKILLTRACE AI
              </div>
              <div className="flex items-center gap-2.5 mb-6 mt-1">
                <span className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center">
                  <GitBranch className="w-4.5 h-4.5 text-white" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-brand-700 uppercase tracking-wide">
                    Reasoning-Based Learning
                  </h3>
                  <p className="text-xs text-brand-500">Full cognitive trace</p>
                </div>
              </div>
              <div className="space-y-1.5">
                {skillTraceSteps.map((s, i) => (
                  <div key={s} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-brand-100 border border-brand-200 flex items-center justify-center text-xs font-mono text-brand-600 shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-sm text-ink-800 font-medium">{s}</span>
                    {i < skillTraceSteps.length - 1 && (
                      <span className="ml-auto text-brand-400 text-xs">↓</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-3xl mx-auto px-5 sm:px-6 py-16 sm:py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-200 bg-brand-50 mb-6">
          <Sparkles className="w-4 h-4 text-brand-600" />
          <span className="text-xs font-semibold tracking-widest text-brand-700 uppercase">
            Ready to Begin
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-4">
          Start your diagnostic
        </h2>
        <p className="text-ink-500 mb-8 max-w-md mx-auto">
          Take the first step. Identify your skill gaps and trace your
          reasoning in minutes.
        </p>
        <Button onClick={onStart} className="text-base">
          START DIAGNOSTIC
          <ArrowRight className="w-5 h-5" />
        </Button>
      </section>
    </div>
  );
}
