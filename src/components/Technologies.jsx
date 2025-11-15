import { motion } from 'framer-motion';
import { 
  SiReact, SiNodedotjs, SiExpress, SiMongodb, SiMysql, SiPostgresql,
  SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiTailwindcss,
  SiDocker, SiKubernetes, SiJenkins, SiGit, SiGithub,
  SiGitlab, SiTerraform, SiAnsible, SiPrometheus, SiGrafana,
  SiNginx, SiLinux, SiFigma
} from 'react-icons/si';
import { Cloud, Code } from 'lucide-react';

export default function Technologies() {
  const techCategories = [
    {
      title: 'Frontend Development',
      techs: [
        { Icon: SiReact, name: 'React.js', color: '#61DAFB' },
        { Icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
        { Icon: SiHtml5, name: 'HTML5', color: '#E34F26' },
        { Icon: SiCss3, name: 'CSS3', color: '#1572B6' },
        { Icon: SiTailwindcss, name: 'Tailwind CSS', color: '#06B6D4' },
        { Icon: SiBootstrap, name: 'Bootstrap', color: '#7952B3' },
      ]
    },
    {
      title: 'Backend Development',
      techs: [
        { Icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
        { Icon: SiExpress, name: 'Express.js', color: '#000000' },
        { Icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
        { Icon: SiMysql, name: 'MySQL', color: '#4479A1' },
        { Icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
      ]
    },
    {
      title: 'DevOps & Cloud',
      techs: [
        { Icon: SiDocker, name: 'Docker', color: '#2496ED' },
        { Icon: SiKubernetes, name: 'Kubernetes', color: '#326CE5' },
        { Icon: Cloud, name: 'AWS', color: '#FF9900' },
        { Icon: Cloud, name: 'Azure', color: '#0078D4' },
        { Icon: Cloud, name: 'GCP', color: '#4285F4' },
        { Icon: SiJenkins, name: 'Jenkins', color: '#D24939' },
      ]
    },
    {
      title: 'Infrastructure & Tools',
      techs: [
        { Icon: SiTerraform, name: 'Terraform', color: '#7B42BC' },
        { Icon: SiAnsible, name: 'Ansible', color: '#EE0000' },
        { Icon: SiPrometheus, name: 'Prometheus', color: '#E6522C' },
        { Icon: SiGrafana, name: 'Grafana', color: '#F46800' },
        { Icon: SiNginx, name: 'Nginx', color: '#009639' },
        { Icon: SiLinux, name: 'Linux', color: '#FCC624' },
      ]
    },
    {
      title: 'Version Control & Design',
      techs: [
        { Icon: SiGit, name: 'Git', color: '#F05032' },
        { Icon: SiGithub, name: 'GitHub', color: '#181717' },
        { Icon: SiGitlab, name: 'GitLab', color: '#FC6D26' },
        { Icon: SiFigma, name: 'Figma', color: '#F24E1E' },
        { Icon: Code, name: 'VS Code', color: '#007ACC' },
      ]
    },
  ];

  return (
    <section id="technologies" className="relative py-32 bg-[#0a0a1f] overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
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
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Tech Stack</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technologies.
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Comprehensive expertise across modern web development, DevOps practices, and cloud infrastructure.
          </p>
        </motion.div>

        {/* Tech categories */}
        <div className="space-y-16">
          {techCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
            >
              {/* Category title */}
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                <span className="text-purple-400">{category.title}</span>
              </h3>

              {/* Tech grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.techs.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="group relative"
                  >
                    {/* Glow effect */}
                    <div 
                      className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                      style={{ backgroundColor: tech.color }}
                    ></div>

                    {/* Card */}
                    <div className="relative flex flex-col items-center justify-center p-6 bg-[#1a1a3e]/50 backdrop-blur-sm border border-white/10 rounded-xl hover:border-purple-500/50 transition-all duration-300">
                      <tech.Icon 
                        size={48} 
                        style={{ color: tech.color }}
                        className="mb-3"
                      />
                      <span className="text-sm text-gray-300 font-medium text-center">{tech.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
