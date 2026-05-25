import { Zap, Shield, Users, BarChart3, Plug, Cpu } from 'lucide-react';
import { FEATURES } from '@/lib/data';
import clsx from 'clsx';

const ICON_MAP: Record<string, any> = {
  Zap, Shield, Users, BarChart3, Plug, Cpu,
};

export default function Features() {
  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-brand-400 uppercase tracking-widest">Features</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
            Everything your team needs
          </h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            A complete toolkit purpose-built for modern software teams. No duct tape required.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = ICON_MAP[feature.icon];
            return (
              <div
                key={feature.title}
                className={clsx(
                  'glass rounded-2xl p-6 hover:bg-white/6 transition-all hover:-translate-y-1 group',
                  i === 4 && 'lg:col-start-1'
                )}
              >
                <div className={clsx('w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-white/5 group-hover:scale-110 transition-transform', feature.color)}>
                  {Icon && <Icon size={22} />}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
