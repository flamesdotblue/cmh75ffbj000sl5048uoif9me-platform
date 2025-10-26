import React from 'react';
import { motion } from 'framer-motion';
import {
  ClipboardList,
  CheckSquare,
  FileText,
  Wrench,
  BookOpen,
  Package,
  ShieldCheck,
  Users,
  Bell,
  Mail,
  BarChart3,
  Folder,
  CheckCircle2,
} from 'lucide-react';

const features = [
  { title: 'Project Management', desc: 'End-to-end project lifecycle management', icon: ClipboardList },
  { title: 'Task Management', desc: 'Detailed tracking with subtasks and comments', icon: CheckSquare },
  { title: 'Experiment Management', desc: 'Document and track lab experiments', icon: FileText },
  { title: 'Equipment Management', desc: 'Manage equipment inventory and maintenance schedules', icon: Wrench },
  { title: 'Protocol Management', desc: 'Standardize operating procedures', icon: BookOpen },
  { title: 'Inventory Management', desc: 'Track chemicals, supplies, and stock', icon: Package },
  { title: 'Compliance Management', desc: 'Stay audit-ready with regulatory tracking', icon: ShieldCheck },
  { title: 'User Management', desc: 'Role-based access and team collaboration', icon: Users },
  { title: 'Notification System', desc: 'Real-time in-app alerts', icon: Bell },
  { title: 'Email Service', desc: 'Automated communications', icon: Mail },
  { title: 'Reporting & Analytics', desc: 'Actionable insights and reports', icon: BarChart3 },
  { title: 'File Management', desc: 'Secure document storage and sharing', icon: Folder },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Features() {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-geist text-3xl font-semibold text-slate-900 md:text-4xl">All-in-one lab management</h2>
          <p className="mt-4 text-slate-600">
            LabTasker is a unified platform that simplifies every aspect of laboratory management — from projects and experiments to equipment, inventory, and compliance.
          </p>
        </div>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-100px' }}
        className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((f) => (
          <motion.div key={f.title} variants={item} className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-blue-50 p-3 text-blue-700 ring-1 ring-blue-100">
                <f.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
              </div>
            </div>
            <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-blue-50 opacity-0 transition group-hover:opacity-100" />
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-16 grid grid-cols-1 gap-6 rounded-2xl bg-slate-50 p-8 ring-1 ring-slate-100 md:grid-cols-2">
        <div>
          <h3 className="text-2xl font-semibold text-slate-900">Why labs choose LabTasker</h3>
          <p className="mt-2 text-slate-600">
            Elevate productivity, accuracy, collaboration, and compliance with a modern, intuitive platform built for scientific teams.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {[
            'Reduce manual errors',
            'Centralize lab data',
            'Improve research efficiency',
            'Simplify audits and compliance',
          ].map((b) => (
            <div key={b} className="flex items-start gap-2 rounded-lg bg-white p-4 ring-1 ring-slate-200">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-green-600" />
              <span className="text-sm text-slate-700">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
