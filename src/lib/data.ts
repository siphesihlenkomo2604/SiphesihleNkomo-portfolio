export type ViewMode = 'corporate' | 'entrepreneur';
export type ThemeMode = 'nude' | 'dark';

export type Experience = {
  id: string;
  role: string;
  org: string;
  period: string;
  views: ViewMode[];
  summary: string;
  achievements: string[];
};

export type Skill = {
  name: string;
  category: 'technical' | 'administration' | 'leadership';
  views: ViewMode[];
};

export type Project = {
  id: string;
  title: string;
  tagline: string;
  icon: string;
  views: ViewMode[];
  problem: string;
  tools: string[];
  outcomes: string[];
  hasCalculator?: boolean;
};

export type Education = {
  id: string;
  qualification: string;
  institution: string;
  period: string;
  detail: string;
};

export type Certification = {
  id: string;
  title: string;
  institution: string;
  year: string;
};

export const experiences: Experience[] = [
  {
    id: 'facilitator',
    role: 'Workshop Facilitator & Mental Health Trainer',
    org: 'Matlhogonolo Community Outreach',
    period: 'Feb 2026 – June 2026',
    views: ['corporate', 'entrepreneur'],
    summary:
      'Led psychoeducational workshops and early childhood development initiatives for community beneficiaries.',
    achievements: [
      'Spearheaded psychoeducational workshops targeting mental health awareness and coping strategies.',
      'Executed early childhood development lesson plans for Grade R learners with structured cognitive activities.',
      'Tracked and documented participant progress data to measure programme impact and engagement.',
    ],
  },
  {
    id: 'sales',
    role: 'Sales Representative (Call Centre Agent)',
    org: 'Real Promotions',
    period: 'July 2024 – Jan 2026',
    views: ['corporate'],
    summary:
      'Managed high-volume outbound sales pipelines for fiber connectivity packages over 1.5 years.',
    achievements: [
      'Conducted high-volume outbound sales calls for fiber connectivity packages across diverse customer segments.',
      'Managed customer pipelines end-to-end, from lead generation to conversion, using CRM tools.',
      'Maintained accurate CRM records and ensured data integrity across all client interactions.',
    ],
  },
  {
    id: 'founder',
    role: 'Founder & Managing Director',
    org: 'Siphe Beauty Bar',
    period: '2025 – Present',
    views: ['entrepreneur'],
    summary:
      'Scaled an independent beauty venture, owning pricing, operations, marketing, and scheduling.',
    achievements: [
      'Scaled an independent beauty venture from inception, managing service pricing and operational logistics.',
      'Drove digital video marketing campaigns to build brand presence and attract new clients.',
      'Managed client scheduling and service delivery to ensure consistent customer satisfaction.',
    ],
  },
  {
    id: 'wil',
    role: 'Student Social Worker (Work Integrated Learning)',
    org: 'Ephraim Zulu Senior Citizen Centre',
    period: 'Oct 2024 – Nov 2024 • 160 Hours',
    views: ['corporate', 'entrepreneur'],
    summary:
      'Delivered social and emotional support to senior citizens during a 160-hour WIL placement.',
    achievements: [
      'Delivered social and emotional support to elderly residents through structured engagement.',
      'Conducted intake assessments to identify individual needs and care priorities.',
      'Managed centre activity scheduling to ensure balanced and meaningful daily programmes.',
    ],
  },
  {
    id: 'src',
    role: 'Student Representative Council (SRC) President',
    org: 'Damelin Braamfontein Campus',
    period: '2022 – 2023',
    views: ['corporate', 'entrepreneur'],
    summary:
      'Served as chief student advocate and led the executive council for the campus.',
    achievements: [
      'Served as chief student advocate, representing the student body in institutional forums.',
      'Chaired executive council meetings and coordinated student-led initiatives.',
      'Led campus community outreach initiatives connecting students with local organisations.',
    ],
  },
];

export const skills: Skill[] = [
  // Technical & Digital
  { name: 'MS Excel (Data Entry & Formatting)', category: 'technical', views: ['corporate', 'entrepreneur'] },
  { name: 'MS Word & PowerPoint', category: 'technical', views: ['corporate', 'entrepreneur'] },
  { name: 'Google Workspace', category: 'technical', views: ['corporate', 'entrepreneur'] },
  { name: 'CRM Systems', category: 'technical', views: ['corporate'] },
  { name: 'Outbound Dialers', category: 'technical', views: ['corporate'] },
  { name: 'Canva Graphic Design', category: 'technical', views: ['entrepreneur'] },
  // Administration
  { name: 'Data Capturing & Validation', category: 'administration', views: ['corporate', 'entrepreneur'] },
  { name: 'Records Retention', category: 'administration', views: ['corporate'] },
  { name: 'Document Management', category: 'administration', views: ['corporate', 'entrepreneur'] },
  { name: 'ICT Literacy', category: 'administration', views: ['corporate', 'entrepreneur'] },
  { name: 'Pipeline Management', category: 'administration', views: ['corporate'] },
  { name: 'Time Management', category: 'administration', views: ['corporate', 'entrepreneur'] },
  // Leadership & Facilitation
  { name: 'Customer Service', category: 'leadership', views: ['corporate', 'entrepreneur'] },
  { name: 'Stakeholder Engagement', category: 'leadership', views: ['corporate', 'entrepreneur'] },
  { name: 'Workshop Facilitation', category: 'leadership', views: ['corporate', 'entrepreneur'] },
  { name: 'Conflict Resolution', category: 'leadership', views: ['corporate', 'entrepreneur'] },
  { name: 'Public Speaking', category: 'leadership', views: ['corporate', 'entrepreneur'] },
  { name: 'Mental Health Support', category: 'leadership', views: ['corporate', 'entrepreneur'] },
];

