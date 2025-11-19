const values = [
  {
    title: 'Empowerment',
    desc: 'Achieve more with less effort using streamlined, user-friendly solutions.',
  },
  {
    title: 'Security',
    desc: 'Protecting data and privacy at every step, building trust with every interaction.',
  },
  {
    title: 'Seamless',
    desc: 'Consolidate forms and data into a single platform, reducing fragmentation and increasing efficiency.',
  },
  {
    title: 'Adaptability',
    desc: 'Continuously improving and evolving to meet user needs with innovative features.',
  },
]

export default function Values() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">Values</h2>
          <p className="mt-3 text-slate-600">Principles that guide every decision.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-base font-semibold text-slate-900">{v.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
