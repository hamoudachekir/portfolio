import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Overview', href: '#overview' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Career', href: '#career' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      const navbarHeight = 80;
      const targetPosition = targetElement.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a1f]/80 backdrop-blur-md shadow-lg border-b border-white/10'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            whileHover={{ scale: 1.05, rotate: [0, -2, 2, -2, 0] }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
          >
            &lt;Hamouda /&gt;
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-[#0a0a1f]/95 backdrop-blur-md border-b border-white/10"
        >
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item, idx) => (
              <motion.a
                key={idx}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

