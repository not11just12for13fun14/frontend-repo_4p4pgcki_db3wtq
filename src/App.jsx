import Hero from './components/Hero'
import Modules from './components/Modules'
import Mission from './components/Mission'
import Values from './components/Values'
import FooterCTA from './components/FooterCTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Simple top nav */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-slate-900" />
            <span className="text-sm font-semibold tracking-tight text-slate-900">Monoform</span>
          </div>
          <nav className="hidden gap-6 text-sm text-slate-600 sm:flex">
            <a href="#" className="hover:text-slate-900">Product</a>
            <a href="#" className="hover:text-slate-900">Pricing</a>
            <a href="#" className="hover:text-slate-900">Docs</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href="#" className="hidden text-sm text-slate-600 hover:text-slate-900 sm:inline">Sign in</a>
            <a href="#get-started" className="rounded-lg bg-slate-900 px-3 py-2 text-sm font-medium text-white hover:bg-slate-800">Get Started</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <Modules />
        <Mission />
        <Values />
        <FooterCTA />
      </main>
    </div>
  )
}

export default App
