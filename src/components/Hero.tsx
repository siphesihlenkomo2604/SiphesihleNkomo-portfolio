import { ArrowDown, Download, Sparkles, MapPin } from 'lucide-react';
import { useApp } from '@/lib/theme';

export default function Hero() {
  const { view } = useApp();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-nude-200/40 dark:bg-rose-300/5 blur-3xl animate-shimmer" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-nude-300/20 dark:bg-rose-400/5 blur-3xl animate-shimmer" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-nude-200/15 dark:bg-rose-300/3 blur-3xl animate-shimmer" style={{ animationDelay: '0.8s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-nude-400/30 bg-nude-50/80 dark:bg-rose-200/40 backdrop-blur-md mb-8 animate-fade-in shadow-soft">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-nude-300 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-nude-300" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-nude-600 dark:text-rose-300 tracking-wide">
                Available for Opportunities
              </span>
              <span className="w-px h-3 bg-nude-400/30" />
              <MapPin className="w-3.5 h-3.5 text-nude-400" />
              <span className="text-xs sm:text-sm text-nude-600/70 dark:text-rose-300/70">
                Soweto, Gauteng
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-bold text-nude-600 dark:text-rose-300 mb-4 animate-fade-up leading-tight">
              Siphesihle Nkomo
            </h1>

            <p className="text-base sm:text-lg text-nude-400 dark:text-rose-400 font-medium mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              Applied Social Sciences Graduate &nbsp;|&nbsp; Administration &amp; Community Facilitator
            </p>

            <p className="text-sm sm:text-base text-nude-600/70 dark:text-rose-300/70 max-w-2xl mx-auto lg:mx-0 leading-relaxed mb-10 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Driven and versatile professional with a proven track record in community leadership,
              workshop facilitation, client pipeline management, and digital administration. Skilled in
              leveraging structured enterprise tools and data-driven insights to achieve operational excellence.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <a href="#projects" className="btn-rose">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Explore Interactive Work
                </span>
              </a>
              <a href="#contact" className="btn-outline">
                <span className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download CV
                </span>
              </a>
            </div>

            <div className="mt-12 flex items-center lg:justify-start justify-center gap-2 text-xs text-nude-600/40 dark:text-rose-300/40 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <span className="capitalize font-medium">{view === 'corporate' ? 'Corporate & Admin' : 'Entrepreneurial & Creative'}</span>
              <span>perspective active</span>
            </div>
          </div>

          <div className="relative max-w-sm w-full mx-auto lg:mr-0 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -inset-3 rounded-[2rem] border border-nude-300/40 dark:border-rose-300/40 rotate-3 transition-transform duration-700 hover:rotate-6" />
            <div className="absolute -inset-3 rounded-[2rem] border border-nude-400/20 dark:border-rose-400/20 -rotate-3 transition-transform duration-700 hover:-rotate-6" />
            <div className="relative rounded-[1.75rem] overflow-hidden border-[6px] border-nude-50 dark:border-rose-200 bg-nude-200 dark:bg-rose-200 shadow-soft-lg group">
              <img
                src="/images/IMG-20250731-WA0064(1).jpg"
                alt="Siphesihle Nkomo in her graduation attire"
                className="w-full aspect-[4/5] object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-nude-600/80 via-nude-600/25 to-transparent">
                <p className="font-serif text-lg text-white">Purpose in progress.</p>
                <p className="text-xs text-white/75 mt-1 tracking-wide">Applied Social Sciences Graduate</p>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-5 w-16 h-16 rounded-full bg-nude-300/20 dark:bg-rose-300/20 blur-xl animate-shimmer" />
          </div>
        </div>

        <div className="mt-16 flex justify-center animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <a href="#about" className="text-nude-400/50 dark:text-rose-400/50 hover:text-nude-300 dark:hover:text-rose-300 transition-colors duration-300">
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
