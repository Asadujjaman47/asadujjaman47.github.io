export default function SkillBadge({ name }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-50 border border-slate-200 text-slate-700 hover:border-blue-300 hover:text-blue-600 transition-colors">
      {name}
    </span>
  )
}
