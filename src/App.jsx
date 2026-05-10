import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'

export default function App() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />

      <main>
        <Hero />

        <About />

        <Skills />

        <Experience />

        <Projects />

        <section id="contact" className="min-h-screen flex items-center justify-center">
          <p className="text-slate-400 text-lg">Contact — coming soon</p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
