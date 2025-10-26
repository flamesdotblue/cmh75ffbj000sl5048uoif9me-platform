import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-white/70" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
            New • SaaS for Modern Labs
          </span>
          <h1 className="font-geist text-4xl font-semibold leading-tight text-white drop-shadow-sm md:text-6xl">
            Streamline Your Laboratory Operations with LabTasker
          </h1>
          <p className="mx-auto max-w-2xl text-base text-white/90 md:text-lg">
            A complete laboratory management system for research teams, scientists, and institutions.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Get Started
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-lg border border-white/70 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 backdrop-blur transition hover:bg-white"
            >
              Request Demo
            </a>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto mt-10 w-full max-w-5xl"
          >
            <div className="rounded-xl border border-white/30 bg-white/70 p-2 backdrop-blur">
              <div className="h-64 w-full rounded-lg bg-gradient-to-br from-slate-100 to-slate-50 shadow-inner md:h-96">
                <div className="flex h-full w-full items-center justify-center">
                  <div className="grid w-full max-w-4xl grid-cols-12 gap-3 px-4 py-4">
                    <div className="col-span-12 rounded-md border border-slate-200 bg-white p-3 shadow-sm">
                      <div className="mb-2 h-3 w-24 rounded bg-slate-200" />
                      <div className="flex gap-2">
                        <div className="h-2 w-16 rounded bg-slate-200" />
                        <div className="h-2 w-12 rounded bg-slate-200" />
                        <div className="h-2 w-20 rounded bg-slate-200" />
                      </div>
                    </div>
                    <div className="col-span-4 rounded-md border border-slate-200 bg-white p-3 shadow-sm">
                      <div className="mb-2 h-3 w-20 rounded bg-slate-200" />
                      <div className="h-24 rounded bg-slate-100" />
                    </div>
                    <div className="col-span-8 rounded-md border border-slate-200 bg-white p-3 shadow-sm">
                      <div className="mb-2 h-3 w-28 rounded bg-slate-200" />
                      <div className="h-24 rounded bg-slate-100" />
                    </div>
                    <div className="col-span-12 grid grid-cols-3 gap-3">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="rounded-md border border-slate-200 bg-white p-3 shadow-sm">
                          <div className="mb-2 h-3 w-16 rounded bg-slate-200" />
                          <div className="h-10 rounded bg-slate-100" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
