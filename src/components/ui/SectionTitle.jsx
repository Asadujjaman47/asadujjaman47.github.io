import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function SectionTitle({ title, subtitle }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="mb-12 flex flex-col items-center text-center w-full"
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">{title}</h2>
      {subtitle && (
        <p className="text-slate-500 text-base max-w-xl">{subtitle}</p>
      )}
      <div className="mt-4 w-12 h-1 rounded-full bg-blue-600" />
    </motion.div>
  )
}
