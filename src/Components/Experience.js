import React, { useEffect, useRef } from "react";
import { Calendar, Award } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: "Media Member",
    period: "2022 - 2026",
    company: "TEDxNITK",
    description: "Designed posters and promotional materials for TEDx events",
    achievements: [
      "Collaborated on media campaigns.",
      "Various theme revels",
      "100% positive feedback",
    ],
    logo: "/TEDxNITKSurathkal(white)300ppi.png", // Path to your logo image
  },
  // Add more experience entries as needed
];

export default function Experience() {
  const lineRef = useRef(null);
  const dotRefs = useRef([]);
  const cardRefs = useRef([]);

  useEffect(() => {
    // Animate the timeline line
    gsap.fromTo(
      lineRef.current,
      { height: "0%" },
      {
        height: "100%",
        ease: "power2.out",
        duration: 2.5,
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
        },
      }
    );

    // Animate each dot
    dotRefs.current.forEach((dot, index) => {
      gsap.fromTo(
        dot,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: dot,
            start: "top center+=100",
            end: "top center",
            scrub: true,
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    // Animate each card
    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Experience
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div
            ref={lineRef}
            className="absolute -left-3 md:left-1/2 transform lg:ml-[45%] md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"
          />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)} // Add reference for each card
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div
                  ref={(el) => (dotRefs.current[index] = el)} // Add reference for each dot
                  className="absolute left-0 md:left-1/3 lg:ml-[62.8%] transform -translate-x-5 w-4 h-4 rounded-full bg-purple-500 border-4 border-black"
                />
                
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  } md:pr-16 md:pl-16`}
                >
                  <div className="bg-black/50 p-6 rounded-xl backdrop-blur-sm border border-purple-500/20 transform transition-transform hover:-translate-y-1 hover:border-purple-500/40">
                    {/* Logo at the top of the card */}
                    <div className="flex justify-center mb-4">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-auto h-20 object-contain mr-7"  // Adjust logo size here
                      />
                    </div>
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
    </div>
  );
}
