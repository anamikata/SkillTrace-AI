import type { SkillLevel } from '../types';

const levelConfig: Record<SkillLevel, { color: string; bg: string; dot: string; glow: string }> = {
  Strong: {
    color: 'text-accent-700',
    bg: 'bg-accent-50 border-accent-200',
    dot: 'bg-accent-500',
    glow: 'shadow-sm shadow-accent-500/20',
  },
  Improved: {
    color: 'text-brand-700',
    bg: 'bg-brand-50 border-brand-200',
    dot: 'bg-brand-500',
    glow: 'shadow-sm shadow-brand-500/20',
  },
  Developing: {
    color: 'text-amber-700',
    bg: 'bg-amber-50 border-amber-200',
    dot: 'bg-amber-500',
    glow: 'shadow-sm shadow-amber-500/20',
  },
  Weak: {
    color: 'text-red-700',
    bg: 'bg-red-50 border-red-200',
    dot: 'bg-red-500',
    glow: 'shadow-sm shadow-red-500/20',
  },
};

export function SkillBadge({
  level,
  size = 'md',
}: {
  level: SkillLevel;
  size?: 'sm' | 'md';
}) {
  const cfg = levelConfig[level];
  const sizing =
    size === 'sm'
      ? 'px-2.5 py-0.5 text-xs'
      : 'px-3 py-1 text-sm';
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-semibold ${cfg.bg} ${cfg.color} ${sizing} ${cfg.glow}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${cfg.dot}`} />
      {level}
    </span>
  );
}

export const skillLevelValue: Record<SkillLevel, number> = {
  Strong: 90,
  Improved: 80,
  Developing: 60,
  Weak: 35,
};

export const skillBarVariant: Record<SkillLevel, 'accent' | 'brand' | 'amber' | 'red'> = {
  Strong: 'accent',
  Improved: 'brand',
  Developing: 'amber',
  Weak: 'red',
};
