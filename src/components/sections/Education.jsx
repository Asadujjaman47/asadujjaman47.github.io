import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../ui/SectionTitle'
import { education } from '../../data/education'

function TimelineEntry({ edu, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-10"
    >
      <div className="absolute left-4 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-600 border-2 border-white shadow ring-2 ring-blue-100" />

      <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-base font-semibold text-slate-800">{edu.institution}</h3>
            <p className="text-sm text-blue-600 font-medium">{edu.degree}</p>
          </div>
          <span className="text-xs text-slate-500 bg-slate-50 border border-slate-200 rounded-full px-3 py-1 whitespace-nowrap">
            {edu.period}
          </span>
        </div>

        {edu.cgpa && (
          <p className="text-xs font-semibold text-slate-600 mb-3">CGPA: {edu.cgpa}</p>
        )}

        {edu.achievements.length > 0 && (
          <ul className="space-y-1.5">
            {edu.achievements.map((a, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
                <span className="text-blue-400 mt-1 flex-shrink-0">▸</span>
                {a}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}

export default function Education() {
  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionTitle
          title="Education"
          subtitle="My academic background"
        />

        <div className="relative">
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-slate-200" />
          <div className="space-y-6">
            {education.map((edu, i) => (
              <TimelineEntry key={edu.institution} edu={edu} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
