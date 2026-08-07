import React from 'react';

const experiences = [
  {
    role: "Data Visualization Intern",
    company: "Infosys",
    date: "Nov 2024 \u2013 Jan 2025",
    bullets: [
      "Analyzed 10,000+ records and built interactive Power BI dashboards for business performance tracking.",
      "Created 5+ KPI dashboards and predictive BI reports, reducing manual reporting time by 40%."
    ]
  },
  {
    role: "ServiceNow Virtual Intern",
    company: "ServiceNow",
    date: "Jul 2026 \u2013 Aug 2026",
    bullets: [
      "Completed a 1-month ServiceNow virtual internship in administration, Flow Designer, and automation.",
      "Configured workflows across 3 modules, and explored ATF, reporting, and platform administration concepts."
    ]
  }
];

export const ExperienceSection: React.FC = () => {
  return (
    <div className="w-full max-w-[1000px] mx-auto py-20 px-6 font-['Inter',sans-serif]">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-[#111]">Experience</h2>
      
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-[7px] top-4 bottom-4 w-px bg-[#3b82f6] md:left-[11px]" />
        
        <div className="flex flex-col gap-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-start gap-6 md:gap-12 group">
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 w-[15px] h-[15px] bg-[#3b82f6] rounded-full border-[3px] border-white shadow-sm md:w-[23px] md:h-[23px] md:-left-[0.5px] z-10 transition-transform group-hover:scale-125" />
              
              {/* Card content */}
              <div className="ml-8 md:ml-12 bg-[#f8f9fa] rounded-3xl p-8 md:p-10 w-full hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-2">
                  <div className="flex items-center flex-wrap gap-2 text-xl md:text-2xl">
                    <span className="font-semibold text-gray-900">{exp.role}</span>
                    <span className="text-gray-400 font-medium">&middot;</span>
                    <span className="text-gray-500 font-medium">{exp.company}</span>
                  </div>
                  <span className="text-sm md:text-base text-gray-500 font-medium whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>
                
                <ul className="flex flex-col gap-4">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-600 text-sm md:text-base leading-relaxed">
                      <svg className="w-[10px] h-[10px] text-[#3b82f6] mt-[6px] shrink-0" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M24 12l-24 12v-24z" />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
