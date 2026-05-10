import { HiExternalLink } from 'react-icons/hi'
import { SiGithub } from 'react-icons/si'

export default function ProjectCard({ project }) {
  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col h-full hover:shadow-md transition-shadow">
      <h3 className="text-base font-semibold text-slate-800 mb-2">{project.name}</h3>
      <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tags.map(tag => (
          <span key={tag} className="text-xs px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600 font-medium">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex gap-2">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600 transition-colors"
        >
          <SiGithub size={13} />
          GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <HiExternalLink size={13} />
            Live Demo
          </a>
        )}
      </div>
    </div>
  )
}
