import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { HiCode, HiTemplate, HiCloud, HiSwitchHorizontal, HiDatabase, HiCog } from 'react-icons/hi'
import SectionTitle from '../ui/SectionTitle'
import SkillBadge from '../ui/SkillBadge'
import { skillGroups } from '../../data/skills'

const groupIcons = {
  'Languages': HiCode,
  'Frameworks': HiTemplate,
  'Cloud & DevOps': HiCloud,
  'Messaging & Cache': HiSwitchHorizontal,
  'Databases': HiDatabase,
  'Tools': HiCog,
}

function SkillGroup({ group, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const Icon = groupIcons[group.label] || HiCode

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="bg-white border border-slate-200 rounded-2xl p-6"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
          <Icon className="text-blue-600" size={16} />
        </div>
        <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wide">{group.label}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.skills.map((skill, i) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.3, delay: index * 0.08 + i * 0.05 }}
          >
            <SkillBadge name={skill} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionTitle
          title="Skills"
          subtitle="Technologies and tools I work with"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skillGroups.map((group, i) => (
            <SkillGroup key={group.label} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
