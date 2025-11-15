import { motion } from 'framer-motion';
import { Award, CheckCircle } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: 'Full-Stack Web Development',
      issuer: 'Online Learning Platform',
      date: '2023',
      skills: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      icon: '💻',
      gradient: 'from-purple-500 to-pink-500',
      verified: true
    },
    {
      title: 'Docker & Kubernetes',
      issuer: 'Cloud Native Training',
      date: '2023',
      skills: ['Docker', 'Kubernetes', 'Container Orchestration'],
      icon: '🐳',
      gradient: 'from-blue-500 to-cyan-500',
      verified: true
    },
    {
      title: 'DevOps & CI/CD',
      issuer: 'DevOps Institute',
      date: '2022',
      skills: ['Jenkins', 'GitLab CI', 'Terraform', 'Ansible'],
      icon: '⚙️',
      gradient: 'from-orange-500 to-red-500',
      verified: true
    },
    {
      title: 'Cloud Computing',
      issuer: 'Cloud Certification Program',
      date: '2023',
      skills: ['AWS', 'Azure', 'GCP', 'Cloud Architecture'],
      icon: '☁️',
      gradient: 'from-green-500 to-emerald-500',
      verified: true
    },
  ];

  const skills = [
    'RESTful API Design',
    'Microservices Architecture',
    'Database Design',
    'Security Best Practices',
    'Agile Methodologies',
    'Problem Solving',
    'Team Collaboration',
    'Technical Documentation'
  ];

  return (
    <section id="certifications" className="relative py-32 bg-[#0a0a1f] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
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
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Credentials & Skills</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Certifications.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Professional training and certifications validating expertise in modern development and DevOps practices.
          </p>
        </motion.div>

        {/* Certifications grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Gradient glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-r ${cert.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

              {/* Card */}
              <div className="relative h-full p-6 bg-[#1a1a3e]/50 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all duration-300">
                {/* Icon */}
                <div className="text-5xl mb-4">{cert.icon}</div>

                {/* Badge icon */}
                <div className={`inline-flex p-3 bg-gradient-to-r ${cert.gradient} rounded-lg mb-4`}>
                  <Award size={24} className="text-white" />
                </div>

                {/* Verified badge */}
                {cert.verified && (
                  <div className="flex items-center gap-1 mb-3">
                    <CheckCircle size={16} className="text-green-400" />
                    <span className="text-xs text-green-400">Verified</span>
                  </div>
                )}

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-300 transition-colors leading-tight">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p className="text-purple-400 font-semibold text-sm mb-2">{cert.issuer}</p>

                {/* Date */}
                <p className="text-gray-400 text-sm mb-4">{cert.date}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1">
                  {cert.skills.map((skill, skillIdx) => (
                    <span 
                      key={skillIdx}
                      className="px-2 py-1 bg-purple-500/10 border border-purple-500/20 rounded text-purple-300 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Additional <span className="text-purple-400">Skills</span>
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 bg-[#1a1a3e]/50 backdrop-blur-sm border border-white/10 rounded-full text-gray-300 hover:border-purple-500/50 hover:text-purple-300 transition-all duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400">
            Continuously expanding knowledge and staying updated with emerging technologies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
