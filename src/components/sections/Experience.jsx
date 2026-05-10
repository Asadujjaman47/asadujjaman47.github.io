import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionTitle from '../ui/SectionTitle'
import { experiences } from '../../data/experience'

function TimelineEntry({ exp, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-10"
    >
      {/* Dot on the timeline line */}
      <div className="absolute left-4 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-600 border-2 border-white shadow ring-2 ring-blue-100" />

      <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
          <div>
            <h3 className="text-base font-semibold text-slate-800">{exp.role}</h3>
            <p className="text-sm text-blue-600 font-medium">{exp.company}</p>
          </div>
          <span className="text-xs text-slate-500 bg-slate-50 border border-slate-200 rounded-full px-3 py-1 whitespace-nowrap">
            {exp.period}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {exp.tags.map(tag => (
            <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 font-medium">
              {tag}
            </span>
          ))}
        </div>

        <ul className="space-y-1.5">
          {exp.bullets.map((bullet, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 leading-relaxed">
              <span className="text-blue-400 mt-1 flex-shrink-0">▸</span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey so far"
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-slate-200" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <TimelineEntry key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
