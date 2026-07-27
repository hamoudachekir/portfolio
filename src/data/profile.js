/** Single source of truth for Hamouda Chekir portfolio content — keep factual. */

export const profile = {
  name: 'Hamouda Chekir',
  title: 'Full-Stack & AI Engineer',
  location: 'Tunis, Tunisia · Open to remote / hybrid',
  email: 'hamoudachkir@yahoo.fr',
  phone: '+216 55 913 832',
  github: 'https://github.com/hamoudachekir',
  linkedin: 'https://www.linkedin.com/in/hamouda-chekir-5053572b4',
  cvEn: '/cv/Hamouda_Chekir_CV.pdf',
  cvFr: '/cv/Hamouda_Chekir_CV_FR.pdf',
  tagline:
    'I turn hiring and product workflows into reliable web systems — microservices, LLM agents, and clean APIs.',
  summary:
    'Engineering student at ESPRIT (TWIN). At Talan I designed and shipped NextHire, an AI-first ATS of 16 microservices (React, Node, Python FastAPI, MongoDB, Docker). Comfortable with Agile delivery and mixed stakeholders.',
};

export const focusAreas = [
  {
    title: 'Full-Stack delivery',
    description:
      'React SPAs, Node/Express gateways, Python FastAPI services, REST APIs, auth flows, and production-minded UI.',
  },
  {
    title: 'Applied AI systems',
    description:
      'LLM agents, LangGraph pipelines, structured outputs with anti-hallucination checks, RAG, and CV/OCR tooling.',
  },
  {
    title: 'Data & APIs',
    description:
      'MongoDB, PostgreSQL, MySQL. Designing service boundaries, shared schemas, and operator-friendly backends.',
  },
];

export const technologies = [
  {
    title: 'Languages & frameworks',
    items: ['Python', 'JavaScript', 'React', 'Node/Express', 'FastAPI', 'Flask', 'Laravel', 'Django'],
  },
  {
    title: 'Data & AI',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'LangGraph', 'LangChain', 'RAG', 'spaCy', 'YOLO'],
  },
  {
    title: 'Delivery',
    items: ['Docker', 'Git', 'GitLab CI', 'REST APIs', 'WebRTC', 'Scrum/Agile', 'Postman', 'AWS Foundations'],
  },
];

/** Skill matrix for coding / AI profile (honest levels 1–5). */
export const skillMatrix = [
  {
    group: 'Engineering',
    color: 'sky',
    skills: [
      { name: 'Python / FastAPI', level: 4 },
      { name: 'React / JS', level: 4 },
      { name: 'Node / Express', level: 3 },
      { name: 'REST APIs', level: 4 },
      { name: 'SQL (Postgres / MySQL)', level: 3 },
      { name: 'MongoDB', level: 4 },
    ],
  },
  {
    group: 'AI systems',
    color: 'mint',
    skills: [
      { name: 'LLM agents', level: 4 },
      { name: 'LangGraph / LangChain', level: 4 },
      { name: 'RAG & grounding', level: 3 },
      { name: 'Structured outputs', level: 4 },
      { name: 'MCP-style gateways', level: 3 },
      { name: 'Vision (YOLO / VLM)', level: 3 },
    ],
  },
  {
    group: 'Delivery',
    color: 'amber',
    skills: [
      { name: 'Docker', level: 4 },
      { name: 'Git / GitLab CI', level: 4 },
      { name: 'Microservices design', level: 4 },
      { name: 'Agile / Scrum', level: 4 },
      { name: 'AWS Foundations', level: 2 },
      { name: 'WebRTC', level: 3 },
    ],
  },
];

export const experiences = [
  {
    title: 'Software Engineer — Final-Year Project (PFE)',
    company: 'Talan',
    logo: '/logos/talan.png',
    period: 'Feb 2026 – Aug 2026',
    location: 'Tunis, Tunisia',
    achievements: [
      'Designed and shipped NextHire, an AI-first ATS spanning 16 microservices (Node gateway, React SPAs, Python FastAPI/Flask services) with shared MongoDB and Dockerised boundaries.',
      'Built an adaptive LLM voice interview agent and a LangGraph scoring pipeline fusing transcription, behaviour and vision signals.',
      'Automated CV parsing/tailoring with anti-hallucination checks, quizzes, and Google Calendar scheduling for recruiters.',
    ],
    stack: 'React · Node/Express · Python FastAPI · MongoDB · Docker · LangGraph · WebRTC',
  },
  {
    title: 'Full-Stack Developer Intern',
    company: 'SmartConseil — Dafe Management',
    logo: '/logos/smartconseil.png',
    period: 'Jun 2025 – Aug 2025',
    location: 'Tunis, Tunisia',
    achievements: [
      'Delivered modular Laravel back-office workflows (regions, packs, modules) on PostgreSQL and MongoDB.',
      'Migrated crawler modules into a centralised Laravel codebase; shipped filterable UIs and PDF/Excel exports.',
      'Worked in Agile with code reviews, unit tests, SonarQube, GitLab CI/CD and Docker.',
    ],
    stack: 'Laravel · Blade · JavaScript · PostgreSQL · MongoDB · GitLab CI · Docker',
  },
  {
    title: 'Web Developer Intern',
    company: 'Big Deal (Club Privilèges)',
    logo: '/logos/bigdeal.png',
    period: 'Jun 2024 – Aug 2024',
    location: 'Tunis, Tunisia',
    achievements: [
      'Shipped a digital gift-code module (generation, assignment, tracking) on Laravel/Filament.',
      'Validated APIs with Postman and delivered under Git-based review before go-live.',
    ],
    stack: 'Laravel · Filament · Git · Postman',
  },
  {
    title: 'Web Developer Intern',
    company: 'HOTIX',
    logo: '/logos/hotix.png',
    period: 'Feb 2023 – May 2023',
    location: 'Tunis, Tunisia',
    achievements: [
      'Launched storefront features for “Consommi Tounsi #619” in .NET under Scrum.',
      'Participated in testing and production deployment.',
    ],
    stack: '.NET · Scrum',
  },
];

