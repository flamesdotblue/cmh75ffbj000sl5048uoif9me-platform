import React from 'react';
import { motion } from 'framer-motion';
import { Twitter, Linkedin, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="footer" className="mt-20 border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="col-span-2">
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
              <div className="text-2xl font-bold text-slate-900">LabTasker</div>
              <p className="mt-2 max-w-md text-sm text-slate-600">
                A comprehensive SaaS-based Laboratory Management System designed to streamline research operations,
                project management, and team collaboration.
              </p>
            </motion.div>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-slate-900">About</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#features" className="hover:text-slate-900">Overview</a></li>
              <li><a href="#pricing" className="hover:text-slate-900">Pricing</a></li>
              <li><a href="#cta" className="hover:text-slate-900">Start Trial</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-sm font-semibold text-slate-900">Resources</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#features" className="hover:text-slate-900">Features</a></li>
              <li><a href="#footer" className="hover:text-slate-900">Contact</a></li>
              <li><a href="#" className="hover:text-slate-900">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 md:flex-row">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} LabTasker. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-500">
            <a href="#" aria-label="Twitter" className="transition hover:text-slate-900"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="transition hover:text-slate-900"><Linkedin className="h-5 w-5" /></a>
            <a href="#" aria-label="GitHub" className="transition hover:text-slate-900"><Github className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
