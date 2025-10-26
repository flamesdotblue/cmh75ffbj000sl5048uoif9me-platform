import React from 'react';
import { motion } from 'framer-motion';
import { Star, Building2, FlaskConical, GraduationCap, Check } from 'lucide-react';

const testimonials = [
  {
    title: 'For Research Institutes',
    quote:
      'LabTasker centralized our projects and compliance checks. Our teams move faster with clearer audit trails.',
    author: 'Director of Research, Nova Institute',
    icon: Building2,
  },
  {
    title: 'For Pharma Labs',
    quote:
      'GMP compliance and equipment maintenance are finally streamlined. We saved countless hours each month.',
    author: 'QA Lead, Helix Pharma',
    icon: FlaskConical,
  },
  {
    title: 'For Academic Labs',
    quote:
      'Perfect for multi-PI environments. Student onboarding and protocol sharing are effortless now.',
    author: 'Lab Manager, State University',
    icon: GraduationCap,
  },
];

const plans = [
  {
    name: 'Free Trial',
    price: '$0',
    cadence: '14 days',
    highlight: false,
    features: ['All core modules', 'Up to 5 users', 'Community support'],
    cta: 'Start Free Trial',
  },
  {
    name: 'Professional',
    price: '$49',
    cadence: 'per user / mo',
    highlight: true,
    features: ['Unlimited projects', 'Advanced analytics', 'Priority support', 'SSO & RBAC'],
    cta: 'Get Started',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: 'annual',
    highlight: false,
    features: ['On-prem or cloud', 'SLA & dedicated CSM', 'Compliance add-ons', 'Custom integrations'],
    cta: 'Contact Sales',
  },
];

export default function TestimonialsPricing() {
  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-geist text-3xl font-semibold text-slate-900 md:text-4xl">Trusted across research and industry</h2>
          <p className="mt-3 text-slate-600">Designed for institutes, pharma, and academic labs alike.</p>
        </div>
      </motion.div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <div className="mb-3 inline-flex items-center gap-2 text-blue-700">
              <t.icon className="h-5 w-5" />
              <span className="text-sm font-semibold">{t.title}</span>
            </div>
            <p className="text-slate-700">“{t.quote}”</p>
            <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <span className="ml-1">{t.author}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <h3 className="text-3xl font-semibold text-slate-900">Simple, transparent pricing</h3>
        <p className="mt-2 text-slate-600">Choose a plan that fits your lab's needs.</p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {plans.map((p) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={`relative flex flex-col rounded-2xl border p-6 shadow-sm ${
              p.highlight ? 'border-blue-600 bg-gradient-to-b from-white to-blue-50' : 'border-slate-200 bg-white'
            }`}
          >
            {p.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white shadow">
                Most Popular
              </span>
            )}
            <div className="flex items-end justify-between">
              <div>
                <h4 className="text-lg font-semibold text-slate-900">{p.name}</h4>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-slate-900">{p.price}</span>
                  <span className="text-sm text-slate-500">{p.cadence}</span>
                </div>
              </div>
            </div>
            <ul className="mt-6 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                  <Check className="h-4 w-4 text-green-600" /> {f}
                </li>
              ))}
            </ul>
            <a
              href="#cta"
              className={`mt-6 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold shadow-sm transition focus:outline-none focus:ring-2 ${
                p.highlight
                  ? 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400'
                  : 'bg-slate-900 text-white hover:bg-black focus:ring-slate-400'
              }`}
            >
              {p.cta}
            </a>
          </motion.div>
        ))}
      </div>

      <div id="cta" className="mt-16 rounded-2xl bg-slate-900 px-6 py-10 text-center text-white">
        <h3 className="text-2xl font-semibold">Ready to transform your lab operations? Try LabTasker today!</h3>
        <p className="mt-2 text-white/80">Start a free trial or book a personalized demo.</p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#pricing" className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow transition hover:bg-white/90">
            Start Free Trial
          </a>
          <a href="#footer" className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Book a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
