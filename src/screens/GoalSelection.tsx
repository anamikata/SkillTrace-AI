import { useState } from 'react';
import { Check, ArrowRight, Server, Code2, BarChart3, Cpu } from 'lucide-react';
import { GOALS } from '../data';
import { Button } from '../components/Button';
import { ScreenContainer, SectionLabel, StepDots } from '../components/Shared';

const goalIcons: Record<string, typeof Server> = {
  'java-backend': Server,
  'python-dev': Code2,
  'data-scientist': BarChart3,
  'software-engineer': Cpu,
};

const goalDescriptions: Record<string, string> = {
  'java-backend': 'Master OOP, data structures, and backend architecture',
  'python-dev': 'Build robust applications with clean, idiomatic Python',
  'data-scientist': 'Analyze data, build models, and derive insights',
  'software-engineer': 'Design systems, optimize algorithms, and scale',
};

export function GoalSelection({
  selectedGoalId,
  onSelect,
  onContinue,
}: {
  selectedGoalId: string;
  onSelect: (id: string) => void;
  onContinue: () => void;
}) {
  const [local, setLocal] = useState(selectedGoalId);

  const handleSelect = (id: string) => {
    setLocal(id);
    onSelect(id);
  };

  return (
    <ScreenContainer>
      <div className="animate-fade-in-up">
        <div className="flex items-center justify-between mb-6">
          <SectionLabel>STEP 1 · GOAL SELECTION</SectionLabel>
          <StepDots total={3} current={0} />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-ink-900 mb-2">
          Select your learning goal
        </h1>
        <p className="text-ink-500 mb-8">
          Choose a career path to generate your personalized skill profile.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {GOALS.map((goal, i) => {
            const selected = local === goal.id;
            const Icon = goalIcons[goal.id] ?? Server;
            const desc = goalDescriptions[goal.id] ?? '';
            return (
              <button
                key={goal.id}
                onClick={() => handleSelect(goal.id)}
                className={`group text-left p-6 rounded-2xl border-2 transition-all duration-200 animate-fade-in-up ${
                  selected
                    ? 'border-brand-500 bg-gradient-to-br from-brand-50 to-white shadow-xl shadow-brand-600/10 -translate-y-0.5'
                    : 'border-ink-200 bg-white shadow-card hover:border-ink-300 hover:shadow-card-hover hover:-translate-y-0.5'
                }`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-200 ${
                      selected
                        ? 'bg-gradient-to-br from-brand-500 to-violet-500 shadow-lg shadow-brand-500/30'
                        : 'bg-ink-100 group-hover:bg-ink-200'
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 transition-colors ${selected ? 'text-white' : 'text-ink-500'}`}
                    />
                  </span>
                  <span
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${
                      selected
                        ? 'border-brand-500 bg-brand-500'
                        : 'border-ink-300'
                    }`}
                  >
                    {selected && <Check className="w-3 h-3 text-white" />}
                  </span>
                </div>
                <h3 className="font-semibold text-ink-900 text-base mb-1">
                  {goal.title}
                </h3>
                <p className="text-sm text-ink-500 leading-relaxed mb-3">
                  {desc}
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-mono text-ink-400">
                    {goal.skills.length} skills
                  </span>
                  <span className="text-ink-300">·</span>
                  <span className="text-xs font-medium text-amber-600">
                    Gap: {goal.priorityGap}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <Button onClick={onContinue}>
          CONTINUE
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </ScreenContainer>
  );
}
