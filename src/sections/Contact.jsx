import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { personalInfo } from '../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import confetti from 'canvas-confetti';

export default function Contact({ onOpenResume }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a subject';
    if (!formData.message.trim()) errs.message = 'Please write a message';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Launch celebratory confetti
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#2F7FD8', '#FFD23F', '#FF6B4A', '#4F9E4A']
      });
    } catch (err) {
      // ignore
    }

    // Prepare mailto link for direct sending
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    // Open mail client after slight pause
    setTimeout(() => {
      window.location.href = mailtoUrl;
    }, 1200);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FFF8EC] relative overflow-hidden">
      {/* Sky sunset painted background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8EC] via-[#FFF8EC] to-[#9FD3FF]/30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Get In Touch"
          title="Have an idea? Let's connect."
          subtitle="I'm always interested in learning, sharing ideas, and connecting with people in technology."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-10 max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact Info & Verified Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-lg space-y-6">
              <h3 className="font-heading font-extrabold text-2xl text-[#13233A]">
                Direct Contacts
              </h3>
              <p className="text-sm text-[#13233A]/75 leading-relaxed">
                Feel free to email me directly or give me a call. I respond promptly to internship opportunities, academic discussions, and development projects.
              </p>

              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-[#FFF8EC] border border-black/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2F7FD8] text-white flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#13233A]/50 block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-bold text-[#13233A] hover:text-[#2F7FD8] transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.email)}
                  className="p-2 text-[#13233A]/60 hover:text-[#2F7FD8] hover:bg-white rounded-lg transition-colors cursor-pointer"
                  title="Copy email address"
                >
                  {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-[#4F9E4A]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl bg-[#FFF8EC] border border-black/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#4F9E4A] text-white flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#13233A]/50 block">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                      className="text-xs sm:text-sm font-bold text-[#13233A] hover:text-[#4F9E4A] transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <a
                  href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold bg-white text-[#13233A] hover:bg-[#4F9E4A] hover:text-white transition-colors border border-black/5"
                >
                  Call
                </a>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-[#FFF8EC] border border-black/5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF6B4A] text-white flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#13233A]/50 block">
                    Location
                  </span>
                  <span className="text-xs sm:text-sm font-bold text-[#13233A]">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="pt-2 flex flex-wrap gap-2.5">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#13233A] hover:bg-black transition-colors"
                >
                  <GithubIcon className="w-4 h-4" /> GitHub
                </a>

                <button
                  onClick={onOpenResume}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-[#13233A] bg-[#FFD23F] hover:bg-[#ffca28] transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4" /> Resume PDF
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form with Validation */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-black/10 shadow-lg relative">
              <h3 className="font-heading font-extrabold text-2xl text-[#13233A] mb-1">
                Send a Message
              </h3>
              <p className="text-xs text-[#13233A]/60 mb-6">
                Fill out the fields below. Submitting will validate your input and immediately route the message to my personal email client.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#FFF8EC] border-2 border-[#4F9E4A] text-center space-y-4 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#4F9E4A] text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-heading font-bold text-2xl text-[#13233A]">
                    Message Prepared!
                  </h4>
                  <p className="text-sm text-[#13233A]/80 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#13233A]">{formData.name}</strong>! Your message has been prepared and your default email app is opening to complete delivery.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2 rounded-xl text-xs font-bold bg-[#13233A] text-white hover:bg-[#2F7FD8] transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#13233A]/70 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FFF8EC]/60 border text-sm text-[#13233A] placeholder-[#13233A]/40 focus:outline-hidden focus:ring-2 focus:ring-[#2F7FD8] transition-all ${
                          errors.name ? 'border-red-500 bg-red-50/50' : 'border-black/10'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[11px] font-semibold text-red-500 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#13233A]/70 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@example.com"
                        className={`w-full px-4 py-3 rounded-xl bg-[#FFF8EC]/60 border text-sm text-[#13233A] placeholder-[#13233A]/40 focus:outline-hidden focus:ring-2 focus:ring-[#2F7FD8] transition-all ${
                          errors.email ? 'border-red-500 bg-red-50/50' : 'border-black/10'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] font-semibold text-red-500 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#13233A]/70 mb-1.5">
                      Subject *
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Opportunity / Collaboration / Project"
                      className={`w-full px-4 py-3 rounded-xl bg-[#FFF8EC]/60 border text-sm text-[#13233A] placeholder-[#13233A]/40 focus:outline-hidden focus:ring-2 focus:ring-[#2F7FD8] transition-all ${
                        errors.subject ? 'border-red-500 bg-red-50/50' : 'border-black/10'
                      }`}
                    />
                    {errors.subject && (
                      <span className="text-[11px] font-semibold text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#13233A]/70 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Mahindhra, I came across your portfolio and wanted to reach out regarding..."
                      className={`w-full px-4 py-3 rounded-xl bg-[#FFF8EC]/60 border text-sm text-[#13233A] placeholder-[#13233A]/40 focus:outline-hidden focus:ring-2 focus:ring-[#2F7FD8] transition-all resize-none ${
                        errors.message ? 'border-red-500 bg-red-50/50' : 'border-black/10'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] font-semibold text-red-500 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl font-bold text-sm text-white bg-[#FF6B4A] hover:bg-[#ff5733] shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Direct Email</span>
                    </button>
                    <span className="text-[11px] text-[#13233A]/50 text-center block mt-2">
                      🔒 No spam. Secure direct mail client routing.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
