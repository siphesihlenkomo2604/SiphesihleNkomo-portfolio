import { useState } from 'react';
import { ChevronDown, Briefcase, Calendar } from 'lucide-react';
import { useReveal } from '@/lib/hooks';
import { useApp } from '@/lib/theme';
import { experiences } from '@/lib/data';

export default function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const { view } = useApp();
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = experiences.filter((e) => e.views.includes(view));

  return (
    <section id="experience" className="py-24 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <div className={`mb-14 text-center ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-sm font-medium text-nude-400 dark:text-rose-400 tracking-widest uppercase mb-3">
            Experience
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-nude-600 dark:text-rose-300">
            Career Timeline
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-nude-300/40 via-nude-400/20 to-transparent dark:from-rose-300/40 dark:via-rose-400/20" />

          <div className="space-y-5">
            {filtered.map((exp, i) => {
              const isOpen = openId === exp.id;
              return (
                <div
                  key={exp.id}
                  className={`relative pl-12 sm:pl-16 animate-fade-up`}
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-1.5 sm:left-3.5 top-6 w-4 h-4 rounded-full border-2 z-10 transition-all duration-500 ${
                      isOpen
                        ? 'border-nude-300 bg-nude-300 dark:border-rose-300 dark:bg-rose-300 shadow-glow-rose scale-125'
                        : 'border-nude-400 dark:border-rose-400 bg-nude-100 dark:bg-rose-100'
                    }`}
                  />

                  <div
                    className={`card-nude dark:card-rose overflow-hidden transition-all duration-500 ease-out ${
                      isOpen
                        ? 'shadow-glow-rose ring-1 ring-nude-300/30 dark:ring-rose-300/30'
                        : 'shadow-soft hover:shadow-card-hover hover:border-nude-300/30 dark:hover:border-rose-300/30 hover:-translate-y-0.5'
                    }`}
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : exp.id)}
                      className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <Briefcase className="w-4 h-4 text-nude-400 dark:text-rose-400 flex-shrink-0" />
                          <h3 className="font-serif text-lg sm:text-xl font-semibold text-nude-600 dark:text-rose-300">
                            {exp.role}
                          </h3>
                        </div>
                        <p className="text-sm text-nude-400 dark:text-rose-400 font-medium ml-6">
                          {exp.org}
                        </p>
                        <div className="flex items-center gap-2 mt-2 ml-6">
                          <Calendar className="w-3.5 h-3.5 text-nude-600/40 dark:text-rose-300/40" />
                          <span className="text-xs text-nude-600/50 dark:text-rose-300/50">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      <div className={`p-1.5 rounded-full transition-all duration-500 ${isOpen ? 'bg-nude-300/20 dark:bg-rose-300/20' : ''}`}>
                        <ChevronDown
                          className={`w-5 h-5 text-nude-400 dark:text-rose-400 flex-shrink-0 mt-1 transition-transform duration-500 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </div>
                    </button>

                    {/* Accordion content */}
                    <div
                      className={`grid transition-all duration-500 ease-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-5 sm:px-6 pb-6 pt-0 ml-6 border-t border-nude-400/15 dark:border-rose-400/15">
                          <p className="text-sm text-nude-600/70 dark:text-rose-300/70 mt-4 mb-4 leading-relaxed">
                            {exp.summary}
                          </p>
                          <ul className="space-y-2.5">
                            {exp.achievements.map((a, j) => (
                              <li
                                key={j}
                                className="flex items-start gap-2.5 text-sm text-nude-600/80 dark:text-rose-300/80"
                              >
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-nude-300 dark:bg-rose-300 flex-shrink-0" />
                                <span className="leading-relaxed">{a}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
