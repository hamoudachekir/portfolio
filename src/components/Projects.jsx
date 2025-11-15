import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

export default function Projects() {
  const projects = [
    {
      title: 'Carnet de Santé – Django Health Tracking Platform',
      description:
        'Advanced health tracking system integrating medical image analysis (AI), emotion-aware chatbot, anomaly detection, and personalized recommendations. Includes full authentication, dashboards, and monthly PDF reports.',
      technologies: [
        'Django',
        'Python',
        'SQLite',
        'JWT',
        'ResNet50',
        'ResNet18',
        'T5',
        'Isolation Forest',
        'OneClassSVM'
      ],
      features: [
        'Medical image analysis',
        'AI health recommendations',
        'Emotion detection chatbot',
        'Anomaly scoring 0–100',
        'PDF reporting & dashboards'
      ],
      image:
        'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop',
      github:
        'https://github.com/hamoudachekir/Carnet-de-sant--Django/tree/main',
      demo: '#',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      title: 'TuniVert – Environmental Platform (Laravel)',
      description:
        'Eco-responsible platform with donation system (Stripe/PayPal/Paymee), events, gamified challenges, forums, and admin dashboards. Includes AI donation suggestions and pollution impact analysis.',
      technologies: [
        'Laravel',
        'PHP 8.3',
        'MySQL',
        'Stripe',
        'PayPal',
        'Paymee',
        'JavaScript'
      ],
      features: [
        'Gamified challenges',
        'Multi-gateway donations',
        'QR code verification',
        'AI recommendations',
        'Real-time analytics'
      ],
      image:
        'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop',
      github: 'https://github.com/hamoudachekir/TuniVert',
      demo: '#',
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      title: 'Next Hire – AI Recruitment Platform',
      description:
        'Intelligent recruitment platform with candidate matching, ATS workflow, dashboards, and containerized microservices. Built using React, Express, MongoDB, Python, Docker, and Kubernetes.',
      technologies: [
        'React.js',
        'Express.js',
        'MongoDB',
        'Python',
        'Docker',
        'Kubernetes'
      ],
      features: [
        'Candidate matching (AI)',
        'ATS workflow',
        'Admin dashboards',
        'Microservices architecture',
        'Container orchestration'
      ],
      image:
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop',
      github: 'https://github.com/FantasticFiveE/PiFantasticFive',
      demo: '#',
      gradient: 'from-blue-600 to-indigo-600'
    },
    {
      title: 'Full Stack JS – MERN Platform',
      description:
        'Complete MERN application with authentication, role management, REST API, and secure CRUD operations.',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express', 'REST API'],
      features: ['Auth system', 'Role management', 'CRUD API', 'MVC structure'],
      image:
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
      github: 'https://github.com/hamoudachekir?tab=repositories',
      demo: '#',
      gradient: 'from-orange-600 to-red-600'
    },
    {
      title: 'Projet Adventure — Multi-Platform Suite',
      description:
        'A multi-platform application ecosystem including a Symfony web app, JavaFX desktop application, and FlutterFlow mobile app with synchronized data across all platforms.',
      technologies: [
        'Symfony',
        'JavaFX',
        'FlutterFlow',
        'MySQL',
        'REST API'
      ],
      features: [
        'Cross-platform sync',
        'Admin panel',
        'Mobile + Web + Desktop',
        'Centralized backend',
        'Real-time updates'
      ],
      image:
        'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?w=800&h=600&fit=crop',
      github: 'https://github.com/hamoudachekir/Adventure-web',
      demo: '#',
      gradient: 'from-yellow-600 to-orange-600'
    },
    {
      title: 'Jira Semantic Web Project – GreenCity',
      description:
        'Project management under Jira with semantic web concepts: backlog creation, user stories, sprint planning, issue tracking, reviews, and burndown charts.',
      technologies: ['Jira', 'Agile', 'Semantic Web'],
      features: [
        'Backlog management',
        'User stories & sprints',
        'Issue tracking',
        'Sprint reviews',
        'Burndown charts'
      ],
      image:
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      github: 'https://github.com/MariemHabouria/GreenCity',
      demo: '#',
      gradient: 'from-teal-600 to-blue-600'
    }
  ];

  return (
    <section
      id="projects"
      className="relative py-32 bg-gradient-to-b from-[#0a0a1f] to-[#1a1a3e] overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Academic Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A selection of advanced academic projects combining full-stack
            engineering, cloud technologies, DevOps, and applied AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-full bg-[#1a1a3e]/50 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300">
                <div className="relative h-48 overflow-hidden">
                  <OptimizedImage
                    src={project.image}
                    alt={`${project.title} - DevOps Project Screenshot`}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 mix-blend-multiply`}
                  ></div>
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.features.slice(0, 3).map((feature, featureIdx) => (
                      <span
                        key={featureIdx}
                        className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-purple-300 text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <Github size={20} />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>

                <div
                  className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
