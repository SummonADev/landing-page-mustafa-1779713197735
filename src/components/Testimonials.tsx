import { Star } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';

const AVATAR_COLORS = [
  'bg-brand-600',
  'bg-accent-600',
  'bg-green-700',
  'bg-purple-700',
  'bg-yellow-700',
  'bg-blue-700',
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-brand-400 uppercase tracking-widest">Testimonials</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">Loved by top engineers</h2>
          <p className="mt-4 text-slate-400 max-w-xl mx-auto">
            Join thousands of teams who've already made the switch.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className="glass rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/6 transition-all hover:-translate-y-1">
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              {/* Quote */}
              <p className="text-sm text-slate-300 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${AVATAR_COLORS[i % AVATAR_COLORS.length]} flex items-center justify-center text-xs font-bold text-white`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
