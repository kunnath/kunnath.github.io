'use client';

import React from "react";
import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => (
  <section id="about" className="max-w-6xl mx-auto py-20 px-4">
    <motion.div 
      className="grid md:grid-cols-2 gap-12 items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold mb-6 inline-block border-b-4 border-blue-600 pb-2">
          About Me
        </h2>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
          QA leader with 10+ years of experience across IoT, healthcare, fintech and e-commerce sectors. Proven expertise in designing robust test strategies for mobile (iOS/Android), web, and microservices in Agile environments. Skilled in test automation (Cypress, Playwright, Appium, Rest-Assured), CI/CD pipelines, exploratory testing, and implementing quality frameworks that boost delivery confidence. Adept at coaching teams, driving quality culture, and using metrics to measure impact.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
              🎓
            </div>
            <div className="w-full">
              <h3 className="font-semibold text-xl mb-4">Education</h3>
              <div className="space-y-4">
                <motion.div 
                  className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 className="font-medium text-blue-600">Leben In Deutschland Integration Course</h4>
                  <p className="text-sm text-gray-500">ZeBuS e.V.</p>
                  <p className="text-sm text-gray-500">June 2025 • Berlin, Germany</p>
                </motion.div>

                <motion.div 
                  className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="font-medium text-blue-600">Data Science</h4>
                  <p className="text-sm text-gray-500">WBS Bootcamp</p>
                  <p className="text-sm text-gray-500">March 2024 - July 2024 • Berlin, Germany</p>
                </motion.div>

                <motion.div 
                  className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="font-medium text-blue-600">General Business Management</h4>
                  <p className="text-sm text-gray-500">Indian Institute of Management</p>
                  <p className="text-sm text-gray-500">March 2019 - June 2020 • Kerala, India</p>
                </motion.div>

                <motion.div 
                  className="p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="font-medium text-blue-600">Computer Science and Engineering</h4>
                  <p className="text-sm text-gray-500">Kannur University</p>
                  <p className="text-sm text-gray-500">November 1998 - November 2002 • Kerala, India</p>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600">
              🌎
            </div>
            <div>
              <h3 className="font-semibold">Location</h3>
              <p className="text-gray-600 dark:text-gray-300">Berlin, Germany (Permanent Residence)</p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div 
        className="relative h-[500px] rounded-xl overflow-hidden shadow-xl"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 mix-blend-overlay z-10"></div>
        <Image
          src="/images/sreeimage.png"
          alt="Sreelesh Kunnath - QA Manager"
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </motion.div>
    </motion.div>
  </section>
);

export default About;
