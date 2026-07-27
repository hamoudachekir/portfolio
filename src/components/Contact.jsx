import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send, AlertCircle, CheckCircle } from 'lucide-react'
import toast from 'react-hot-toast'
import { profile } from '../data/profile'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })
    const toastId = toast.loading('Sending…')

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ 'form-name': 'contact', ...formData }).toString(),
      })
      if (!res.ok) throw new Error(`Status ${res.status}`)

      toast.success(`Thanks ${formData.name} — message sent.`)
      setFormData({ name: '', email: '', message: '' })
      setStatus({ type: 'success', message: 'Message sent successfully.' })
    } catch {
      toast.error(`Could not send. Email me at ${profile.email}`)
      setStatus({ type: 'error', message: 'Send failed. Use email instead.' })
    } finally {
      toast.dismiss(toastId)
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="section-pad border-t border-paper-line bg-paper">
      <div className="container-page max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="eyebrow">Contact</p>
          <h2 className="display mt-3 text-3xl sm:text-4xl md:text-5xl">Let’s talk</h2>
          <p className="mt-4 text-ink-soft">
            Open to internships, junior roles, and collaboration in Tunis or remote.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          name="contact"
          data-netlify="true"
          className="surface mt-12 space-y-5 p-6 md:p-8"
        >
          <input type="hidden" name="form-name" value="contact" />

          {status.message && (
            <div
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm ${
                status.type === 'success'
                  ? 'bg-signal/10 text-signal-deep'
                  : 'bg-ember/10 text-ember'
              }`}
            >
              {status.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
              {status.message}
            </div>
          )}

          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
              Name
            </label>
            <input
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={onChange}
              className="w-full rounded-md border border-paper-line bg-paper px-4 py-3 text-ink outline-none ring-signal focus:ring-2"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={onChange}
              className="w-full rounded-md border border-paper-line bg-paper px-4 py-3 text-ink outline-none ring-signal focus:ring-2"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={onChange}
              className="w-full resize-none rounded-md border border-paper-line bg-paper px-4 py-3 text-ink outline-none ring-signal focus:ring-2"
              placeholder="Role, timing, or a quick hello…"
            />
          </div>

          <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-50">
            <Send size={16} />
            {loading ? 'Sending…' : 'Send message'}
          </button>
        </motion.form>

        <p className="mt-8 text-center text-sm text-ink-mute">
          Or write directly:{' '}
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1 font-medium text-signal-deep hover:underline">
            <Mail size={14} />
            {profile.email}
          </a>
        </p>
      </div>
    </section>
  )
}
