import { useState } from 'react';
import { Linkedin, Github, ExternalLink, Mail, Send, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    senderContact: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate friendly message submission
    setFormSubmitted(true);
    setFormData({ name: '', senderContact: '', subject: '', message: '' });
    setTimeout(() => {
      setFormSubmitted(false);
    }, 6000);
  };

  return (
    <section id="contact" className="py-20 bg-[#fafaf9]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-semibold text-blue-600 tracking-wider uppercase">
            Get in Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
            Let's Connect
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            I'm currently learning, building, and exploring opportunities to grow in AI and software development. Feel free to connect with me.
          </p>
          <div className="w-12 h-1 bg-blue-600 rounded-full mt-3"></div>
        </div>

        {/* Content Layout */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Profile Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* LinkedIn Card */}
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-white border border-slate-200 rounded-2xl flex items-center justify-between hover:border-blue-400 hover:shadow-sm transition-all block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    LinkedIn Profile
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Connect for professional networking &amp; peer discussions
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors" />
            </a>

            {/* GitHub Card */}
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-white border border-slate-200 rounded-2xl flex items-center justify-between hover:border-slate-400 hover:shadow-sm transition-all block"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-900 group-hover:scale-105 transition-transform">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    GitHub Repositories
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Explore code repositories, commits &amp; project updates
                  </p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
            </a>

            {/* Student Note */}
            <div className="p-5 bg-blue-50/70 border border-blue-200/60 rounded-2xl">
              <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
                Open to Conversations
              </h4>
              <p className="text-xs text-blue-800/90 leading-relaxed">
                As a first-year student, I am always excited to discuss hackathon team-ups, study resources, project ideas, or hear guidance from seniors and mentors in AI and software engineering.
              </p>
            </div>

          </div>

          {/* Right Column: Direct Note / Inquiry Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Send a Direct Note
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              Have advice, project feedback, or want to collaborate on a hackathon? Drop a message below.
            </p>

            {formSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-emerald-900">
                  Thank You for Reaching Out!
                </h4>
                <p className="text-xs text-emerald-800">
                  Your note has been recorded. You can also connect directly on LinkedIn for immediate communication!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Priyanshu Sharma"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Your LinkedIn / Email *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.senderContact}
                      onChange={(e) => setFormData({ ...formData, senderContact: e.target.value })}
                      placeholder="linkedin.com/in/yourname"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Hackathon Collaboration / Mentorship / Project Feedback"
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message here..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none"
                  ></textarea>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <span className="text-[11px] text-slate-400">
                    Response typically within 24-48 hours
                  </span>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
