import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiStar, HiBadgeCheck, HiExternalLink } from 'react-icons/hi'
import SectionTitle from '../ui/SectionTitle'
import { honors, certifications } from '../../data/education'

export default function Achievements() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="achievements" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionTitle
          title="Honors & Certifications"
          subtitle="Recognition and credentials earned along the way"
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Honors & Awards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0 }}
            className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-yellow-50 border border-yellow-100 flex items-center justify-center flex-shrink-0">
                <HiStar className="text-yellow-500" size={18} />
              </div>
              <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Honors & Awards</h3>
            </div>
            <ul className="space-y-4">
              {honors.map((h, i) => (
                <li key={i} className="border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                  <p className="text-sm font-bold text-slate-800">{h.title}</p>
                  <p className="text-sm text-blue-600 font-medium">{h.event}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{h.issuer} · {h.date}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                <HiBadgeCheck className="text-green-600" size={18} />
              </div>
              <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">Certifications</h3>
            </div>
            <ul className="space-y-4">
              {certifications.map((cert, i) => (
                <li key={i} className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-slate-800">{cert.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{cert.issuer} · {cert.date}</p>
                  </div>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-700 font-medium whitespace-nowrap mt-0.5"
                  >
                    View <HiExternalLink size={12} />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