export const projects = [
  {
    featured: true,
    badge: 'PFE · Talan',
    title: 'NextHire — AI Recruitment Platform',
    description:
      'End-to-end AI-first ATS: 16 microservices, adaptive LLM voice interviews, integrity checks, LangGraph scoring reports, CV tailoring, and recruiter dashboards.',
    technologies: ['React', 'Node/Express', 'Python', 'FastAPI', 'MongoDB', 'Docker', 'LangGraph', 'WebRTC'],
    highlights: ['16 microservices', 'LLM voice agent', 'LangGraph scoring', 'CV tailoring'],
    github: 'https://github.com/hamoudachekir/ai-recruiter-platform',
    demo: null,
  },
  {
    title: 'Multi-Agent AML Engine — MCP Gateway',
    description:
      'AML pattern detection (smurfing, loops) combining business rules with RAG/Critic LLM agents behind a secured MCP-style gateway with access control and traceability.',
    technologies: ['Python', 'LLM agents', 'RAG', 'MCP'],
    highlights: ['MCP gateway', 'RAG/Critic agents', 'Traceability'],
    github: 'https://github.com/hamoudachekir',
    demo: null,
  },
  {
    title: 'Clinical Decision Support',
    description:
      'Medical reports from radiographs and cited clinical Q&A via VLMs and a Meditron-7B RAG stack on Qdrant.',
    technologies: ['Python', 'RAG', 'Qdrant', 'Meditron-7B', 'VLM'],
    highlights: ['RAG with citations', 'VLM fine-tuning'],
    github: 'https://github.com/hamoudachekir',
    demo: null,
  },
  {
    title: 'TalentMatch — Secure Auction Platform',
    description:
      'FastAPI + React auction platform with multimodal AI (authenticity, price estimation, listing generation) and Solidity smart contracts on Sepolia.',
    technologies: ['Python', 'FastAPI', 'React', 'Gemini', 'Solidity'],
    highlights: ['Multimodal AI', 'Smart contracts'],
    github: 'https://github.com/hamoudachekir',
    demo: null,
  },
  {
    title: 'Carnet de Santé — Health Tracking',
    description:
      'Django health platform with medical vision (ResNet), anomaly scores, T5 mental-health chatbot, JWT auth and monthly PDF reports.',
    technologies: ['Django', 'Python', 'SQLite', 'JWT', 'ResNet', 'T5'],
    highlights: ['Medical vision', 'Anomaly scoring', 'PDF reports'],
    github: 'https://github.com/hamoudachekir/Carnet-de-sant--Django/tree/main',
    demo: null,
  },
  {
    title: 'TuniVert — Environmental Platform',
    description:
      'Laravel eco-events and multi-gateway donations (Stripe, PayPal, Paymee) with QR verification, challenges and admin analytics.',
    technologies: ['Laravel', 'PHP 8.3', 'MySQL', 'Stripe', 'PayPal'],
    highlights: ['Multi-gateway donations', 'QR verification'],
    github: 'https://github.com/hamoudachekir/TuniVert',
    demo: null,
  },
];

export const education = [
  {
    degree: 'Engineering Degree — TWIN (Web, Internet & Network Technologies)',
    institution: 'ESPRIT',
    location: 'Tunis, Tunisia',
    period: '2023 – 2026',
    logo: '/logos/ESPRIT.png',
    points: [
      'Full-stack web, distributed systems, and applied AI projects',
      'PFE at Talan: NextHire AI recruitment platform',
    ],
  },
  {
    degree: "Bachelor's in Business Computing — E-Business",
    institution: 'ESEN Manouba',
    location: 'Manouba, Tunisia',
    period: '2020 – 2023',
    logo: '/logos/esen.png',
    points: [
      'Web technologies, information systems, and digital business',
      'Hands-on platforms with PHP/Laravel and SQL',
    ],
  },
];

export const certifications = [
  {
    title: 'AWS Academy Graduate — Cloud Foundations',
    issuer: 'AWS Academy',
    date: 'May 2025',
    detail: 'Compute, storage, networking, IAM, Well-Architected',
  },
  {
    title: 'CCNA — Switching, Routing & Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'Sept 2024',
    detail: 'VLAN, STP, EtherChannel, WLAN, L2 security, static routing',
  },
  {
    title: 'Hashgraph Developer Course',
    issuer: 'Hedera Hashgraph',
    date: 'Oct 2025',
    detail: 'Accounts, HBAR, Consensus/Token services, smart contracts, SDKs',
  },
];

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'French', level: 'Fluent' },
  { name: 'English', level: 'Advanced' },
];
