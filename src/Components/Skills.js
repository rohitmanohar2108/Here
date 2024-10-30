import React from 'react';
import { Brain, Flame, Database, Code2, Globe, Cpu } from 'lucide-react';

const skills = [
  {
    icon: <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 " />,
    title: "Frontend",
    desc: "React • Next.js • GSAP",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Database className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />,
    title: "Backend",
    desc: "Node.js • Firebase • MongoDB",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 " />,
    title: "AI/ML",
    desc: "TensorFlow • PyTorch",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />,
    title: "Cloud",
    desc: "AWS • Docker",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500" />,
    title: "Systems",
    desc: "Architecture • Performance",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: <Flame className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-500" />,
    title: "DevOps",
    desc: "CI/CD • Testing",
    color: "from-indigo-500 to-purple-500"
  }
];

export default function Skills() {
  return (
    <div id="skills" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Technical Arsenal
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative touch-highlight"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r opacity-75 blur-sm transition duration-300 group-hover:opacity-100 rounded-xl"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                  '--tw-gradient-from': skill.color.split(' ')[0].split('-')[1],
                  '--tw-gradient-to': skill.color.split(' ')[2]
                }}
              ></div>
              <div className="relative p-4 sm:p-6 mobile-glass rounded-xl transition-transform duration-300 group-hover:-translate-y-1">
                <div className={`text-transparent bg-gradient-to-r ${skill.color} bg-clip-text mb-3 sm:mb-4`}>
                  {skill.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{skill.title}</h3>
                <p className="text-sm sm:text-base text-gray-400">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}