import { GraduationCap, Award, BadgeCheck } from 'lucide-react';
import { useReveal } from '@/lib/hooks';
import { education, certifications } from '@/lib/data';

export default function Education() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="education" className="py-24 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <div className={`mb-12 text-center ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-sm font-medium text-nude-400 dark:text-rose-400 tracking-widest uppercase mb-3">
            Education
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-nude-600 dark:text-rose-300">
            Foundations &amp; Qualifications
          </h2>
        </div>

        <div className="grid gap-4">
          {education.map((item, i) => (
            <div
              key={item.id}
              className="card-nude dark:card-rose p-6 sm:p-7 flex items-start gap-5 card-hover animate-fade-up"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-2xl bg-nude-200/50 dark:bg-rose-200 flex items-center justify-center flex-shrink-0 group-hover:bg-nude-300 transition-all duration-500">
                {i === 0 ? (
                  <Award className="w-5 h-5 text-nude-400 dark:text-rose-400" />
                ) : (
                  <GraduationCap className="w-5 h-5 text-nude-400 dark:text-rose-400" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-nude-600 dark:text-rose-300">
                      {item.qualification}
                    </h3>
                    <p className="text-sm font-medium text-nude-400 dark:text-rose-400 mt-1">
                      {item.institution}
                    </p>
                  </div>
                  <span className="text-xs text-nude-600/50 dark:text-rose-300/50 font-medium sm:pt-1">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-nude-600/65 dark:text-rose-300/65 mt-3 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-2xl bg-nude-300/15 dark:bg-rose-300/15 flex items-center justify-center">
              <BadgeCheck className="w-5 h-5 text-nude-400 dark:text-rose-400" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-nude-600 dark:text-rose-300">
              Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <div
                key={cert.id}
                className="card-nude dark:card-rose p-5 card-hover animate-fade-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">🎓</span>
                  <span className="text-[10px] font-bold text-nude-400 dark:text-rose-400 tracking-widest uppercase">
                    Certified
                  </span>
                </div>
                <h4 className="font-serif text-base font-semibold text-nude-600 dark:text-rose-300 leading-tight mb-2">
                  {cert.title}
                </h4>
                <p className="text-xs text-nude-400 dark:text-rose-400 font-medium mb-1">
                  {cert.institution}
                </p>
                <p className="text-xs text-nude-600/45 dark:text-rose-300/45">
                  {cert.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
