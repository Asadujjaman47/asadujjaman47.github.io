import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import Competitive from './components/sections/Competitive'
import Education from './components/sections/Education'
import Achievements from './components/sections/Achievements'
import Contact from './components/sections/Contact'

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

        <Competitive />

        <Education />

        <Achievements />

        <Contact />
      </main>

      <Footer />
    </div>
  )
}
