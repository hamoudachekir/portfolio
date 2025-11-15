import { motion } from 'framer-motion';
import { Code, Palette, Cloud, Database } from 'lucide-react';
import Starfield from './Starfield.jsx';

const CodeSnippet = () => (
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
    <pre className="absolute top-1/4 left-10 font-mono text-cyan-500/10 text-xs transform -rotate-12">
      {`const deploy = () => {\n  console.log("🚀 Deploying...");\n};`}
    </pre>
    <pre className="absolute bottom-1/4 right-10 font-mono text-purple-500/10 text-xs transform rotate-12">
      {`import { createClient } from '@aws/sdk-s3';\n\nconst s3 = createClient();`}
    </pre>
  </div>
);

export default function Overview() {
  const cards = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building complete web applications with Laravel, Django, React, Node.js, RESTful APIs, authentication, dashboards, and real-time features.',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'Docker, GitLab CI/CD pipelines, containerization, deployment automation, and AWS Cloud Foundations for scalable and reliable environments.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Database,
      title: 'Database & Architecture',
      description: 'PostgreSQL, MongoDB, MySQL, SQLite.Designing secure APIs, microservice-based systems, and optimized database structures.',
      gradient: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Responsive interfaces using Tailwind CSS, Bootstrap, Figma, intuitive dashboards, and clean user experiences.',
      gradient: 'from-green-500 to-teal-500'
    },
  ];

  return (
    <section id="overview" className="relative py-32 bg-[#0a0a1f] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <Starfield />
        <CodeSnippet />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
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
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">What I Do</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Overview.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Combining full-stack development expertise with DevOps practices to build and deploy scalable, modern web applications.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative h-full"
            >
              {/* Gradient border effect */}
              <div className={`absolute -inset-px bg-gradient-to-r ${card.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500`}></div>
              
              {/* Card content */}
              <div className="relative h-full p-8 bg-[#1a1a3e]/70 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg group-hover:border-purple-400/60 transition-all duration-300">
                {/* Icon */}
                <div className={`inline-flex p-4 bg-gradient-to-r ${card.gradient} rounded-xl mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <card.icon size={28} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
