import React from "react";
import { Terminal, ChevronDown } from "lucide-react";
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import animationData from "../Animations/animation.json";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
  tap: {
    scale: 0.95,
  },
};

const glowVariants = {
  initial: {
    opacity: 0.5,
    scale: 1,
  },
  animate: {
    opacity: [0.5, 0.7, 0.5],
    scale: [1, 1.05, 1],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Animated background gradients */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 rounded-full filter blur-3xl"
          variants={glowVariants}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-pink-500/30 rounded-full filter blur-3xl"
          variants={glowVariants}
          initial="initial"
          animate="animate"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-purple-900/30 to-black/80 backdrop-blur-sm" />

      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 text-center mt-36"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-8" variants={itemVariants}>
          <div className="relative">
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.02, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <div className="relative mobile-glass rounded-lg p-6 sm:p-8 backdrop-blur-lg bg-black/50">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Terminal className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-6 text-purple-400" />
              </motion.div>

              <motion.div
                className="inline-flex mb-4 px-4 py-1 bg-purple-500/20 rounded-full text-purple-300 text-sm"
                variants={itemVariants}
              >
                Hello World, I'm
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400"
                variants={itemVariants}
              >
                Rohit Manohar
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl text-gray-300 mb-6"
                variants={itemVariants}
              >
                Computer Science undergrad @ NITK
              </motion.p>

              <motion.div
                className="flex justify-center gap-4"
                variants={itemVariants}
              >
                <motion.button
                  onClick={() => scrollToSection("projects")}
                  className="px-6 py-2 rounded-full bg-purple-500/20 text-pink-300 border border-purple-500/30 hover:bg-purple-500/30 transition-colors"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  View Projects
                </motion.button>

                <motion.button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-2 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30 hover:bg-pink-500/30 transition-colors"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Contact Me
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.button
          onClick={() => scrollToSection("skills")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-purple-400 hover:text-purple-300 transition-colors"
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>

        <motion.div
          className="w-full flex justify-center mt-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Lottie options={defaultOptions} height={500} width={500} />
        </motion.div>
      </motion.div>
    </div>
  );
}
