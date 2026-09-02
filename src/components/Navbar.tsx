import { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X, Building2, Sparkles } from 'lucide-react';
import { useApp } from '@/lib/theme';
import type { ViewMode } from '@/lib/data';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme, view, setView } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const viewOptions: { value: ViewMode; label: string; icon: typeof Building2 }[] = [
    { value: 'corporate', label: 'Corporate & Admin', icon: Building2 },
    { value: 'entrepreneur', label: 'Entrepreneurial & Creative', icon: Sparkles },
  ];

  return (
    <>
      {/* View Perspective Switcher — floating top bar */}
      <div className="fixed top-3 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-2xl">
        <div className="flex items-center justify-center gap-1 rounded-full border border-nude-400/20 bg-nude-50/90 dark:bg-rose-100/90 backdrop-blur-md p-1 shadow-soft">
          {viewOptions.map((opt) => {
            const Icon = opt.icon;
            const active = view === opt.value;
            return (
              <button
                key={opt.value}
                onClick={() => setView(opt.value)}
                className={`flex items-center gap-2 px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-500 flex-1 justify-center ${
                  active
                    ? 'bg-nude-300 text-white dark:bg-rose-300 dark:text-rose-100 shadow-glow-rose'
                    : 'text-nude-600/70 dark:text-rose-300/70 hover:text-nude-400 dark:hover:text-rose-400 hover:bg-nude-300/5 dark:hover:bg-rose-300/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{opt.label}</span>
                <span className="sm:hidden">{opt.value === 'corporate' ? 'Corp' : 'Creative'}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`fixed top-16 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-nude-100/85 dark:bg-rose-100/85 backdrop-blur-lg border-b border-nude-400/10 dark:border-rose-400/10'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#hero"
            className="font-serif text-xl sm:text-2xl font-semibold text-nude-600 dark:text-rose-300 tracking-wide hover:text-nude-400 dark:hover:text-rose-400 transition-colors duration-500"
          >
            Siphesihle Nkomo
          </a>

          <div className="hidden lg:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-nude-600/70 dark:text-rose-300/70 hover:text-nude-400 dark:hover:text-rose-400 transition-colors duration-300 relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-nude-300 dark:bg-rose-300 transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="p-2.5 rounded-full border border-nude-400/20 text-nude-600 dark:text-rose-300 hover:bg-nude-300/10 dark:hover:bg-rose-300/10 hover:shadow-glow-rose hover:scale-110 transition-all duration-500"
            >
              {theme === 'nude' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden p-2.5 rounded-full border border-nude-400/20 text-nude-600 dark:text-rose-300 hover:bg-nude-300/10 dark:hover:bg-rose-300/10 transition-all duration-300"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-nude-100/95 dark:bg-rose-100/95 backdrop-blur-lg border-b border-nude-400/10 dark:border-rose-400/10 animate-fade-in">
            <div className="px-6 py-4 flex flex-col gap-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-nude-600/80 dark:text-rose-300/80 hover:text-nude-400 dark:hover:text-rose-400 py-2 transition-colors duration-300"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
