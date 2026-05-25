import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQS } from '@/lib/data';
import clsx from 'clsx';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white/[0.01]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-brand-400 uppercase tracking-widest">FAQ</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold">Common questions</h2>
          <p className="mt-4 text-slate-400">Can&rsquo;t find an answer? Chat with our support team 24/7.</p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="glass rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/4 transition-colors"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-sm text-slate-100">{faq.question}</span>
                <ChevronDown
                  size={18}
                  className={clsx('text-slate-400 shrink-0 ml-4 transition-transform duration-200', openIndex === i && 'rotate-180')}
                />
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-slate-400 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
