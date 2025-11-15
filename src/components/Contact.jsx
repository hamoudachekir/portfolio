import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: '', message: '' });

    // Show loading toast
    const loadingToast = toast.loading('Sending your message...', {
      position: 'top-right',
    });

    // Get form values
    const name = formData.name;
    const email = formData.email;
    const message = formData.message;

    try {
      // Check if running locally
      const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      
      if (isLocal) {
        // Local development - simulate success
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        toast.success(`✅ Dev Mode: Form validated!\nName: ${name}\nEmail: ${email}\nMessage: ${message.substring(0, 50)}...`, {
          duration: 6000,
          position: 'top-right',
          style: {
            background: '#F59E0B',
            color: 'white',
            borderRadius: '12px',
            padding: '16px',
            maxWidth: '400px',
          },
        });
        
        setFormData({ name: '', email: '', message: '' });
        setStatus({ 
          type: 'success', 
          message: 'Development mode - validated!' 
        });
      } else {
        // Production - Submit to Netlify Forms
        const formElement = e.target;
        const formData = new FormData(formElement);
        
        const response = await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString()
        });

        console.log('Form response status:', response.status);
        console.log('Form response ok:', response.ok);

        // Netlify returns 200 on success, but may redirect
        if (response.ok || response.status === 200 || response.status === 303) {
          // Success!
          toast.success(`Thanks ${name}! Your message has been sent successfully. I'll get back to you soon! 🚀`, {
            duration: 6000,
            position: 'top-right',
            style: {
              background: '#10B981',
              color: 'white',
              borderRadius: '12px',
              padding: '16px',
              maxWidth: '400px',
            },
          });

          // Reset form
          setFormData({ name: '', email: '', message: '' });
          setStatus({ 
            type: 'success', 
            message: 'Message sent successfully!' 
          });
        } else {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      
      // Mailto fallback for production
      const mailtoLink = `mailto:hamoudachkir@yahoo.fr?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(email)}`;
      
      toast.error(
        <div>
          <p className="font-semibold mb-2">Opening email client...</p>
          <p className="text-sm">Your email app will open in a moment.</p>
        </div>,
        {
          duration: 5000,
          position: 'top-right',
          style: {
            background: '#F59E0B',
            color: 'white',
            borderRadius: '12px',
            padding: '16px',
            maxWidth: '400px',
          },
        }
      );
      
      // Open mailto
      setTimeout(() => {
        window.location.href = mailtoLink;
      }, 1500);
      
      setStatus({ 
        type: 'info', 
        message: 'Opening your email client...' 
      });
    } finally {
      toast.dismiss(loadingToast);
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-32 bg-[#0a0a1f] overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Contact Me.
            </span>
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <form 
            name="contact" 
            method="POST" 
            data-netlify="true" 
            data-netlify-honeypot="bot-field"
            action="/success"
            onSubmit={handleSubmit} 
            className="p-8 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 rounded-2xl space-y-6"
          >
            <input type="hidden" name="form-name" value="contact" />
            
            {/* Honeypot field for spam protection */}
            <div style={{ display: 'none' }}>
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </div>
            
            {/* Status message */}
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-4 rounded-lg flex items-center gap-3 ${
                  status.type === 'success' 
                    ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                    : 'bg-red-500/10 border border-red-500/20 text-red-400'
                }`}
              >
                {status.type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
                <span className="text-sm">{status.message}</span>
              </motion.div>
            )}
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none text-white placeholder-gray-500"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none text-white placeholder-gray-500"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none resize-none text-white placeholder-gray-500"
                placeholder="Your message..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-white hover:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-2 transition-opacity ${
                isLoading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              <Send size={20} />
              {isLoading ? 'Sending Message...' : 'Send Message'}
            </motion.button>
            
            {/* Debug info for development */}
            {(window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') && (
              <div className="text-xs text-gray-500 mt-2 p-2 bg-yellow-500/10 border border-yellow-500/20 rounded">
                📧 Development Mode: Form submissions will be simulated. Contact form will work properly when deployed to Netlify.
              </div>
            )}
          </form>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-4">Or reach me at:</p>
            <a href="mailto:hamoudachkir@yahoo.fr" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300">
              <Mail size={20} />
              <span className="font-medium">hamoudachkir@yahoo.fr</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
