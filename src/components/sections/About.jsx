import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiLocationMarker, HiMail } from 'react-icons/hi'
import SectionTitle from '../ui/SectionTitle'
import FadeInSection from '../ui/FadeInSection'

const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '200+', label: 'DSA Problems Solved' },
  { value: 'DIU', label: 'B.Sc. CSE' },
  { value: null, label: 'Open to Work' },
]

const infoItems = [
  { icon: HiLocationMarker, label: 'Location', text: 'Mirpur 10, Dhaka, Bangladesh' },
  { icon: HiMail, label: 'Email', text: 'asadujjaman255@gmail.com' },
]

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 })

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionTitle
          title="About Me"
          subtitle="A little about who I am and what drives me"
        />

        <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-start">

          {/* Left — info card */}
          <FadeInSection className="w-full md:w-72 flex-shrink-0">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 divide-y divide-slate-200">
              {infoItems.map(({ icon: Icon, label, text }) => (
                <div key={label} className="flex items-start gap-4 py-4 first:pt-0 last:pb-0">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-blue-600" size={17} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">{label}</p>
                    <p className="text-slate-700 text-sm leading-snug">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Right — bio + stats */}
          <div className="flex-1">
            <FadeInSection delay={0.1}>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
                I'm a Backend Software Engineer from Dhaka, Bangladesh, with a B.Sc. in CSE
                from Daffodil International University. My journey started with C++ and algorithms
                — I was an executive member of the{' '}
                <span className="text-blue-600 font-medium">DIU Computer Programming Club</span>,
                where I organized programming contests and boot camps. That foundation led me to
                solve{' '}
                <span className="text-blue-600 font-medium">200+ problems</span> on LeetCode
                and HackerRank.
              </p>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-10">
                Today I work at PIS as a Jr. Back-End Developer, building microservice
                architectures with Spring Cloud, Docker, and PostgreSQL. I'm passionate about
                system design, cloud computing, and DevOps — always looking to engineer software
                that truly scales.
              </p>
            </FadeInSection>

            {/* Stat cards */}
            <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => {
                const isOpenToWork = stat.value === null
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className={`rounded-xl p-5 text-center border ${
                      isOpenToWork
                        ? 'bg-green-50 border-green-200'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    {isOpenToWork ? (
                      <div className="flex flex-col items-center justify-center gap-2">
                        <motion.span
                          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.3, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                          className="block w-3 h-3 rounded-full bg-green-500"
                        />
                        <p className="text-xs font-semibold text-green-700">Open to Work</p>
                      </div>
                    ) : (
                      <>
                        <p className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
                          {stat.value}
                        </p>
                        <p className="text-xs text-slate-500 leading-tight">{stat.label}</p>
                      </>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
