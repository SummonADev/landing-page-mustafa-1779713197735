import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="relative glass rounded-3xl p-12 md:p-16 text-center overflow-hidden">
          {/* Blobs */}
          <div className="absolute -top-20 -left-20 w-80 h-80 bg-brand-600/25 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-sm text-accent-400 mb-8">
              <Sparkles size={14} />
              Start your free 14-day trial
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Ready to move{' '}
              <span className="text-gradient">10× faster?</span>
            </h2>
            <p className="text-slate-400 max-w-xl mx-auto mb-10 text-lg">
              No credit card. No commitment. Full access from day one.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="group flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-xl transition-all glow-brand hover:scale-105"
              >
                Create Free Account
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#pricing"
                className="text-slate-400 hover:text-white transition-colors font-medium text-sm"
              >
                View pricing →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
