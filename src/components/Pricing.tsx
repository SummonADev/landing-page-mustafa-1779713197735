import { Check } from 'lucide-react';
import { PRICING_PLANS } from '@/lib/data';
import clsx from 'clsx';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-brand-400 uppercase tracking-widest">Pricing</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">Simple, transparent pricing</h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Start free. Scale as you grow. No hidden fees, ever.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.name}
              className={clsx(
                'relative rounded-2xl p-8 flex flex-col gap-6 transition-all',
                plan.highlighted
                  ? 'bg-brand-600/20 border border-brand-500/50 glow-brand scale-105'
                  : 'glass hover:bg-white/6'
              )}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              {/* Plan name & price */}
              <div>
                <p className="text-sm font-semibold text-brand-400 mb-2">{plan.name}</p>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  {plan.price !== 'Custom' && (
                    <span className="text-slate-500 text-sm mb-1">{plan.period}</span>
                  )}
                </div>
                {plan.price === 'Custom' && (
                  <span className="text-slate-500 text-sm">{plan.period}</span>
                )}
                <p className="text-sm text-slate-400 mt-2">{plan.description}</p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check size={16} className="text-green-400 mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-300">{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#"
                className={clsx(
                  'text-center font-semibold py-3 rounded-xl transition-all text-sm',
                  plan.highlighted
                    ? 'bg-brand-500 hover:bg-brand-600 text-white glow-brand'
                    : 'glass hover:bg-white/10 text-slate-200'
                )}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
