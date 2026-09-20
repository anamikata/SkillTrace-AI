import { ArrowRight, AlertCircle, Brain, Sparkles } from 'lucide-react';
import type { GoalOption } from '../types';
import { Button } from '../components/Button';
import { ScreenContainer, SectionLabel, StepDots, SkillBar } from '../components/Shared';
import { SkillBadge, skillLevelValue, skillBarVariant } from '../components/SkillBadge';

export function SkillProfile({
  goal,
  onStart,
}: {
  goal: GoalOption;
  onStart: () => void;
}) {
  return (
    <ScreenContainer>
      <div className="animate-fade-in-up">
        <div className="flex items-center justify-between mb-6">
          <SectionLabel>STEP 2 · SKILL PROFILE</SectionLabel>
          <StepDots total={3} current={1} />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-2">
          Your skill profile
        </h1>
        <p className="text-ink-500 mb-8">
          Based on your current diagnostic performance for{' '}
          <span className="font-semibold text-ink-700">{goal.title}</span>
        </p>

        {/* Skills with bars */}
        <div className="card-premium p-6 mb-6">
          <div className="flex items-center gap-2 mb-5">
            <Brain className="w-4 h-4 text-brand-500" />
            <h2 className="text-sm font-semibold text-ink-500 uppercase tracking-wide">
              Skill Assessment
            </h2>
          </div>
          <div className="space-y-5">
            {goal.skills.map((skill, i) => {
              const value = skillLevelValue[skill.level];
              const variant = skillBarVariant[skill.level];
              return (
                <div key={skill.name} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-ink-800 text-sm">{skill.name}</span>
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

        {/* Priority Gap — standout card */}
        <div className="relative rounded-2xl border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white p-6 mb-8 shadow-lg shadow-amber-500/10 overflow-hidden">
          {/* Glow */}
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-300/20 rounded-full blur-3xl" />

          <div className="relative flex items-start gap-4">
            <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/30">
              <AlertCircle className="w-6 h-6 text-white" />
            </span>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                <p className="text-xs font-semibold tracking-widest text-amber-700 uppercase">
                  AI Identified Priority Gap
                </p>
              </div>
              <h3 className="text-2xl font-bold text-ink-900 mb-2">
                {goal.priorityGap}
              </h3>
              <p className="text-sm text-ink-600 leading-relaxed">
                Your current reasoning patterns suggest this is the
                highest-impact concept to strengthen next.
              </p>
            </div>
          </div>
        </div>

        <Button onClick={onStart} className="text-base">
          START DIAGNOSTIC
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </ScreenContainer>
  );
}
