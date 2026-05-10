import FadeInSection from './FadeInSection'

export default function SectionTitle({ title, subtitle }) {
  return (
    <FadeInSection className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3">{title}</h2>
      {subtitle && (
        <p className="text-slate-500 text-base max-w-xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-12 h-1 rounded-full bg-blue-600" />
    </FadeInSection>
  )
}
