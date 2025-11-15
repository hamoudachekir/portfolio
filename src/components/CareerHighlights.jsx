import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import Starfield from './Starfield.jsx';

// IMPORT COMPANY LOGOS (add these images inside /public/logos/)
import smartLogo from '/logos/smartconseil.png';
import bigdealLogo from '/logos/bigdeal.png';
import hotixLogo from '/logos/hotix.png';

export default function CareerHighlights() {
  const experiences = [
    {
      title: 'Full-Stack Development Intern',
      company: 'SmartConseil — Dafe Management',
      logo: smartLogo,
      period: 'July 2025 – August 2025',
      location: 'Tunis, Tunisia',
      achievements: [
        'Built dynamic back-office dashboards for region, packs, and module management',
        'Migrated Crawler modules (HTML/API Pilots, grids, IP systems) into a centralized Laravel architecture',
        'Developed ergonomic interfaces with filters, PDF/Excel exports, and Add/Edit forms using Blade & JavaScript',
        'Participated in Agile ceremonies: daily standups, code reviews, unit testing, functional validation'
      ],
      techStack:
        'Laravel (PHP, MVC), Blade, JavaScript, PostgreSQL, MongoDB, GitLab CI/CD, Docker, SonarQube, Postman, Redmine',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Immersion Intern',
      company: 'Big Deal (Club Privilèges)',
      logo: bigdealLogo,
      period: 'July 2024 – August 2024',
      location: 'Tunis, Tunisia',
      achievements: [
        'Developed features for generating and managing digital gift codes',
        'Worked with Laravel & Filament to build admin interfaces and tools',
        'Used phpMyAdmin and Postman for database and API testing'
      ],
      techStack: 'Laravel, Filament, Git, phpMyAdmin, Postman',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Web Development Intern',
      company: 'HOTIX',
      logo: hotixLogo,
      period: 'February 2023 – May 2023',
      location: 'Tunis, Tunisia',
      achievements: [
        'Developed the e-commerce platform “Consommi Tounsi #619” using .NET',
        'Worked in a Scrum environment with sprint planning and testing phases',
        'Participated in final deployment and delivery of the platform'
      ],
      techStack: '.NET, Scrum methodology, Testing & Deployment',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="career" className="relative py-32 bg-[#0a0a1f] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <Starfield />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Experience</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Career Highlights.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A journey shaped by full-stack development, cloud practices, and delivering real-world digital solutions.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  idx % 2 === 0 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 border-4 border-[#0a0a1f] z-10"></div>

                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="w-full lg:w-5/12 group"
                >
                  <div className="relative p-8 bg-[#1a1a3e]/50 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all duration-300">

                    <div className={`absolute inset-0 bg-gradient-to-r ${exp.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                    <div className="relative">

                      {/* Logo */}
                      {exp.logo && (
                        <img src={exp.logo} alt={exp.company} className="w-16 h-16 object-contain mb-4 rounded-lg" />
                      )}

                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-purple-400 font-semibold mb-2">{exp.company}</p>

                      <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                        <span className="flex items-center gap-2">
                          <Calendar size={16} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin size={16} />
                          {exp.location}
                        </span>
                      </div>

                      <ul className="space-y-3 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-400">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack */}
                      <p className="text-gray-400 text-sm italic">
                        <strong className="text-purple-300">Tech Stack: </strong>{exp.techStack}
                      </p>
                    </div>
                  </div>
                </motion.div>

                <div className="hidden lg:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
