import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'

export default function App() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />

      <main>
        <Hero />

        <section id="about" className="min-h-screen flex items-center justify-center">
          <p className="text-slate-400 text-lg">About — coming soon</p>
        </section>

        <section id="skills" className="min-h-screen flex items-center justify-center">
          <p className="text-slate-400 text-lg">Skills — coming soon</p>
        </section>

        <section id="experience" className="min-h-screen flex items-center justify-center">
          <p className="text-slate-400 text-lg">Experience — coming soon</p>
        </section>

        <section id="projects" className="min-h-screen flex items-center justify-center">
          <p className="text-slate-400 text-lg">Projects — coming soon</p>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center">
          <p className="text-slate-400 text-lg">Contact — coming soon</p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
