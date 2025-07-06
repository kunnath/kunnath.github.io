'use client';

import React from "react";

import Image from 'next/image';

const Projects = () => (
  <section id="projects" className="max-w-6xl mx-auto py-20 px-4">
    <h2 className="text-3xl font-bold mb-12 text-center">
      <span className="inline-block border-b-4 border-blue-600 pb-2">Featured Projects</span>
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">          {/* Projects from kunnath_Profile25.pdf */}
      <div className="group relative bg-white dark:bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative overflow-hidden p-4">
          <Image
            src="/images/pro1.png"
            alt="Cleaning Service Management System"
            width={600}
            height={338}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-xl mb-2 group-hover:text-blue-600 transition-colors">
            Cleaning Service Management System
          </h3>
          <p className="text-sm text-gray-500 mb-4">2025</p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            A comprehensive platform revolutionizing cleaning business management. Features include smart scheduling, real-time tracking, automated billing, client portal, and AI-powered quality control. Integrates customer feedback, staff management, and business analytics for data-driven growth.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full">Node.js</span>
            <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full">Vue.js</span>
            <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full">RESTful APIs</span>
            <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full">MongoDB</span>
            <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full">AI/ML</span>
          </div>
          <div className="flex gap-3">
            <a href="https://medium.com/@qakunnath/how-to-grow-your-cleaning-business-in-2025-with-a-smart-all-in-one-platform-d6cdca0e9a03" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
              Read Article
            </a>
          </div>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <a href="https://github.com/kunnath/CleaningServiceManagementSystem" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-black rounded-full shadow-lg hover:scale-110 transition-transform">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.332-1.755-1.332-1.755-1.087-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
          </a>
        </div>
      </div>

      <div className="group relative bg-white dark:bg-black rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="aspect-video bg-gray-100 dark:bg-gray-800 relative overflow-hidden p-4">
          <Image
            src="/images/pro2.png"
            alt="Real-Time EEG Brainwave Monitor"
            width={600}
            height={338}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-xl mb-2 group-hover:text-blue-600 transition-colors">
            Real-Time EEG Brainwave Monitor
          </h3>
          <p className="text-sm text-gray-500 mb-4">2025</p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Advanced brain-computer interface platform for real-time EEG analysis and cognitive monitoring. Features include emotional state detection, focus tracking, and machine learning-based pattern recognition. Enables research in neurofeedback and cognitive enhancement.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full">Python</span>
            <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full">TensorFlow</span>
            <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full">Signal Processing</span>
            <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full">Neural Networks</span>
            <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full">Real-time Data</span>
          </div>
          <div className="flex gap-3">
            <a href="https://medium.com/@qakunnath/real-time-eeg-brainwave-monitor-a-scalable-interface-for-brain-computer-interaction-and-cognitive-f5648c5e62b5" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="text-sm text-blue-600 hover:text-blue-700 flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
              </svg>
              Read Article
            </a>
          </div>
        </div>
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <a href="https://github.com/kunnath/Emoscan" target="_blank" rel="noopener noreferrer" className="p-2 bg-white dark:bg-black rounded-full shadow-lg hover:scale-110 transition-transform">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.386-1.332-1.755-1.332-1.755-1.087-.744.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
