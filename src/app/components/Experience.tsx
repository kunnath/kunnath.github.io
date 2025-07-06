'use client';

import React from "react";


const Experience = () => (
  <section id="experience" className="max-w-6xl mx-auto py-20 px-4 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">
        <span className="inline-block border-b-4 border-blue-600 pb-2">Work Experience</span>
      </h2>
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>
        <ul className="space-y-12 relative">
          {/* Replace with your experience from kunnath_Profile25.pdf */}
          <li className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
            <div className="ml-auto mr-[calc(50%+2rem)] md:mr-[calc(50%+4rem)] p-6 bg-white dark:bg-black rounded-lg shadow-lg">
              <div className="font-semibold text-xl mb-2">Freelancer</div>
              <div className="text-blue-600 font-medium mb-2">Dinexora</div>
              <div className="text-sm text-gray-500 mb-4">Feb 2025 – Present</div>
              <div className="text-base text-gray-600 dark:text-gray-300">
                • Offer freelance QA consulting services with expertise in test automation tools, agile delivery, and enterprise-level digital transformation.<br/>
                • Contribute to the EU-India Business Bridge, providing strategic guidance for business expansion.
              </div>
            </div>
          </li>
          <li className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
            <div className="mr-auto ml-[calc(50%+2rem)] md:ml-[calc(50%+4rem)] p-6 bg-white dark:bg-black rounded-lg shadow-lg">
              <div className="font-semibold text-xl mb-2">Senior Quality Assurance Manager</div>
              <div className="text-blue-600 font-medium mb-2">ExperienceOne AG</div>
              <div className="text-sm text-gray-500 mb-4">Apr 2022 – Jan 2024</div>
              <div className="text-base text-gray-600 dark:text-gray-300">
                • Boosted test automation efficiency by 78% for Mercedes-Benz using Playwright and Appium.<br/>
                • Defined quality gates and RCA processes for regulatory compliance.<br/>
                • Led performance testing initiatives and promoted quality ownership.
              </div>
            </div>
          </li>
          <li className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
            <div className="ml-auto mr-[calc(50%+2rem)] md:mr-[calc(50%+4rem)] p-6 bg-white dark:bg-black rounded-lg shadow-lg">
              <div className="font-semibold text-xl mb-2">Quality Assurance Manager</div>
              <div className="text-blue-600 font-medium mb-2">Smartfrog GmbH</div>
              <div className="text-sm text-gray-500 mb-4">Jul 2019 – Oct 2020</div>
              <div className="text-base text-gray-600 dark:text-gray-300">
                • Led test strategy and automation for smart home products.<br/>
                • Built ISO-compliant test cases and improved bug detection by 25%.<br/>
                • Integrated automated tests into CI/CD pipelines.
              </div>
            </div>
          </li>
          <li className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>
            <div className="mr-auto ml-[calc(50%+2rem)] md:ml-[calc(50%+4rem)] p-6 bg-white dark:bg-black rounded-lg shadow-lg">
              <div className="font-semibold text-xl mb-2">Technical Architect</div>
              <div className="text-blue-600 font-medium mb-2">Quest Global Engineering GmbH</div>
              <div className="text-sm text-gray-500 mb-4">Jul 2017 – Jul 2019</div>
              <div className="text-base text-gray-600 dark:text-gray-300">
                • Implemented test architectures for GE Healthcare's Imaging Protocol Manager.<br/>
                • Applied FMEA and improved testing efficiency by 35%.<br/>
                • Led automation teams and fostered collaborative environment.
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Experience;
