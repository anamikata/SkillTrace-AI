import type { StepStatus } from '../types';
import { Check, AlertTriangle, X } from 'lucide-react';

const statusConfig: Record<
  StepStatus,
  { icon: typeof Check; color: string; bg: string; label: string; glow: string; ring: string }
> = {
  correct: {
    icon: Check,
    color: 'text-accent-600',
    bg: 'bg-accent-500',
    label: 'Correct',
    glow: 'shadow-md shadow-accent-500/30',
    ring: 'ring-accent-500/20',
  },
  warning: {
    icon: AlertTriangle,
    color: 'text-amber-600',
    bg: 'bg-amber-500',
    label: 'Needs Attention',
    glow: 'shadow-md shadow-amber-500/30',
    ring: 'ring-amber-500/20',
  },
  error: {
    icon: X,
    color: 'text-red-600',
    bg: 'bg-red-500',
    label: 'Reasoning Error',
    glow: 'shadow-md shadow-red-500/30',
    ring: 'ring-red-500/20',
  },
};

export function StatusIcon({ status, size = 20 }: { status: StepStatus; size?: number }) {
  const cfg = statusConfig[status];
  const Icon = cfg.icon;
  return (
    <span
      className={`flex items-center justify-center rounded-full ${cfg.bg} ${cfg.glow} shrink-0 ring-2 ${cfg.ring}`}
      style={{ width: size + 10, height: size + 10 }}
    >
      <Icon className="text-white" style={{ width: size * 0.55, height: size * 0.55 }} />
    </span>
  );
}

export function StatusLabel({ status }: { status: StepStatus }) {
  const cfg = statusConfig[status];
  return (
    <span className={`text-sm font-semibold ${cfg.color}`}>
      {cfg.label}
    </span>
  );
}
