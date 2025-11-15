import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {

  const education = [
    {
      degree: 'Cycle Ingénieur — TWIN',
      institution: 'ESPRIT (École Supérieure Privée d’Ingénierie et de Technologies)',
      location: 'Tunis, Tunisie',
      period: '2023 – Présent',
      description:
        'Formation d’ingénieur spécialisée en développement Full-Stack, systèmes distribués, architectures logicielles modernes et IA appliquée.',
      achievements: [
        'Développement avancé : Java, Spring Boot, Angular, React, Laravel, Node.js',
        'Microservices, DevOps (Docker, Kubernetes, CI/CD)',
        'Cloud computing & systèmes distribués',
        'Projets IA : NLP, Computer Vision, modèles Transformers'
      ],
      logo: '/logos/ESPRIT.png',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      degree: 'Licence Business Computing — E-Business',
      institution: 'ESEN Manouba (École Supérieure d’Économie Numérique)',
      location: 'Manouba, Tunisie',
      period: '2020 – 2023',
      description:
        'Licence spécialisée en technologies du web, systèmes d’information, e-commerce et business digital.',
      achievements: [
        'Développement web : PHP, Laravel, Symfony, JavaScript, SQL',
        'E-business, marketing digital, gestion de projets',
        'Analyse de données et systèmes d’information',
        'Réalisation de plateformes web complètes'
      ],
      logo: '/logos/esen.png',
      gradient: 'from-blue-600 to-cyan-600'
    }
  ];

  return (
    <section id="education" className="relative py-32 bg-[#0a0a1f] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">
            Learning Journey
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Education.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Academic path combining software engineering, digital technologies, and modern web development.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${edu.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
              ></div>

              {/* Card */}
              <div className="relative h-full p-8 bg-[#1a1a3e]/50 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all duration-300">

                {/* Logo */}
                <div className="mb-6">
                  <img
                    src={edu.logo}
                    alt={`${edu.institution} logo`}
                    className="w-20 h-20 object-contain rounded-lg bg-white/10 p-2"
                  />
                </div>

                {/* Degree */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <p className="text-purple-400 font-semibold text-lg mb-4">
                  {edu.institution}
                </p>

                {/* Period & Location */}
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} />
                    {edu.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {edu.description}
                </p>

                {/* Achievements */}
                <ul className="space-y-3">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0"></span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
