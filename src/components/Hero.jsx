import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, MousePointer2 } from 'lucide-react';

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [0, 1], [8, -8]);
  const rotateY = useTransform(mouseX, [0, 1], [-12, 12]);

  const smoothRotateX = useSpring(rotateX, { stiffness: 120, damping: 20 });
  const smoothRotateY = useSpring(rotateY, { stiffness: 120, damping: 20 });

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0a1f] via-[#1a1a3e] to-[#0a0a1f]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left: Text content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <span className="px-6 py-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium backdrop-blur-sm">
                👋 Hi, I'm
              </span>
            </motion.div>

            {/* Name with glowing effect */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold"
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                Hamouda Chekir
              </span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300"
            >
              Full-Stack Developer & DevOps Engineer
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg lg:text-xl text-gray-400 max-w-xl lg:max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              Experienced in Laravel, Django, React, Node.js, and API development. Strong background in Docker, CI/CD pipelines, cloud fundamentals (AWS), database design (PostgreSQL, MongoDB), and deploying secure, scalable applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center pt-4"
            >
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/50 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Mail size={20} />
                  Get In Touch
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              <a
                href="#projects"
                className="px-8 py-4 border-2 border-purple-500/50 rounded-lg font-semibold text-white hover:bg-purple-500/10 transition-all duration-300 hover:border-purple-400 hover:-translate-y-1"
              >
                View Projects
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex justify-center lg:justify-start gap-4 pt-6"
            >
              {[
                { icon: Github, href: 'https://github.com/hamoudachekir', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/hamouda-chekir-5053572b4', label: 'LinkedIn' },
                { icon: Mail, href: 'mailto:hamoudachkir@yahoo.fr ', label: 'Email' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={22} className="text-gray-300" />
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="hidden lg:block pt-10"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center gap-3 text-gray-400"
              >
                <ArrowDown size={24} className="text-purple-400" />
                <span className="text-sm">Scroll to explore my work</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right: 3D laptop with VS Code mockup */}
          <motion.div
            style={{ rotateX: smoothRotateX, rotateY: smoothRotateY }}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative mx-auto w-full max-w-md lg:max-w-lg perspective-1000"
          >
            {/* Glow behind laptop */}
            <div className="absolute -inset-10 bg-gradient-to-r from-purple-500/30 via-blue-500/30 to-pink-500/30 rounded-[3rem] blur-3xl opacity-60"></div>

            {/* Laptop body */}
            <div className="relative rounded-[2rem] bg-gradient-to-br from-[#111827] to-[#020617] border border-white/10 shadow-2xl overflow-hidden">
              {/* Laptop top border */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/5 backdrop-blur-md">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
                </div>
                <span className="text-xs text-gray-400">VS Code — portfolio-hamouda</span>
                <span className="w-10" />
              </div>

              {/* Screen content */}
              <div className="relative flex">
                {/* Sidebar */}
                <div className="w-14 bg-[#020617] border-r border-white/5 flex flex-col items-center py-4 gap-4 text-gray-500 text-xs">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white text-lg font-bold">
                    {'<>'}
                  </div>
                  <div className="w-6 h-6 rounded-lg bg-white/5" />
                  <div className="w-6 h-6 rounded-lg bg-white/5" />
                  <div className="w-6 h-6 rounded-lg bg-purple-500/40" />
                  <div className="w-6 h-6 rounded-lg bg-white/5" />
                </div>

                {/* File tree + editor */}
                <div className="flex-1 bg-[#020617]/80 p-4 grid grid-cols-12 gap-4">
                  {/* File tree */}
                  <div className="col-span-4 space-y-2 text-[10px] text-gray-400">
                    <div className="text-[11px] font-semibold text-gray-300 mb-1">EXPLORER</div>
                    <div className="space-y-1">
                      <p className="text-purple-400 font-medium">src</p>
                      <p className="ml-3 text-gray-300">▶ components</p>
                      <p className="ml-6 text-purple-300">Hero.jsx</p>
                      <p className="ml-6 text-gray-400">Projects.jsx</p>
                      <p className="ml-6 text-gray-400">Contact.jsx</p>
                      <p className="ml-3 text-gray-400">App.jsx</p>
                    </div>
                  </div>

                  {/* Editor area */}
                  <div className="col-span-8">
                    <div className="flex items-center gap-2 text-[11px] text-gray-400 mb-2 border-b border-white/5 pb-2">
                      <span className="px-3 py-1 rounded-t-lg bg-[#020617] border border-white/10 border-b-0 text-purple-300 text-xs">
                        Hero.jsx
                      </span>
                      <span className="px-3 py-1 rounded-lg bg-white/5 text-xs">Projects.jsx</span>
                    </div>

                    <div className="relative rounded-xl bg-gradient-to-br from-[#020617] via-[#020617] to-[#030712] border border-white/5 p-4 overflow-hidden">
                      <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1 text-[11px] font-mono">
                        <div className="text-gray-600 text-right select-none">
                          <p>1</p>
                          <p>2</p>
                          <p>3</p>
                          <p>4</p>
                          <p>5</p>
                          <p>6</p>
                          <p>7</p>
                        </div>
                        <div className="space-y-0.5">
                          <p><span className="text-purple-400">const</span> <span className="text-blue-300">developer</span> <span className="text-purple-400">=</span> {'{'}</p>
                          <p className="ml-4"><span className="text-emerald-400">name</span>: <span className="text-amber-300">'Hamouda Chekir'</span>,</p>
                          <p className="ml-4"><span className="text-emerald-400">role</span>: <span className="text-amber-300">'Full-Stack & DevOps'</span>,</p>
                          <p className="ml-4"><span className="text-emerald-400">stack</span>: [<span className="text-sky-400">'React'</span>, <span className="text-sky-400">'Node.js'</span>, <span className="text-sky-400">'Kubernetes'</span>],</p>
                          <p className="ml-4"><span className="text-emerald-400">location</span>: <span className="text-amber-300">'France'</span></p>
                          <p>{'}'}</p>
                        </div>
                      </div>

                      {/* Animated cursor */}
                      <motion.div
                        className="absolute w-6 h-6 rounded-full bg-white/80 shadow-lg flex items-center justify-center"
                        animate={{
                          x: [40, 120, 80],
                          y: [60, 40, 90],
                        }}
                        transition={{
                          duration: 6,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                      >
                        <MousePointer2 size={14} className="text-purple-600" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Laptop base / keyboard */}
            <div className="mt-4 h-10 rounded-3xl bg-gradient-to-b from-[#020617] to-black border-t border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] flex items-center justify-center">
              <div className="w-24 h-1.5 rounded-full bg-white/10"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
