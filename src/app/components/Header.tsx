'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const fadeIn = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <header className="py-6 px-4 backdrop-blur-md bg-white/80 dark:bg-black/80 sticky top-0 z-10">
      <nav className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.h1 
          className="text-xl font-bold"
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          Sreelesh Kunnath
        </motion.h1>
        <motion.nav 
          className="hidden md:flex gap-8 text-base font-medium"
          {...fadeIn}
        >
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="#experience" className="hover:text-blue-600 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          <a href="#skills" className="hover:text-blue-600 transition-colors">Skills</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
        </motion.nav>
        <motion.div 
          className="flex gap-4"
          {...fadeIn}
        >
          <a href="https://github.com/kunnath" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-600 transition-colors">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/kunnathsree" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-blue-600 transition-colors">
            <FaLinkedin />
          </a>
          <a href="mailto:aikunnath@gmail.com" className="text-xl hover:text-blue-600 transition-colors">
            <FaEnvelope />
          </a>
        </motion.div>
      </nav>
    </header>
  );
};

export default Header;
