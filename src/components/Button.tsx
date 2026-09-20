import { ArrowRight } from 'lucide-react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark';
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl px-6 py-3.5 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed';

  const variants: Record<string, string> = {
    primary:
      'bg-gradient-to-r from-brand-600 to-brand-500 text-white hover:from-brand-700 hover:to-brand-600 shadow-lg shadow-brand-600/25 hover:shadow-xl hover:shadow-brand-600/30 active:scale-[0.97]',
    secondary:
      'bg-white text-ink-800 border border-ink-200 hover:border-ink-300 hover:bg-ink-50 shadow-sm active:scale-[0.97]',
    ghost:
      'text-ink-600 hover:text-ink-900 hover:bg-ink-100 active:scale-[0.97]',
    dark:
      'bg-midnight-800 text-white border border-midnight-700 hover:bg-midnight-700 shadow-lg shadow-midnight-900/30 active:scale-[0.97]',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

export function ContinueButton({
  onClick,
  label = 'CONTINUE',
}: {
  onClick: () => void;
  label?: string;
}) {
  return (
    <Button onClick={onClick} className="w-full sm:w-auto">
      {label}
      <ArrowRight className="w-4 h-4" />
    </Button>
  );
}
