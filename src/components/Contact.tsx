import { useState, type FormEvent } from 'react';
import { Mail, MapPin, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';
import { useReveal } from '@/lib/hooks';

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = 'Please enter your name.';
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = 'Please enter a valid email.';
    }
    if (!form.subject.trim()) next.subject = 'Please add a subject.';
    if (!form.message.trim() || form.message.trim().length < 10) {
      next.message = 'Please share a little more (at least 10 characters).';
    }
    return next;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) return;
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    window.setTimeout(() => setSent(false), 5000);
  };

  const inputClass = (field: string) =>
    `w-full px-4 py-3 rounded-xl bg-nude-100/40 dark:bg-rose-200/20 border transition-all duration-300 ${
      errors[field]
        ? 'border-red-400/60'
        : 'border-nude-400/15 dark:border-rose-400/15 focus:border-nude-300 dark:focus:border-rose-300 focus:shadow-glow-rose'
    } text-sm text-nude-600 dark:text-rose-300 placeholder:text-nude-600/35 dark:placeholder:text-rose-300/35 outline-none`;

  return (
    <section id="contact" className="py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`mb-12 ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-sm font-medium text-nude-400 dark:text-rose-400 tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-nude-600 dark:text-rose-300">
            Let&apos;s Create Impact
          </h2>
          <p className="text-sm text-nude-600/60 dark:text-rose-300/60 mt-4 max-w-lg leading-relaxed">
            Whether you&apos;re building a community initiative, strengthening operations, or growing a brand, I&apos;d love to hear what you&apos;re working on.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact details */}
          <div className="lg:col-span-2 space-y-4">
            <a href="mailto:siphesihlenkomo@gmail.com" className="card-nude dark:card-rose p-5 flex items-center gap-4 group card-hover">
              <div className="w-10 h-10 rounded-xl bg-nude-200/50 dark:bg-rose-200 flex items-center justify-center group-hover:bg-nude-300 dark:group-hover:bg-rose-300 group-hover:shadow-glow-rose transition-all duration-500">
                <Mail className="w-4 h-4 text-nude-400 dark:text-rose-400 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div>
                <p className="text-xs text-nude-600/45 dark:text-rose-300/45 mb-1">Email</p>
                <p className="text-sm font-medium text-nude-600 dark:text-rose-300 break-all">siphesihlenkomo@gmail.com</p>
              </div>
            </a>
            <div className="card-nude dark:card-rose p-5 flex items-center gap-4 card-hover">
              <div className="w-10 h-10 rounded-xl bg-nude-200/50 dark:bg-rose-200 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-nude-400 dark:text-rose-400" />
              </div>
              <div>
                <p className="text-xs text-nude-600/45 dark:text-rose-300/45 mb-1">Location</p>
                <p className="text-sm font-medium text-nude-600 dark:text-rose-300">Mofolo North, Soweto, Gauteng</p>
              </div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://linkedin.com/in/siphesihle-nkomo-1b19401b5" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-3 rounded-full border border-nude-400/20 text-nude-600 dark:text-rose-300 hover:border-nude-300 hover:text-nude-300 dark:hover:border-rose-300 dark:hover:text-rose-300 hover:shadow-glow-rose hover:scale-110 transition-all duration-500">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-3 rounded-full border border-nude-400/20 text-nude-600 dark:text-rose-300 hover:border-nude-300 hover:text-nude-300 dark:hover:border-rose-300 dark:hover:text-rose-300 hover:shadow-glow-rose hover:scale-110 transition-all duration-500">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="lg:col-span-3 card-nude dark:card-rose p-6 sm:p-8 shadow-soft">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-nude-600/70 dark:text-rose-300/70 mb-2">Name</label>
                <input type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass('name')} placeholder="Your name" />
                {errors.name && <p className="text-[11px] text-red-500 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-xs font-medium text-nude-600/70 dark:text-rose-300/70 mb-2">Email</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass('email')} placeholder="you@example.com" />
                {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-xs font-medium text-nude-600/70 dark:text-rose-300/70 mb-2">Subject</label>
              <input type="text" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputClass('subject')} placeholder="How can I help?" />
              {errors.subject && <p className="text-[11px] text-red-500 mt-1">{errors.subject}</p>}
            </div>
            <div className="mt-4">
              <label className="block text-xs font-medium text-nude-600/70 dark:text-rose-300/70 mb-2">Message</label>
              <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass('message')} resize-none`} placeholder="Tell me about your opportunity..." />
              {errors.message && <p className="text-[11px] text-red-500 mt-1">{errors.message}</p>}
            </div>
            <button type="submit" className="btn-rose mt-5">
              <span className="flex items-center justify-center gap-2"><Send className="w-4 h-4" /> Send Message</span>
            </button>
          </form>
        </div>
      </div>

      {/* Toast */}
      {sent && (
        <div className="fixed top-24 right-5 z-50 max-w-sm card-nude dark:card-rose p-4 shadow-glow-rose-lg animate-toast-in flex items-start gap-3 border-nude-300/40">
          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-nude-600 dark:text-rose-300">Message ready to send</p>
            <p className="text-xs text-nude-600/60 dark:text-rose-300/60 mt-1">Thank you — Siphesihle will be in touch soon.</p>
          </div>
        </div>
      )}
    </section>
  );
}
