import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { SiLeetcode, SiHackerrank, SiCodeforces, SiGeeksforgeeks } from 'react-icons/si'
import { HiCode, HiExternalLink } from 'react-icons/hi'
import SectionTitle from '../ui/SectionTitle'
import { platforms, topics } from '../../data/competitive'

const platformIcons = {
  LeetCode: SiLeetcode,
  HackerRank: SiHackerrank,
  Codeforces: SiCodeforces,
  GeeksforGeeks: SiGeeksforgeeks,
  TakeUForward: HiCode,
}

export default function Competitive() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 })
  const { ref: topicsRef, inView: topicsInView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="competitive" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionTitle
          title="Competitive Programming"
          subtitle="I actively practice problem solving across multiple platforms"
        />

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {platforms.map((platform, i) => {
            const Icon = platformIcons[platform.name] || HiCode
            return (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-5 flex items-center gap-4 hover:shadow-md hover:border-slate-300 transition-all group"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: platform.color + '18' }}
                >
                  <Icon size={22} style={{ color: platform.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-800">{platform.name}</p>
                  <p className="text-xs text-slate-400 truncate">@{platform.username}</p>
                </div>
                <HiExternalLink className="text-slate-300 group-hover:text-blue-500 transition-colors flex-shrink-0" size={15} />
              </motion.a>
            )
          })}
        </div>

        {/* Topics */}
        <div ref={topicsRef} className="flex flex-wrap justify-center gap-2">
          {topics.map((topic, i) => (
            <motion.span
              key={topic}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={topicsInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.06 }}
              className="px-4 py-1.5 rounded-full text-sm font-medium bg-white border border-slate-200 text-slate-600"
            >
              {topic}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
