/**
 * Central portfolio data. Keep personal and project information in this file
 * so every section presents the same details.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'THIRUNAGARI NANDA KUMAR',
  displayName: 'Thirunagari Nanda Kumar',
  firstName: 'NANDA',
  seriesTag: 'THE SERIES',
  originalLabel: 'A NANDA KUMAR ORIGINAL',
  role: 'Java Full Stack Developer',
  tagline: ['Java Full Stack Developer', 'Backend Development', 'Cloud Computing'],
  intro:
    'ECE graduate transitioning into software development, interested in Java, backend development, cloud computing and full-stack applications.',
  location: 'Hyderabad, Telangana, India',
  email: 'nandathirunagari.9@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/tnandakumar/',
    github: 'https://github.com/nanda6912',
  },
  resumePdf: '/assets/nanda-kumar-resume.pdf',
  portrait: {
    src: '/assets/nanda-profile.jpg',
    srcSet: '/assets/nanda-profile-420.webp 420w, /assets/nanda-profile-720.webp 720w, /assets/nanda-profile-1100.webp 1100w',
    alt: 'Portrait of Thirunagari Nanda Kumar',
  },
  interests: ['Backend Development', 'Cloud Computing', 'Full-Stack Applications'],
};

export const education: { school: string; place?: string; degree: string; period: string; score: string }[] = [
  {
    school: 'Vignan Institute of Technology and Science',
    degree: 'B.Tech — Electronics and Communication Engineering',
    period: '2021 – 2025',
    score: 'CGPA 6.93',
  },
  {
    school: 'Narayana Junior College',
    degree: 'Intermediate',
    period: '2019 – 2021',
    score: '93.4%',
  },
  {
    school: "Lord's High School",
    degree: 'SSC',
    period: '2018 – 2019',
    score: 'CGPA 9.5',
  },
];

export const experience: { company: string; role: string; period: string; points: string[] }[] = [];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year?: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
};

export const projects: Project[] = [
  {
    id: 'smart-parking',
    title: 'Smart Parking Management System',
    genre: 'Full-Stack • Parking Management',
    logline: 'A Java 21 and Spring Boot application for real-time parking allocation, multi-floor occupancy tracking and exit fee management.',
    stack: ['Java 21', 'Spring Boot 3.2', 'PostgreSQL 16', 'Docker', 'JavaScript'],
    build: [
      'Provides real-time parking slot management and occupancy tracking across two floors.',
      'Includes staff exit management, fee calculation, a UPI payment workflow and downloadable receipts.',
      'The repository documents Docker deployment and PostgreSQL storage.',
    ],
    features: [
      'Real-time parking slot allocation and occupancy tracking',
      'Staff exit management and fee calculation',
      'UPI payment workflow and downloadable receipts',
      'Docker deployment with PostgreSQL',
    ],
    metrics: [],
    github: 'https://github.com/nanda6912/SmartParkingSystem',
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'trackmyapply',
    title: 'TrackMyApply',
    genre: 'Full-Stack • Productivity',
    logline: 'A job application tracker built with Spring Boot and React, with Gmail integration for email parsing and application status management.',
    stack: ['Spring Boot', 'React', 'Gmail'],
    build: [
      'Tracks job applications and their statuses.',
      'Uses Gmail integration to parse job application emails.',
    ],
    features: ['Job application tracking', 'Gmail email parsing', 'Application status management'],
    metrics: [],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
  {
    id: 'iot-night-patrolling-robot',
    title: 'IoT Smart Night Patrolling Robot',
    genre: 'IoT • Robotics',
    logline: 'An ESP32-based night patrolling robot using camera, ultrasonic and sound sensors, GPS and a buzzer.',
    stack: ['ESP32', 'Camera', 'Ultrasonic Sensor', 'Sound Sensor', 'GPS', 'Buzzer'],
    build: [
      'Combines camera, ultrasonic and sound sensors with GPS and a buzzer.',
      'Supports surveillance, obstacle detection and email alerts.',
    ],
    features: ['Surveillance', 'Obstacle detection', 'Email alerts'],
    metrics: [],
    palette: { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' },
    motif: 'shield',
  },
  {
    id: 'pricecompare',
    title: 'PriceCompare',
    genre: 'Web Application',
    logline: 'A product price comparison application built with Java Servlets and JSP.',
    stack: ['Java Servlets', 'JSP'],
    build: ['Compares product prices in a Java Servlet and JSP application.'],
    features: ['Product price comparison'],
    metrics: [],
    palette: { from: '#1a0d02', via: '#8a4a07', to: '#0a0806', accent: '#ffb547' },
    motif: 'flow',
  },
  {
    id: 'azure-vm-scale-sets',
    title: 'Azure VM Scale Sets',
    genre: 'Cloud • Azure',
    logline: 'A cloud project using Microsoft Azure VM Scale Sets and Azure Load Balancer.',
    stack: ['Microsoft Azure', 'VM Scale Sets', 'Azure Load Balancer'],
    build: [
      'Uses VM Scale Sets and Azure Load Balancer for cloud deployment and autoscaling.',
      'Includes load testing.',
    ],
    features: ['Cloud deployment', 'Autoscaling', 'Load testing'],
    metrics: [],
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'tenants',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'Microsoft', name: 'Microsoft Azure Fundamentals (AZ-900)' },
  { issuer: 'HackerRank', name: 'SQL Problem Solving' },
  { issuer: 'HackerRank', name: 'Java' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Programming and scripting',
    skills: [
      { name: 'Java', mono: 'Jv', note: 'Primary' },
      { name: 'Python', mono: 'Py' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Web interfaces',
    skills: [
      { name: 'JavaScript', mono: 'Js' },
      { name: 'HTML', mono: 'Ht' },
      { name: 'CSS', mono: 'Cs' },
      { name: 'React', mono: 'Re' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'Java application development',
    skills: [
      { name: 'Spring Boot', mono: 'SB' },
      { name: 'Spring', mono: 'Sp' },
      { name: 'JDBC', mono: 'Jd' },
      { name: 'Servlets', mono: 'Sv' },
      { name: 'JSP', mono: 'Jp' },
      { name: 'REST APIs', mono: 'AP' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Relational databases',
    skills: [
      { name: 'Oracle', mono: 'Or' },
      { name: 'MySQL', mono: 'My' },
      { name: 'PostgreSQL', mono: 'Pg' },
    ],
  },
  {
    id: 'tools',
    title: 'Cloud & Tools',
    subtitle: 'Platforms and developer tools',
    skills: [
      { name: 'Microsoft Azure', mono: 'Az' },
      { name: 'Docker', mono: 'Dk' },
      { name: 'Git', mono: 'Gt' },
      { name: 'GitHub', mono: 'Gh' },
      { name: 'Postman', mono: 'Pm' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  Java: ['Smart Parking Management System', 'PriceCompare', 'Java – HackerRank'],
  SQL: ['SQL Problem Solving – HackerRank'],
  React: ['TrackMyApply'],
  'Spring Boot': ['Smart Parking Management System', 'TrackMyApply'],
  Spring: ['Smart Parking Management System', 'TrackMyApply'],
  'Microsoft Azure': ['Azure VM Scale Sets'],
  Docker: ['Smart Parking Management System'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2018 – 2019',
    synopsis: "SSC at Lord's High School.",
    episodes: [
      {
        code: 'S01 E01',
        title: 'SSC',
        description: "Completed SSC at Lord's High School with a CGPA of 9.5.",
        tags: ['SSC', 'CGPA 9.5'],
        runtime: '2018 – 2019',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Intermediate',
    period: '2019 – 2021',
    synopsis: 'Intermediate studies at Narayana Junior College.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Intermediate',
        description: 'Studied at Narayana Junior College and achieved 93.4%.',
        tags: ['Intermediate', '93.4%'],
        runtime: '2019 – 2021',
        palette: violet,
      },
    ],
  },
  {
    number: 3,
    title: 'Engineering',
    period: '2021 – 2025',
    synopsis: 'B.Tech in Electronics and Communication Engineering at Vignan Institute of Technology and Science.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'B.Tech · ECE',
        description: 'Completed a B.Tech in Electronics and Communication Engineering with a CGPA of 6.93.',
        tags: ['B.Tech', 'ECE', 'CGPA 6.93'],
        runtime: '2021 – 2025',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Building Software',
    period: 'Projects',
    synopsis: 'A collection of full-stack, IoT and cloud projects.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'Smart Parking',
        description: projects[0].logline,
        tags: projects[0].stack,
        runtime: 'Project',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'TrackMyApply',
        description: projects[1].logline,
        tags: projects[1].stack,
        runtime: 'Project',
        palette: amber,
      },
      {
        code: 'S04 E03',
        title: 'Night Patrolling Robot',
        description: projects[2].logline,
        tags: projects[2].stack,
        runtime: 'Project',
        palette: jade,
      },
      {
        code: 'S04 E04',
        title: 'PriceCompare',
        description: projects[3].logline,
        tags: projects[3].stack,
        runtime: 'Project',
        palette: violet,
      },
      {
        code: 'S04 E05',
        title: 'Azure VM Scale Sets',
        description: projects[4].logline,
        tags: projects[4].stack,
        runtime: 'Project',
        palette: ocean,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Project', title: 'Smart Parking', detail: projects[0].logline, palette: projects[0].palette },
  { label: 'Project', title: 'TrackMyApply', detail: projects[1].logline, palette: projects[1].palette },
  { label: 'Project', title: 'Night Patrol Robot', detail: projects[2].logline, palette: projects[2].palette },
  { label: 'Project', title: 'PriceCompare', detail: projects[3].logline, palette: projects[3].palette },
  { label: 'Project', title: 'Azure VM Scale Sets', detail: projects[4].logline, palette: projects[4].palette },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · ECE',
    lines: ['Vignan Institute of Technology and Science', '2021 – 2025 · CGPA 6.93'],
    chips: ['Electronics and Communication Engineering'],
  },
  {
    kicker: 'Skills',
    title: 'Java Full Stack',
    lines: ['Java, Python, SQL · JavaScript, HTML, CSS, React', 'Spring Boot, Spring, JDBC, Servlets, JSP, REST APIs'],
    chips: ['Java', 'Spring Boot', 'React', 'SQL', 'Microsoft Azure'],
  },
  {
    kicker: 'Projects',
    title: 'Five Projects',
    lines: [
      'Smart Parking Management System · TrackMyApply',
      'IoT Smart Night Patrolling Robot · PriceCompare',
      'Azure VM Scale Sets',
    ],
  },
  {
    kicker: 'Certified',
    title: 'Credentials',
    lines: ['Microsoft Azure Fundamentals (AZ-900)', 'SQL Problem Solving · Java — HackerRank'],
  },
  {
    kicker: 'Current focus',
    title: 'Building with Java.',
    lines: ['Backend development · Cloud computing · Full-stack applications'],
  },
];

export type ProfileId = 'nanda' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'nanda',
    name: 'Nanda',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, education & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Projects`, palette: crimson },
  picks: { nav: 'Highlights', card: 'Project Highlights', meta: `${topPicks.length} Projects`, palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Certifications', card: 'Certifications', meta: `${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
