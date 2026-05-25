import { Zap, Twitter, Github, Linkedin } from 'lucide-react';

const FOOTER_LINKS = [
  {
    heading: 'Product',
    links: ['Features', 'Integrations', 'Pricing', 'Changelog'],
  },
  {
    heading: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press'],
  },
  {
    heading: 'Resources',
    links: ['Documentation', 'API Reference', 'Community', 'Status'],
  },
  {
    heading: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'Cookies'],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand col */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-500 flex items-center justify-center">
                <Zap size={16} className="text-white" fill="white" />
              </div>
              <span className="font-bold text-white">NovaSaaS</span>
            </a>
            <p className="text-sm text-slate-500 leading-relaxed">
              The all-in-one platform for modern teams.
            </p>
            <div className="flex items-center gap-3 mt-5">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 glass rounded-lg flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold text-slate-300 uppercase tracking-widest mb-4">{col.heading}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-500 hover:text-slate-300 transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} NovaSaaS, Inc. All rights reserved.</p>
          <p className="text-sm text-slate-600">Made with ♥ for builders everywhere</p>
        </div>
      </div>
    </footer>
  );
}
