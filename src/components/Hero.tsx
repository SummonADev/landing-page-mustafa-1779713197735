import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-grid overflow-hidden pt-16">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-brand-600/20 blur-3xl animate-pulse-glow pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent-500/15 blur-3xl animate-pulse-glow pointer-events-none" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-900/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-sm text-brand-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Trusted by 50,000+ teams worldwide
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-6">
          Build Faster,{' '}
          <br />
          <span className="text-gradient">Scale Smarter</span>
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          NovaSaaS is the all-in-one collaboration platform that helps modern teams ship products 3× faster with AI-powered workflows, real-time editing, and 200+ integrations.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#pricing"
            className="group flex items-center gap-2 bg-brand-500 hover:bg-brand-600 text-white font-semibold px-8 py-4 rounded-xl transition-all glow-brand hover:scale-105"
          >
            Start for Free
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#features"
            className="group flex items-center gap-2 glass hover:bg-white/8 text-slate-200 font-semibold px-8 py-4 rounded-xl transition-all"
          >
            <Play size={16} className="text-brand-400" fill="currentColor" />
            See how it works
          </a>
        </div>

        {/* Hero visual */}
        <div className="relative mx-auto max-w-4xl animate-float">
          <div className="glass rounded-2xl p-1 glow-brand">
            <div className="bg-[#13131f] rounded-xl overflow-hidden">
              {/* Fake browser bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <div className="flex-1 mx-4 bg-white/5 rounded-md h-5 text-xs text-slate-500 flex items-center px-3">app.novasaas.io/dashboard</div>
              </div>
              {/* Fake dashboard content */}
              <div className="p-6 grid grid-cols-3 gap-4">
                {[{ label: 'Tasks Done', val: '1,248', color: 'text-green-400' },
                  { label: 'In Progress', val: '34', color: 'text-yellow-400' },
                  { label: 'Team Members', val: '12', color: 'text-brand-400' }].map((card) => (
                  <div key={card.label} className="glass rounded-xl p-4">
                    <p className="text-xs text-slate-500 mb-1">{card.label}</p>
                    <p className={`text-2xl font-bold ${card.color}`}>{card.val}</p>
                  </div>
                ))}
                <div className="col-span-3 glass rounded-xl p-4">
                  <p className="text-xs text-slate-500 mb-3">Sprint Progress</p>
                  <div className="space-y-2">
                    {[{ name: 'Frontend Redesign', pct: 85, color: 'bg-brand-500' },
                      { name: 'API v2 Migration', pct: 62, color: 'bg-accent-500' },
                      { name: 'Analytics Dashboard', pct: 40, color: 'bg-green-500' }].map((bar) => (
                      <div key={bar.name}>
                        <div className="flex justify-between text-xs text-slate-400 mb-1">
                          <span>{bar.name}</span><span>{bar.pct}%</span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full">
                          <div className={`h-full ${bar.color} rounded-full`} style={{ width: `${bar.pct}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
