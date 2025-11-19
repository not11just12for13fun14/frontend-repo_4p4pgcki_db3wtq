import { ArrowRight, Mail } from 'lucide-react'

export default function FooterCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-900">
      <div className="absolute -inset-x-10 -top-24 h-48 bg-[radial-gradient(ellipse_at_top,rgba(147,197,253,0.25),transparent_60%)]" />
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-800 p-10 text-center shadow-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Ready to transform your workflow?
          </h2>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-100"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:border-slate-600"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Sales
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-300/80">Trusted by modern teams. Add testimonials, customer logos, or an explainer video here.</p>
        </div>
      </div>
    </section>
  )
}
