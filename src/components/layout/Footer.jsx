import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Md. Asadujjaman. Built with React & Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Asadujjaman47"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-slate-700 transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/asadujjaman10212/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-blue-600 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
