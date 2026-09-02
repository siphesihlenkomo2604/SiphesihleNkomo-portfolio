import { useState } from 'react';
import { BookOpen, Compass, Cpu } from 'lucide-react';
import { useReveal } from '@/lib/hooks';

const tabs = [
  {
    id: 'story',
    label: 'My Story',
    icon: BookOpen,
    content: (
      <>
        <p>
          I am an Applied Social Sciences graduate with a passion for people, systems, and meaningful
          community impact. My journey has taken me from the lecture halls of Damelin Braamfontein
          Campus — where I served as SRC President — to the call centre floor of Real Promotions,
          managing high-volume sales pipelines, and most recently into entrepreneurship as the
          founder of Siphe Beauty Bar.
        </p>
        <p>
          Along the way, I have facilitated psychoeducational workshops, delivered social work support
          to senior citizens, and built operational frameworks that turn raw data into clear
          decisions. I believe in structure, empathy, and the power of showing up consistently.
        </p>
      </>
    ),
  },
  {
    id: 'vision',
    label: 'Leadership Vision',
    icon: Compass,
    content: (
      <>
        <p>
          As SRC President at Damelin Braamfontein Campus (2022–2023), I served as chief student
          advocate, chaired executive council meetings, and led campus community outreach
          initiatives. That experience shaped my belief that leadership is about creating space for
          others to be heard and then turning that input into action.
        </p>
        <p>
          My vision is to bring that same facilitation-first mindset into administrative and
          operational roles — building systems that serve people, whether in a corporate
          environment, a community outreach programme, or my own venture.
        </p>
      </>
    ),
  },
  {
    id: 'tech',
    label: 'Technical Capabilities',
    icon: Cpu,
    content: (
      <>
        <p>
          I combine strong digital administration skills with practical, on-the-ground experience.
          I work confidently across MS Excel, MS Word, PowerPoint, Google Workspace, and CRM
          systems, and I use Canva for visual content creation in my entrepreneurial work.
        </p>
        <p>
          My approach to data is hands-on: capturing, validating, and maintaining records with
          integrity, then using that data to track pipelines, measure outcomes, and inform
          decisions. The NEMISA End-User Computing programme has further sharpened my enterprise
          software workflows and documentation discipline.
        </p>
      </>
    ),
  },
];

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [active, setActive] = useState('story');
  const activeTab = tabs.find((t) => t.id === active)!;

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="max-w-5xl mx-auto">
        <div className={`mb-12 text-center ${visible ? 'animate-fade-up' : 'opacity-0'}`}>
          <p className="text-sm font-medium text-nude-400 dark:text-rose-400 tracking-widest uppercase mb-3">
            About
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-nude-600 dark:text-rose-300">
            A Versatile Professional
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`pill flex items-center gap-2 ${
                  isActive
                    ? 'bg-nude-300 text-white dark:bg-rose-300 dark:text-rose-100 shadow-glow-rose'
                    : 'border border-nude-400/20 text-nude-600/70 dark:text-rose-300/70 hover:border-nude-300/50 dark:hover:border-rose-300/50 hover:shadow-glow-rose/30 hover:-translate-y-0.5'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content card */}
        <div
          key={active}
          className="card-nude dark:card-rose p-8 sm:p-10 shadow-soft animate-fade-in"
        >
          <div className="space-y-5 text-sm sm:text-base text-nude-600/80 dark:text-rose-300/80 leading-relaxed">
            {activeTab.content}
          </div>
        </div>
      </div>
    </section>
  );
}
