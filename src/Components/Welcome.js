import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Rocket, Sparkles, Terminal } from 'lucide-react';

export default function Welcome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700/70 via-black to-rose-700/50 flex items-center justify-center p-4  overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-3xl w-full"
      >
        {/* Floating icons */}
        <div className="absolute w-full h-full">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 0.5, x: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute left-0 top-0"
          >
            <Code2 className="w-8 h-8 text-cyan-400/40" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 0.5, y: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="absolute right-10 bottom-0"
          >
            <Terminal className="w-8 h-8 text-purple-400/40" />
          </motion.div>
        </div>

        <div className="text-center space-y-6">
          {/* Main icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            className="inline-block mb-2"
          >
            <div className="relative">
              <Rocket className="w-16 h-16 text-cyan-500" />
              <motion.div
                className="absolute inset-0"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full border-2 border-dashed border-cyan-400/30" />
              </motion.div>
            </div>
          </motion.div>

          {/* Main heading with gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r  from-purple-400 to-pink-400 text-transparent bg-clip-text">
                Hello World
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold px-6 py-2 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30 hover:bg-pink-500/30 transition-colors touch-highlight">
              Welcome to my portfolio
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Crafting digital experiences with code, creativity, and passion. 
            Transforming ideas into elegant solutions.
          </motion.p>

          {/* Animated sparkles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex justify-center gap-4"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.2,
                  repeat: Infinity,
                }}
              >
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}