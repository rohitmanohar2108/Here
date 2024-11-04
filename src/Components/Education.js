import React, { useEffect, useRef } from "react";
import { Calendar, Award, Sparkles, Cog } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const education = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    period: "2022-2026",
    institution: "National Institute of Technology Karnataka, Surathkal",
    logo: "nitklogo.png",
    achievements: ["Member of TEDx NITK Surathkal"],
  },
  {
    degree: "Secondary Education",
    period: "2020-2022",
    institution: "Dharampeth M.P. Deo Memorial Science College, Nagpur",
    logo: "https://www.dharampethscience.com/wp-content/uploads/2022/03/dp-logo.png",
    achievements: [
      "Participated in SOF International Mathematics 2022 Olympiad and got School Rank-1",
      "Participated in SOF International Science Olympiad 2022 and got School Rank-1",
      "Participated in SOF International English Olympiad 2022 and got School Rank-5",
    ],
  },
];

export default function Education() {
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
          duration: 0.5,
          ease: "back.out(1.7)",
          duration: 0.8,
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

    // Floating icons animation
    gsap.to(".floating-icon", {
      rotation: 360,
      duration: 8,
      repeat: -1,
      ease: "linear",
    });

    gsap.fromTo(
      ".floating-icon",
      { scale: 1, opacity: 0.5 },
      {
        scale: 1.2,
        opacity: 1,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <div className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Education
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div
            ref={lineRef}
            className="absolute -left-3 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 lg:ml-[45%] bg-gradient-to-b from-purple-500 to-pink-500"
          />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)} // Add reference for each card
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div
                  ref={(el) => (dotRefs.current[index] = el)}
                  className="absolute left-0 md:left-1/3 transform -translate-x-5 w-4 h-4 lg:ml-[62.8%] rounded-full bg-purple-500 border-4 border-black"
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
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        className="w-24 h-auto object-contain"
                      />
                    </div>
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

      {/* Floating Icons Animation */}
      <div className="flex justify-center gap-4 mt-9">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="relative floating-icon">
            <Sparkles className="w-7 h-7 text-purple-500/50 absolute inset-0" />
            <Cog className="w-7 h-7 text-pink-400" />
          </div>
        ))}
      </div>
    </div>
  );
}
