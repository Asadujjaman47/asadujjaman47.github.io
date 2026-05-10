import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'
import { HiLocationMarker, HiMail } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import SectionTitle from '../ui/SectionTitle'
import FadeInSection from '../ui/FadeInSection'

const contactItems = [
  {
    icon: HiMail,
    label: 'Email',
    value: 'asadujjaman255@gmail.com',
    href: 'mailto:asadujjaman255@gmail.com',
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/asadujjaman10212',
    href: 'https://www.linkedin.com/in/asadujjaman10212/',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'github.com/Asadujjaman47',
    href: 'https://github.com/Asadujjaman47',
  },
  {
    icon: HiLocationMarker,
    label: 'Location',
    value: 'Mirpur 10, Dhaka, Bangladesh',
    href: null,
  },
]

const inputClass = 'w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 bg-white text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-100 transition'
const labelClass = 'text-xs font-semibold text-slate-500 uppercase tracking-wide mb-1.5 block'

export default function Contact() {
  const formRef = useRef()
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      )
      setToast({ type: 'success', message: 'Message sent successfully!' })
      formRef.current.reset()
    } catch {
      setToast({ type: 'error', message: 'Something went wrong. Please try again.' })
    } finally {
      setLoading(false)
      setTimeout(() => setToast(null), 4000)
    }
  }

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <SectionTitle
          title="Contact"
          subtitle="Have a project in mind or just want to say hello?"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — direct contact info */}
          <FadeInSection>
            <h3 className="text-lg font-semibold text-slate-800 mb-6">Get in touch</h3>
            <div className="space-y-5">
              {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-blue-600" size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="text-sm text-slate-700 hover:text-blue-600 transition-colors"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-slate-700">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>

          {/* Right — EmailJS contact form */}
          <FadeInSection delay={0.1}>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Name</label>
                  <input type="text" name="from_name" required placeholder="Your name" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Email</label>
                  <input type="email" name="from_email" required placeholder="your@email.com" className={inputClass} />
                </div>
              </div>
              <div>
                <label className={labelClass}>Subject</label>
                <input type="text" name="subject" required placeholder="What's this about?" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>Message</label>
                <textarea name="message" required rows={5} placeholder="Your message..." className={`${inputClass} resize-none`} />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 px-6 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Sending...
                  </>
                ) : 'Send Message'}
              </button>

              {toast && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm text-center px-4 py-2.5 rounded-xl font-medium ${
                    toast.type === 'success'
                      ? 'bg-green-50 text-green-700 border border-green-200'
                      : 'bg-red-50 text-red-700 border border-red-200'
                  }`}
                >
                  {toast.message}
                </motion.div>
              )}
            </form>
          </FadeInSection>

        </div>
      </div>
    </section>
  )
}