export const projects: Project[] = [
  {
    id: 'bi-ledger',
    title: 'Siphe Beauty Bar Business Intelligence Ledger',
    tagline: 'Operational tracking framework using Excel metrics to analyze client bookings, pricing, and revenue.',
    icon: 'BarChart3',
    views: ['entrepreneur'],
    problem:
      'As a solo founder, Siphesihle needed a structured way to track client bookings, monitor pricing across services, and understand revenue trends without dedicated BI software.',
    tools: ['MS Excel', 'Data Validation', 'Pivot Tables', 'Revenue Tracking', 'Client Scheduling'],
    outcomes: [
      'Built a self-service ledger that consolidates daily bookings, service pricing, and revenue into a single dashboard.',
      'Enabled data-driven pricing decisions by tracking average revenue per appointment and per service category.',
      'Reduced scheduling conflicts by maintaining a unified client appointment log with status tracking.',
    ],
    hasCalculator: true,
  },
  {
    id: 'workshop',
    title: 'Community Psychoeducational Workshop Framework',
    tagline: 'Structured training modules and cognitive learning activity plans designed for community development.',
    icon: 'Users',
    views: ['corporate', 'entrepreneur'],
    problem:
      'Community outreach programmes lacked a repeatable, structured curriculum for psychoeducational sessions and early childhood development activities.',
    tools: ['Lesson Planning', 'Cognitive Activity Design', 'Progress Tracking', 'Group Facilitation'],
    outcomes: [
      'Designed modular psychoeducational workshops adaptable to different age groups and community contexts.',
      'Created cognitive learning activity plans for Grade R learners aligned with developmental milestones.',
      'Implemented participant progress tracking to measure engagement and learning outcomes.',
    ],
  },
  {
    id: 'pipeline',
    title: 'Enterprise Connectivity Pipeline Management',
    tagline: 'High-volume client data validation, record retention, and conversion tracking workflow.',
    icon: 'Network',
    views: ['corporate'],
    problem:
      'Managing high-volume outbound sales for fiber connectivity required accurate client data, consistent record retention, and clear conversion tracking across the pipeline.',
    tools: ['CRM Systems', 'Outbound Dialers', 'Data Capturing', 'Pipeline Management', 'Records Retention'],
    outcomes: [
      'Maintained accurate CRM records across 1.5 years of high-volume outbound sales activity.',
      'Ensured data integrity through consistent validation and record retention practices.',
      'Tracked conversion metrics from lead to sale, enabling pipeline optimisation.',
    ],
  },
];

export const education: Education[] = [
  {
    id: 'nemisa',
    qualification: 'End-User Computing (EUC) Programme',
    institution: 'NEMISA',
    period: '2026',
    detail:
      'Focused on ICT literacy, enterprise software workflows, data integrity, and documentation.',
  },
  {
    id: 'damelin',
    qualification: 'Bachelor of Applied Social Sciences',
    institution: 'Damelin Braamfontein Campus',
    period: '2022 – 2024',
    detail: 'Served as elected SRC President (2022–2023).',
  },
  {
    id: 'matric',
    qualification: 'Matric (Bachelor Pass)',
    institution: "Rand Girls' High School",
    period: '2015 – 2019',
    detail: 'Completed National Senior Certificate with Bachelor Pass endorsement.',
  },
];

export const certifications: Certification[] = [
  {
    id: 'ai-essentials',
    title: 'Google AI Essentials',
    institution: 'CAPACITI',
    year: '2026',
  },
  {
    id: 'euc-nemisa',
    title: 'End-User Computing (EUC) Programme',
    institution: 'NEMISA',
    year: '2026',
  },
  {
    id: 'ba-social-sciences',
    title: 'B. Applied Social Sciences',
    institution: 'Damelin Braamfontein Campus',
    year: '2022 – 2024',
  },
];

export const metrics = [
  { label: 'Years Sales Experience', value: 1.5, suffix: '+', prefix: '' },
  { label: 'WIL Hours Delivered', value: 160, suffix: '+', prefix: '' },
  { label: 'SRC President', value: 1, suffix: '', prefix: '', display: '2022–2023' },
  { label: 'Founder: Siphe Beauty Bar', value: 1, suffix: '', prefix: '', display: 'Est. 2025' },
];
