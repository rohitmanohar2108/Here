import React from 'react';
import { Code2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-slate-950 to-slate-900">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/0 via-purple-500/5 to-slate-950/0" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          <motion.div 
            className="absolute -inset-x-16 -inset-y-16 z-0"
            animate={{ 
              background: [
                'radial-gradient(circle, rgba(147,51,234,0.15) 0%, rgba(0,0,0,0) 70%)',
                'radial-gradient(circle, rgba(147,51,234,0.25) 0%, rgba(0,0,0,0) 70%)',
                'radial-gradient(circle, rgba(147,51,234,0.15) 0%, rgba(0,0,0,0) 70%)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          <div className="relative glass-card bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex flex-col items-center gap-4">
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
                <Sparkles className="w-12 h-12 text-purple-500/50" />
              </motion.div>
              <Code2 className="w-12 h-12 text-purple-400" />
            </motion.div>

            <div className="space-y-3">
              <motion.div
                className="h-1 w-32 rounded-full overflow-hidden bg-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
                  animate={{
                    width: ['0%', '100%'],
                    x: ['-100%', '0%']
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>

              <div className="flex justify-center gap-1">
                {[...Array(3)].map((_, i) => (
                  <motion.span
                    key={i}
                    className="inline-flex h-2 w-2 rounded-full bg-purple-400"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}