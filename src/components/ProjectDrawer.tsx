import { useEffect } from 'react';
import { X, CheckCircle2, Wrench, Target } from 'lucide-react';
import { useScrollLock } from '@/lib/hooks';
import type { Project } from '@/lib/data';
import BICalculator from './BICalculator';

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectDrawer({ project, onClose }: Props) {
  useScrollLock(Boolean(project));

  useEffect(() => {
    if (!project) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  return (
    <>
      {project && (
        <div className="fixed inset-0 z-[60] flex justify-end">
          <button
            aria-label="Close project details"
            onClick={onClose}
            className="absolute inset-0 bg-nude-600/30 dark:bg-black/60 backdrop-blur-sm animate-fade-in cursor-default"
          />
          <aside className="relative w-full max-w-xl h-full overflow-y-auto bg-nude-50 dark:bg-rose-100 border-l border-nude-300/20 dark:border-rose-300/20 shadow-soft-lg animate-slide-in-right">
            <div className="sticky top-0 z-10 flex items-center justify-between p-5 bg-nude-50/90 dark:bg-rose-100/90 backdrop-blur-md border-b border-nude-400/15 dark:border-rose-400/15">
              <span className="text-xs uppercase tracking-widest text-nude-400 dark:text-rose-400 font-medium">
                Case Study
              </span>
              <button
                onClick={onClose}
                aria-label="Close"
                className="p-2 rounded-full border border-nude-400/20 text-nude-600 dark:text-rose-300 hover:bg-nude-300/10 dark:hover:bg-rose-300/10 hover:shadow-glow-rose hover:scale-110 transition-all duration-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-nude-600 dark:text-rose-300 leading-tight mb-4">
                {project.title}
              </h2>
              <p className="text-base text-nude-600/70 dark:text-rose-300/70 leading-relaxed mb-8">
                {project.tagline}
              </p>

              <div className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-4 h-4 text-nude-400 dark:text-rose-400" />
                    <h3 className="font-serif text-lg font-semibold text-nude-600 dark:text-rose-300">
                      The Problem
                    </h3>
                  </div>
                  <p className="text-sm text-nude-600/70 dark:text-rose-300/70 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Wrench className="w-4 h-4 text-nude-400 dark:text-rose-400" />
                    <h3 className="font-serif text-lg font-semibold text-nude-600 dark:text-rose-300">
                      Tools Used
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 rounded-full bg-nude-200/50 dark:bg-rose-200 text-xs font-medium text-nude-600 dark:text-rose-300 border border-nude-300/15 dark:border-rose-300/15 hover:shadow-glow-rose hover:border-nude-300/30 transition-all duration-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle2 className="w-4 h-4 text-nude-400 dark:text-rose-400" />
                    <h3 className="font-serif text-lg font-semibold text-nude-600 dark:text-rose-300">
                      Strategic Outcomes
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {project.outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2.5 text-sm text-nude-600/70 dark:text-rose-300/70 leading-relaxed">
                        <span className="w-1.5 h-1.5 mt-2 rounded-full bg-nude-300 dark:bg-rose-300 flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.hasCalculator && <BICalculator />}
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
