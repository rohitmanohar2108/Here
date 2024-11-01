import React from "react";
import { Calendar, Award ,  Sparkles, Cog} from "lucide-react";

import { motion } from "framer-motion";

const education = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "2022-2026",
    institution: " National Institute of Technology Karnataka, Surathkal",
    achievements: ["Member of Tedx Nitk Surathkal"],
  },
  {
    degree: "Secondary Education",
    period: "2020-2022",
    institution: "  Dharampeth M.P. Deo Memorial Science College, Nagpur",
    achievements: [
      "Participated in SOF International Mathematics 2022 Olympiad and got School Rank-1",
      "Participated in SOF International Science Olympiad 2022 and got School Rank-1",
      "Participated in SOF International English Olympiad 2022 and got School Rank-5",
    ],
  },
];

export default function Education() {
  return (
    <div className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Education
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute -left-3 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500" />

          <div className="space-y-12">
            {education &&
              education.map((edu, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/3 transform -translate-x-5 w-4 h-4 rounded-full bg-purple-500 border-4 border-black" />

                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    } md:pr-16 md:pl-16`}
                  >
                    <div className="bg-black/50 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20 transform transition-transform hover:-translate-y-1 hover:border-purple-500/40">
                      <div className="flex items-center gap-2 text-purple-400 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                      <p className="text-purple-300 mb-3">{edu.institution}</p>
                      <div className="space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Award className="w-4 h-4 text-purple-400" />
                            <span className="text-sm text-gray-300">
                              {achievement}
                            </span>
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="flex justify-center gap-4 mt-9"
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            className="relative"
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              className="absolute inset-0"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-7 h-7 text-purple-500/50" />
            </motion.div>
            <Cog className="w-7 h-7 text-pink-400" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
