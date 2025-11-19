import { FileText, Sparkles, Users, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: FileText,
    title: 'OCR: Any Document, Instantly',
    desc: 'Extract text from any document automatically, saving time and eliminating manual entry.',
  },
  {
    icon: Sparkles,
    title: 'Smart Document Automation',
    desc: 'Auto-fill documents using your templates with intelligent suggestions to simplify workflows.',
  },
  {
    icon: Users,
    title: 'CRM: User & Document Management',
    desc: 'Track users and their submissions over time. Streamline interactions with complete histories.',
  },
  {
    icon: BarChart3,
    title: 'Dynamic Reporting',
    desc: 'Generate tailored reports, analyze trends, define personas, and optimize products with a conversational interface.',
  },
]

export default function Modules() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Core Modules</h2>
          <p className="mt-3 text-slate-600">Everything you need to manage documents, users, and insights—fast.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900">
                <f.icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
