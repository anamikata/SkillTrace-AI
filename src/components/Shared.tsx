import type { ReactNode } from 'react';

export function ProgressBar({
  value,
  className = '',
  delay = 0,
}: {
  value: number;
  className?: string;
  delay?: number;
}) {
  return (
    <div className={`w-full h-2.5 bg-ink-100 rounded-full overflow-hidden ${className}`}>
      <div
        className="h-full bg-gradient-to-r from-brand-500 via-brand-400 to-violet-400 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${value}%`, transitionDelay: `${delay}ms` }}
      />
    </div>
  );
}

export function SkillBar({
  value,
  delay = 0,
  variant = 'brand',
}: {
  value: number;
  delay?: number;
  variant?: 'brand' | 'accent' | 'amber' | 'red' | 'violet';
}) {
  const gradients: Record<string, string> = {
    brand: 'from-brand-500 to-brand-400',
    accent: 'from-accent-500 to-accent-400',
    amber: 'from-amber-500 to-amber-400',
    red: 'from-red-500 to-red-400',
    violet: 'from-violet-500 to-violet-400',
  };
  return (
    <div className="w-full h-2 bg-ink-100 rounded-full overflow-hidden">
      <div
        className={`h-full bg-gradient-to-r ${gradients[variant]} rounded-full transition-all duration-1000 ease-out`}
        style={{ width: `${value}%`, transitionDelay: `${delay}ms` }}
      />
    </div>
  );
}

export function ScreenContainer({
  children,
  className = '',
  dark = false,
}: {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div className={`min-h-screen ${dark ? 'bg-midnight-950' : 'bg-ink-50'} ${className}`}>
      <div className="max-w-3xl mx-auto px-5 sm:px-6 py-8 sm:py-12">
        {children}
      </div>
    </div>
  );
}

export function SectionLabel({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`text-xs font-semibold tracking-widest uppercase mb-2 ${dark ? 'text-brand-400' : 'text-brand-600'}`}>
      {children}
    </p>
  );
}

export function StepDots({ total, current }: { total: number; current: number }) {
  return (
    <div className="flex items-center gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            i < current
              ? 'w-6 bg-brand-500'
              : i === current
                ? 'w-8 bg-brand-600'
                : 'w-1.5 bg-ink-200'
          }`}
        />
      ))}
    </div>
  );
}
