import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { HiDownload, HiArrowDown } from 'react-icons/hi'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut', delay: 0.2 } },
}

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-50"
    >
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      {/* Gradient fade over grid */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-slate-50/80 to-blue-50/60" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

          {/* Left — text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center md:text-left"
          >
            <motion.p
              variants={itemVariants}
              className="text-blue-600 font-semibold text-sm sm:text-base tracking-widest uppercase mb-3"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-4"
            >
              Md. Asadujjaman
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="text-xl sm:text-2xl font-medium text-blue-600 mb-5 h-8"
            >
              <TypeAnimation
                sequence={[
                  'Software Engineer', 2000,
                  'Backend Developer', 2000,
                  'Problem Solver', 2000,
                  'System Design Thinker', 2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-slate-500 text-base sm:text-lg max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed"
            >
              Building scalable backend systems with Java &amp; Spring Boot.
              Passionate about microservices, cloud computing, and clean architecture.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 mb-8"
            >
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto px-7 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                View My Work
              </button>
              <a
                href="/Asadujjaman_CV.pdf"
                download
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold rounded-lg transition-all duration-200"
              >
                <HiDownload size={18} />
                Download Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center md:justify-start gap-5"
            >
              <a
                href="https://github.com/Asadujjaman47"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-slate-800 transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/asadujjaman10212/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://leetcode.com/u/Asadujjaman/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-yellow-500 transition-colors"
                aria-label="LeetCode"
              >
                <SiLeetcode size={22} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right — profile photo */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="flex-shrink-0"
          >
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 p-1 shadow-xl">
                <div className="w-full h-full rounded-full bg-slate-50 p-1">
                  <img
                    src="/profile.png"
                    alt="Md. Asadujjaman"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-3 -right-3 bg-white border border-slate-200 rounded-xl px-3 py-1.5 shadow-lg"
              >
                <p className="text-xs font-semibold text-slate-700">2+ Years Exp.</p>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-400 hover:text-blue-600 transition-colors"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <HiArrowDown size={22} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
