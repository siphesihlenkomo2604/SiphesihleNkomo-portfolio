import { useState } from 'react';
import { BarChart3, Users, Network, ArrowUpRight } from 'lucide-react';
import { useReveal } from '@/lib/hooks';
import { useApp } from '@/lib/theme';
import { projects } from '@/lib/data';
import type { Project } from '@/lib/data';
import ProjectDrawer from './ProjectDrawer';

const iconMap = { BarChart3, Users, Network };

export default function Projects() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const { view } = useApp();
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = projects.filter((p) => p.views.includes(view));

  return (
    <section id="projects" className="py-24 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <div className={`mb-14 ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-nude-400 dark:text-rose-400 tracking-widest uppercase mb-3">
                Selected Work
              </p>
              <h2 className="font-serif text-4xl sm:text-5xl font-bold text-nude-600 dark:text-rose-300">
                Built with Intention
              </h2>
            </div>
            <p className="text-sm text-nude-600/60 dark:text-rose-300/60 max-w-xs leading-relaxed sm:text-right">
              Explore the thinking, systems, and outcomes behind each project.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => {
            const Icon = iconMap[project.icon as keyof typeof iconMap];
            return (
              <article
                key={project.id}
                className="group card-nude dark:card-rose p-7 flex flex-col card-hover animate-fade-up cursor-pointer"
                style={{ animationDelay: `${i * 0.1}s` }}
                onClick={() => setSelected(project)}
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-nude-200/50 dark:bg-rose-200 flex items-center justify-center text-nude-400 dark:text-rose-400 group-hover:bg-nude-300 dark:group-hover:bg-rose-300 group-hover:shadow-glow-rose transition-all duration-500 group-hover:scale-110">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs text-nude-600/30 dark:text-rose-300/30 font-medium tracking-widest">
                    0{i + 1}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-semibold text-nude-600 dark:text-rose-300 leading-tight mb-3 group-hover:text-nude-400 dark:group-hover:text-rose-400 transition-colors duration-500">
                  {project.title}
                </h3>
                <p className="text-sm text-nude-600/60 dark:text-rose-300/60 leading-relaxed flex-1">
                  {project.tagline}
                </p>
                <button
                  onClick={(e) => { e.stopPropagation(); setSelected(project); }}
                  className="mt-8 self-start inline-flex items-center gap-2 text-sm font-semibold text-nude-400 dark:text-rose-400 group-hover:gap-3.5 group-hover:text-nude-300 dark:group-hover:text-rose-300 transition-all duration-500"
                >
                  View Case Study
                  <ArrowUpRight className="w-4 h-4 group-hover:scale-125 transition-transform duration-500" />
                </button>
              </article>
            );
          })}
        </div>
      </div>
      <ProjectDrawer project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
