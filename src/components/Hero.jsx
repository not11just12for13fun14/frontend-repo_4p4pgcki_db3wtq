import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient + glow */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -inset-[30%] bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.25),transparent_35%),radial-gradient(ellipse_at_bottom_right,rgba(147,197,253,0.18),transparent_35%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
            >
              Simplicity in Every Form
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-5 text-lg leading-relaxed text-slate-600"
            >
              Empowering you to manage documents, users, and insights effortlessly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a
                href="#get-started"
                className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-slate-800"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-sm transition hover:border-slate-300"
              >
                <PlayCircle className="mr-2 h-4 w-4" />
                Request a Demo
              </a>
            </motion.div>
          </div>

          {/* Visual Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">
              <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-blue-100 blur-3xl" />
              <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-indigo-100 blur-3xl" />

              {/* Mock dashboard */}
              <div className="space-y-4">
                <div className="h-10 w-40 rounded-md bg-slate-100" />
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-24 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-slate-100" />
                  <div className="h-24 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-slate-100" />
                  <div className="h-24 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-slate-100" />
                </div>
                <div className="h-56 rounded-xl border border-slate-100 bg-slate-50" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
