import React from "react";
import { Terminal, ChevronDown } from "lucide-react";
import Lottie from "react-lottie"; // Make sure you have imported the Lottie component
import { motion } from "framer-motion"; // For motion animation
import animationData from "../Animations/animation.json";

export default function Hero() {
  const scrollToSkills = () => {
    document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-grid-pattern">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-purple-900/30 to-black/80 backdrop-blur-sm" />

      {/* Mobile-optimized content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="mb-8">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-glow"></div>
            <div className="relative mobile-glass rounded-lg p-6 sm:p-8">
              <Terminal className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 text-purple-400" />
              <div className="inline-flex mb-4 px-4 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm touch-highlight">
                Hello World, I'm
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                Rohit Manohar
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-6">
                Computer Science undergrad @ NITK
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={scrollToProjects}
                  className="px-6 py-2 rounded-full bg-purple-500/20 text-pink-300 border border-purple-500/30 hover:bg-purple-500/30 transition-colors touch-highlight"
                >
                  View Projects
                </button>
                <button
                  onClick={scrollToContact}
                  className="px-6 py-2 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30 hover:bg-pink-500/30 transition-colors touch-highlight"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-friendly scroll indicator */}
        <button
          onClick={scrollToSkills}
          className="absolute bottom left-1/2 -translate-x-1/2 text-purple-400 hover:text-purple-300 transition-colors touch-highlight"
          aria-label="Scroll to skills"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </button>
        <motion.div className="w-full flex justify-center mt-40">
          <Lottie options={defaultOptions} height={500} width={500} />
        </motion.div>
      </div>

      {/* Mobile-optimized background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/30 rounded-full filter blur-3xl"></div>
      </div>
    </div>
  );
}
