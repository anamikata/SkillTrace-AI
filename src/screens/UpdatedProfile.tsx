import { CheckCircle2, ArrowRight, Sparkles, BookOpen, TrendingUp } from 'lucide-react';
import type { GoalOption } from '../types';
import { Button } from '../components/Button';
import { ScreenContainer, SectionLabel, SkillBar } from '../components/Shared';
import { SkillBadge, skillLevelValue, skillBarVariant } from '../components/SkillBadge';

export function UpdatedProfile({
  goal,
  nextConcept,
}: {
  goal: GoalOption;
  nextConcept: string;
}) {
  const updatedSkills = goal.skills.map((s) =>
    s.priorityGap ? { ...s, level: 'Improved' as const } : s,
  );

  return (
    <ScreenContainer>
      <div className="animate-fade-in-up">
        <SectionLabel>STEP 10 · UPDATED PROFILE</SectionLabel>
        <h1 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-2">
          Updated skill profile
        </h1>
        <p className="text-ink-500 mb-8">
          Your progress has been recorded.
        </p>

        {/* Improvement banner */}
        <div className="relative rounded-2xl border-2 border-accent-300 bg-gradient-to-br from-accent-50 via-white to-brand-50 p-6 mb-6 shadow-xl shadow-accent-500/10 overflow-hidden">
          {/* Glow */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-accent-300/20 rounded-full blur-3xl" />

          <div className="relative flex items-start gap-4">
            <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 flex items-center justify-center shrink-0 shadow-lg shadow-accent-500/30">
              <CheckCircle2 className="w-6 h-6 text-white" />
            </span>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-accent-600" />
                <h3 className="text-lg font-bold text-ink-900">
                  OOP misconception resolved
                </h3>
              </div>
              <p className="text-sm text-ink-600 leading-relaxed">
                Your reasoning improved after targeted feedback. OOP skill
                upgraded from <span className="font-semibold text-amber-600">Developing</span> to{' '}
                <span className="font-semibold text-brand-600">Improved</span>.
              </p>
            </div>
          </div>
        </div>

        {/* Skills with bars */}
        <div className="card-premium p-6 mb-6">
          <div className="flex items-center gap-2 mb-5">
            <TrendingUp className="w-4 h-4 text-brand-500" />
            <h2 className="text-sm font-semibold text-ink-500 uppercase tracking-wide">
              Skill Assessment
            </h2>
          </div>
          <div className="space-y-5">
            {updatedSkills.map((skill, i) => {
              const value = skillLevelValue[skill.level];
              const variant = skillBarVariant[skill.level];
              return (
                <div
                  key={skill.name}
                  className={`animate-fade-in-up ${skill.priorityGap ? 'rounded-xl bg-accent-50/60 -mx-3 px-3 py-3' : ''}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-ink-800 text-sm">{skill.name}</span>
                      {skill.priorityGap && (
                        <span className="text-xs font-mono text-accent-600 bg-accent-50 px-2 py-0.5 rounded-full">
                          DEVELOPING → IMPROVED
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-ink-400">{value}%</span>
                      <SkillBadge level={skill.level} size="sm" />
                    </div>
                  </div>
                  <SkillBar value={value} variant={variant} delay={i * 100} />
                </div>
              );
            })}
          </div>
        </div>

        {/* Next concept */}
        <div className="relative rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-violet-50 p-6 mb-8 overflow-hidden">
          <div className="absolute -top-8 -right-8 w-28 h-28 bg-brand-300/20 rounded-full blur-2xl" />
          <div className="relative flex items-center gap-4">
            <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 flex items-center justify-center shrink-0 shadow-lg shadow-brand-500/25">
              <BookOpen className="w-6 h-6 text-white" />
            </span>
            <div>
              <p className="text-xs font-semibold tracking-widest text-brand-700 uppercase mb-1">
                Next Step
              </p>
              <p className="text-xl font-bold text-ink-900">{nextConcept}</p>
              <p className="text-sm text-ink-500 mt-0.5">
                Continue your learning journey with this follow-up concept.
              </p>
            </div>
          </div>
        </div>

        <Button
          onClick={() => window.location.reload()}
          variant="secondary"
        >
          RESTART JOURNEY
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </ScreenContainer>
  );
}
