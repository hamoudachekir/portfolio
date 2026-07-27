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
    <section id="contact" className="section-pad border-t border-code-line bg-[#0D1219]">
      <div className="container-page max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="eyebrow">contact.open()</p>
          <h2 className="display mt-3 text-3xl sm:text-4xl md:text-5xl">Let’s talk</h2>
          <p className="mt-4 text-code-mute">
            Open to junior / AI engineering roles in Tunis or remote.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={onSubmit}
          name="contact"
          data-netlify="true"
          className="terminal mt-12 space-y-5 p-6 md:p-8"
        >
          <input type="hidden" name="form-name" value="contact" />

          {status.message && (
            <div
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm ${
                status.type === 'success' ? 'bg-mint/10 text-mint' : 'bg-ember/10 text-ember'
              }`}
            >
              {status.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
              {status.message}
            </div>
          )}

          {['name', 'email'].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="mb-1.5 block font-mono text-xs text-code-mute">
                {field}
              </label>
              <input
                id={field}
                name={field}
                type={field === 'email' ? 'email' : 'text'}
                required
                value={formData[field]}
                onChange={onChange}
                className="w-full rounded-md border border-white/10 bg-code-bg px-4 py-3 font-mono text-sm text-code-fg outline-none ring-sky focus:ring-2"
                placeholder={field === 'email' ? 'you@company.com' : 'Your name'}
              />
            </div>
          ))}

          <div>
            <label htmlFor="message" className="mb-1.5 block font-mono text-xs text-code-mute">
              message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={onChange}
              className="w-full resize-none rounded-md border border-white/10 bg-code-bg px-4 py-3 font-mono text-sm text-code-fg outline-none ring-sky focus:ring-2"
              placeholder="Role, timing, or a quick hello…"
            />
          </div>

          <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-50">
            <Send size={16} />
            {loading ? 'Sending…' : 'Send message'}
          </button>
        </motion.form>

        <p className="mt-8 text-center font-mono text-sm text-code-dim">
          Or write:{' '}
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1 text-sky hover:underline"
          >
            <Mail size={14} />
            {profile.email}
          </a>
        </p>
      </div>
    </section>
  )
}
