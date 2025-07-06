'use client';

import React from "react";


const Skills = () => {
  const skills = {
    'Test Automation': ['Playwright', 'Cypress', 'Selenium', 'WebdriverIO', 'Robot Framework', 'Appium'],
    'API & Performance': ['Rest Assured', 'Postman', 'Karate', 'Gatling', 'JMeter', 'Blazemeter'],
    'AI/ML Testing': ['N8N', 'AI-Agent-Framework', 'MCP Server', 'NLP Validation', 'Data Pipelines', 'RAG'],
    'Frameworks & Tools': ['TestNG', 'Cucumber', 'Mocha', 'Jasmine', 'Page Object Model'],
    'DevOps & Cloud': ['Jenkins', 'GitHub Actions', 'GitLab', 'Docker', 'Kubernetes', 'AWS', 'Terraform'],
    'Languages & Tech': ['Java', 'Python', 'TypeScript', 'JavaScript', 'Vue.js', 'React.js']
  };

  return (
    <section id="skills" className="max-w-6xl mx-auto py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-12 text-center">
        <span className="inline-block border-b-4 border-blue-600 pb-2">Skills & Technologies</span>
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-white dark:bg-black p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold mb-4 text-blue-600">{category}</h3>
            <ul className="space-y-2">
              {items.map(skill => (
                <li key={skill} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
