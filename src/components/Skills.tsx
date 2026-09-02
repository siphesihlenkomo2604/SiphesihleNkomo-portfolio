import { useState } from 'react';
import { Cpu, FolderCog, Users, Layers } from 'lucide-react';
import { useReveal } from '@/lib/hooks';
import { useApp } from '@/lib/theme';
import { skills } from '@/lib/data';

type Category = 'all' | 'technical' | 'administration' | 'leadership';

const categories: { id: Category; label: string; icon: typeof Cpu }[] = [
  { id: 'all', label: 'All', icon: Layers },
  { id: 'technical', label: 'Technical & Digital', icon: Cpu },
  { id: 'administration', label: 'Administration', icon: FolderCog },
  { id: 'leadership', label: 'Leadership & Facilitation', icon: Users },
];

export default function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const { view } = useApp();
  const [active, setActive] = useState<Category>('all');

  const filtered = skills.filter((s) => {
    const viewMatch = s.views.includes(view);
    const catMatch = active === 'all' || s.category === active;
    return viewMatch && catMatch;
  });

  return (
    <section id="skills" className="py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`mb-12 text-center ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-sm font-medium text-nude-400 dark:text-rose-400 tracking-widest uppercase mb-3">
            Skills
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-nude-600 dark:text-rose-300">
            Skills Matrix
          </h2>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = active === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`pill flex items-center gap-2 ${
                  isActive
                    ? 'bg-nude-300 text-white dark:bg-rose-300 dark:text-rose-100 shadow-glow-rose'
                    : 'border border-nude-400/20 text-nude-600/70 dark:text-rose-300/70 hover:border-nude-300/50 dark:hover:border-rose-300/50 hover:shadow-glow-rose/30 hover:-translate-y-0.5'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filtered.map((skill, i) => (
            <div
              key={skill.name}
              className="card-nude dark:card-rose p-4 flex items-center gap-3 group card-hover animate-fade-up"
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <div className="w-2 h-2 rounded-full bg-nude-300/40 dark:bg-rose-300/40 group-hover:bg-nude-300 dark:group-hover:bg-rose-300 group-hover:shadow-glow-rose transition-all duration-500" />
              <span className="text-sm font-medium text-nude-600/80 dark:text-rose-300/80 group-hover:text-nude-600 dark:group-hover:text-rose-300 transition-colors">
                {skill.name}
              </span>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-nude-600/50 dark:text-rose-300/50 text-sm mt-8">
            No skills in this category for the current perspective.
          </p>
        )}
      </div>
    </section>
  );
}
