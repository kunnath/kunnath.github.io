'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-black">
      <motion.div
        className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-8 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center md:text-left">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            variants={itemVariants}
          >
            Hi, I&apos;m Sreelesh Kunnath
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8"
            variants={itemVariants}
          >
            Quality Assurance Manager | Expert in Automation & AI Solutions
          </motion.p>
          <motion.div 
            className="flex gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <a 
              href="#contact" 
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              View Projects
            </a>
          </motion.div>
        </div>
        <motion.div 
          className="relative"
          variants={itemVariants}
        >
          <div className="w-64 h-64 mx-auto rounded-full overflow-hidden shadow-xl ring-4 ring-blue-100 dark:ring-blue-900">
            <Image
              src="/images/sree.jpeg"
              alt="Sreelesh Kunnath"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
