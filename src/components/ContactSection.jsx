import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, MessageSquare, Linkedin, Twitter, Loader2, AlertCircle } from 'lucide-react';

const ContactSection = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('karangehlot5686@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  // Security Helper: Sanitize inputs against HTML/Script injection
  const sanitizeInput = (str) => {
    return str.replace(/<[^>]*>?/gm, '').trim();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Anti-Spam Honeypot Check: If hidden field is filled, silently reject bot
    if (formData.honeypot) {
      setSubmitted(true);
      return;
    }

    // Rate Limiting Check (Prevent rapid-fire submissions within 10s)
    const now = Date.now();
    if (now - lastSubmitTime < 10000) {
      setErrorMessage('Please wait a few seconds before sending another message.');
      return;
    }

    const cleanName = sanitizeInput(formData.name).slice(0, 100);
    const cleanEmail = sanitizeInput(formData.email).slice(0, 100);
    const cleanMessage = sanitizeInput(formData.message).slice(0, 3000);

    if (!cleanName || !cleanEmail || !cleanMessage) {
      setErrorMessage('All fields are required.');
      return;
    }

    // Strict Email Format Regex Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: 'ea858cf5-ab7b-4ac7-aafc-bb4fb7a6ef59',
          name: cleanName,
          email: cleanEmail,
          message: cleanMessage,
          subject: `Portfolio Message from ${cleanName}`,
          from_name: `${cleanName} (Portfolio)`
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setLastSubmitTime(Date.now());
        setFormData({ name: '', email: '', message: '', honeypot: '' });
        setTimeout(() => {
          setSubmitted(false);
        }, 6000);
      } else {
        setErrorMessage(result.message || 'Failed to send message. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-8">
      <div className="glass-card rounded-3xl p-6 sm:p-10 space-y-8">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-400 mb-2">
            <MessageSquare className="w-4 h-4" />
            <span>Let's Connect</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Contact & Hire Me
          </h2>
          <div className="w-16 h-1 bg-gold-500 rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Direct Communication Channels */}
          <div className="space-y-6">
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              I am currently open to fullstack development opportunities, freelance projects, and tech collaborations. Feel free to reach out via email, phone, LinkedIn, or X (Twitter)!
            </p>

            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-dark-900/80 border border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-dark-800 border border-gray-700 text-gold-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 truncate">
                    <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">Email Address</span>
                    <a href="mailto:karangehlot5686@gmail.com" className="text-xs sm:text-sm font-semibold text-white hover:text-gold-400 truncate block">
                      karangehlot5686@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="w-full sm:w-auto px-3 py-2 rounded-xl bg-dark-800 border border-gray-700 hover:border-gold-500 text-gray-300 hover:text-gold-400 text-xs font-semibold flex items-center justify-center gap-1.5 shrink-0 transition-all"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-dark-900/80 border border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-dark-800 border border-gray-700 text-gold-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">Phone / WhatsApp</span>
                    <a href="tel:8949012308" className="text-xs sm:text-sm font-semibold text-white hover:text-gold-400">
                      +91 8949012308
                    </a>
                  </div>
                </div>
                <a
                  href="tel:8949012308"
                  className="w-full sm:w-auto px-3 py-2 rounded-xl bg-dark-800 border border-gray-700 hover:border-gold-500 text-gold-400 text-xs font-semibold shrink-0 text-center"
                >
                  Call Now
                </a>
              </div>

              {/* LinkedIn Profile Card */}
              <div className="p-4 rounded-2xl bg-dark-900/80 border border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-dark-800 border border-gray-700 text-gold-400 flex items-center justify-center shrink-0">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 truncate">
                    <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">LinkedIn Profile</span>
                    <a href="https://www.linkedin.com/in/karan-gehlot-0025922b2/" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-semibold text-white hover:text-gold-400 truncate block">
                      karan-gehlot-0025922b2
                    </a>
                  </div>
                </div>
                <a
                  href="https://www.linkedin.com/in/karan-gehlot-0025922b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-3 py-2 rounded-xl bg-dark-800 border border-gray-700 hover:border-gold-500 text-gold-400 text-xs font-semibold shrink-0 transition-all flex items-center justify-center gap-1"
                >
                  <span>Connect</span>
                </a>
              </div>

              {/* X / Twitter Profile Card */}
              <div className="p-4 rounded-2xl bg-dark-900/80 border border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-10 h-10 rounded-xl bg-dark-800 border border-gray-700 text-gold-400 flex items-center justify-center shrink-0">
                    <Twitter className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 truncate">
                    <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">X (Twitter) Profile</span>
                    <a href="https://x.com/karanGehlo24891" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-semibold text-white hover:text-gold-400 truncate block">
                      @karanGehlo24891
                    </a>
                  </div>
                </div>
                <a
                  href="https://x.com/karanGehlo24891"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-3 py-2 rounded-xl bg-dark-800 border border-gray-700 hover:border-gold-500 text-gold-400 text-xs font-semibold shrink-0 transition-all flex items-center justify-center gap-1"
                >
                  <span>Follow</span>
                </a>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-dark-900/80 border border-gray-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-dark-800 border border-gray-700 text-gold-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">Location</span>
                  <span className="text-sm font-semibold text-white">Vadodara, Vaghodia (Gujarat), India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="p-6 rounded-2xl bg-dark-900/60 border border-gray-800">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Message Delivered Directly!</h3>
                <p className="text-xs text-gray-400">Thank you for reaching out. Your message has been sent directly to <b>karangehlot5686@gmail.com</b> and Karan will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Anti-Spam Honeypot Field (Hidden from humans) */}
                <input
                  type="text"
                  name="website_url_hp"
                  tabIndex="-1"
                  autoComplete="off"
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  style={{ display: 'none', opacity: 0, position: 'absolute', left: '-9999px' }}
                />

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-gray-700 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-gray-700 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-gold-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-400 mb-1">Message</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Type your message or project opportunity details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-gray-700 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-gold-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xl bg-gold-500 hover:bg-gold-400 disabled:opacity-50 text-dark-900 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-gold-500/20 transition-all cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 text-dark-900 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
