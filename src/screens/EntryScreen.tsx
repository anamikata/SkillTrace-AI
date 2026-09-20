import { ArrowRight, Sparkles } from 'lucide-react';

export function EntryScreen({ onEnter }: { onEnter: () => void }) {
  return (
    <div
      onClick={onEnter}
      className="relative w-full min-h-screen flex items-center justify-center cursor-pointer overflow-hidden group bg-midnight-950"
    >
      {/* Deep gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight-950 via-midnight-900 to-brand-950" />

      {/* Ambient glows */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-600/20 rounded-full blur-[140px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-600/15 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-600/8 rounded-full blur-[160px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '56px 56px',
        }}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(8, 10, 24, 0.6) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-2xl animate-fade-in-up">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-10">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-accent-400 opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-400" />
          </span>
          <span className="text-xs font-semibold tracking-widest text-white/70 uppercase">
            AI-Powered Learning Intelligence
          </span>
        </div>

        {/* Title */}
        <h1 className="text-5xl sm:text-7xl font-bold text-white font-display tracking-tight mb-5 leading-none">
          SKILLTRACE
          <span className="block mt-1 bg-gradient-to-r from-brand-400 via-violet-400 to-brand-300 bg-clip-text text-transparent">
            AI
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/50 mb-14 font-light tracking-wide">
          Your learning journey starts here.
        </p>

        {/* CTA with glow */}
        <div className="relative inline-block">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-500 to-violet-500 rounded-2xl blur-md opacity-60 animate-glow-pulse" />
          <div className="relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-ink-900 font-semibold text-base shadow-2xl group-hover:gap-4 group-hover:bg-brand-50 transition-all duration-300">
            ENTER SKILLTRACE
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>

        {/* Hint */}
        <div className="mt-12 flex items-center justify-center gap-2 text-white/30">
          <Sparkles className="w-3.5 h-3.5" />
          <p className="text-xs tracking-wider">
            Click anywhere to continue
          </p>
        </div>
      </div>
    </div>
  );
}
