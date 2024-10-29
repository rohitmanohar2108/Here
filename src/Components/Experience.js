import React from 'react';
import { Calendar, Award } from 'lucide-react';

const experiences = [
  {
    title: "TEDx Lead Organizer",
    period: "2022 - 2023",
    company: "TEDxNITK",
    description: "Led a team of 50+ volunteers, organized successful events with 1000+ attendees",
    achievements: ["Record ticket sales", "5 international speakers", "100% positive feedback"]
  },
  {
    title: "Research Intern",
    period: "2023",
    company: "AI Research Lab",
    description: "Developed novel ML algorithms for real-time object detection",
    achievements: ["Published in top conference", "Reduced inference time by 40%"]
  }
];

export default function Experience() {
  return (
    <div className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Experience
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/3 transform -translate-x-1/2 w-4 h-4 rounded-full bg-purple-500 border-4 border-black" />
                
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} md:pr-16 md:pl-16`}>
                  <div className="bg-black/50 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20 transform transition-transform hover:-translate-y-1 hover:border-purple-500/40">
                    <div className="flex items-center gap-2 text-purple-400 mb-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-purple-300 mb-3">{exp.company}</p>
                    <p className="text-gray-400 mb-4">{exp.description}</p>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-purple-400" />
                          <span className="text-sm text-gray-300">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
