import type { NavItem, Feature, Testimonial, PricingPlan, Stat, FAQ } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
];

export const STATS: Stat[] = [
  { value: '50', label: 'Active Teams', suffix: 'K+' },
  { value: '99.9', label: 'Uptime SLA', suffix: '%' },
  { value: '4.9', label: 'Average Rating', suffix: '/5' },
  { value: '140', label: 'Countries', suffix: '+' },
];

export const FEATURES: Feature[] = [
  {
    icon: 'Zap',
    title: 'Lightning Fast Performance',
    description: 'Optimized infrastructure ensures your workflows run at blazing speed. No bottlenecks, no waiting.',
    color: 'text-yellow-400',
  },
  {
    icon: 'Shield',
    title: 'Enterprise-Grade Security',
    description: 'SOC 2 Type II certified with end-to-end encryption, SSO, and granular access controls.',
    color: 'text-green-400',
  },
  {
    icon: 'Users',
    title: 'Seamless Collaboration',
    description: 'Real-time multiplayer editing, shared workspaces, and threaded comments keep your team in sync.',
    color: 'text-blue-400',
  },
  {
    icon: 'BarChart3',
    title: 'Advanced Analytics',
    description: 'Actionable insights and beautiful dashboards to track progress and make data-driven decisions.',
    color: 'text-purple-400',
  },
  {
    icon: 'Plug',
    title: '200+ Integrations',
    description: 'Connect your favorite tools — Slack, Notion, GitHub, Jira, and hundreds more with one click.',
    color: 'text-brand-400',
  },
  {
    icon: 'Cpu',
    title: 'AI-Powered Automation',
    description: 'Let our AI handle repetitive tasks, summarize threads, and surface relevant information instantly.',
    color: 'text-accent-400',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Sarah Chen',
    role: 'Head of Engineering',
    company: 'Vercel',
    avatar: 'SC',
    quote: 'NovaSaaS cut our deployment time by 60%. The automation features are genuinely magical — our CI/CD pipeline has never been smoother.',
    rating: 5,
  },
  {
    name: 'Marcus Rivera',
    role: 'CTO',
    company: 'Stripe',
    avatar: 'MR',
    quote: 'We evaluated 12 platforms. NovaSaaS won on every dimension — performance, security, and the best DX we have ever encountered.',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    role: 'Product Lead',
    company: 'Linear',
    avatar: 'PN',
    quote: 'Our team of 80 adopted NovaSaaS in a single week with zero training. The UX is intuitive and the support team is world-class.',
    rating: 5,
  },
  {
    name: 'Tom Becker',
    role: 'VP of Operations',
    company: 'Figma',
    avatar: 'TB',
    quote: 'The analytics dashboards gave us visibility we never had before. We shipped three major features this quarter because of it.',
    rating: 5,
  },
  {
    name: 'Aiko Tanaka',
    role: 'Engineering Manager',
    company: 'Shopify',
    avatar: 'AT',
    quote: 'Integrations with our existing stack were painless. Within a day we had GitHub, Slack, and Jira all wired up perfectly.',
    rating: 5,
  },
  {
    name: 'Luis Ortega',
    role: 'Co-Founder',
    company: 'Loom',
    avatar: 'LO',
    quote: 'As a startup, we needed something that could scale with us. NovaSaaS grew from 5 to 200 users without a single hiccup.',
    rating: 5,
  },
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for individuals and small side projects.',
    features: [
      'Up to 3 team members',
      '5 active projects',
      '1 GB storage',
      'Core integrations',
      'Community support',
    ],
    cta: 'Get Started Free',
    highlighted: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per seat / mo',
    description: 'For growing teams that need more power and flexibility.',
    features: [
      'Unlimited team members',
      'Unlimited projects',
      '100 GB storage',
      'All 200+ integrations',
      'AI automation suite',
      'Priority support',
      'Advanced analytics',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'tailored pricing',
    description: 'Dedicated infrastructure and white-glove support for large orgs.',
    features: [
      'Everything in Pro',
      'Dedicated infrastructure',
      'SSO & SAML',
      'Custom SLA (99.99%)',
      'Audit logs & SIEM',
      'Onboarding concierge',
      'Quarterly business reviews',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

export const FAQS: FAQ[] = [
  {
    question: 'How does the 14-day free trial work?',
    answer: 'Start your Pro trial instantly — no credit card required. You get full access to every feature. At the end of 14 days, choose a plan or continue on Starter for free.',
  },
  {
    question: 'Can I switch plans at any time?',
    answer: 'Yes. Upgrade, downgrade, or cancel anytime from your billing settings. Upgrades are prorated immediately; downgrades take effect at the next billing cycle.',
  },
  {
    question: 'Where is my data stored?',
    answer: 'Data is stored in AWS regions of your choice (US, EU, APAC). All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We are SOC 2 Type II and GDPR compliant.',
  },
  {
    question: 'Does NovaSaaS support SSO?',
    answer: 'SSO via SAML 2.0 and OIDC is available on the Enterprise plan. We support Okta, Azure AD, Google Workspace, and any standard SAML provider.',
  },
  {
    question: 'What integrations are available?',
    answer: 'We offer 200+ native integrations including Slack, GitHub, GitLab, Jira, Notion, Figma, Salesforce, HubSpot, and more. A REST API and webhooks are available on all paid plans.',
  },
  {
    question: 'How does billing work for teams?',
    answer: 'Pro is billed per seat per month (or annually at a 20% discount). You can add or remove seats at any time and your invoice will be adjusted accordingly.',
  },
];
