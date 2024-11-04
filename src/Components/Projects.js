import React, { useState } from 'react';
import { ExternalLink, Github, X, Link,  Sparkles, LoaderPinwheel } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "FilmNinja",
    image: "https://do6gp1uxl3luu.cloudfront.net/projects/netflixProject.png",
    tech: "React • Javascript • TailwindCSS • OpenAI Gpt Api • TMDB Api • React Redux ",
    description: "Built a responsive movie browsing app with real-time data and smart suggestions, featuring optimized search and secure user authentication.",
    challenges: "Fetching various api's both OpenAi ans TMDB and also managing states in Redux Store",
    achievements: "100k+ active users, Featured in Dev Community",
    githubLink: "https://github.com/rohitmanohar2108/FilmNinja",
    
  },
  {
    title: "Operating System Simulator",
    image: "./operatingsystem.jpg",
    tech: "HTML • CSS • NodeJS • JQuery ",
    description: "Developed a web app to simulate and visualize FIFO, LRU, and Optimal page replacement algorithms, enhancing understanding of memory management and system performance optimization.",
    challenges: "Real-time monitoring of thousands of instances",
    achievements: "Reduced algo costs by 45% for clients",
    githubLink: "https://github.com/rohitmanohar2108/OS-LAB-PROJECT"
  },
  {
    title: "Airlines Reservation System",
    image: "./Airline.jpg",
    tech: "React • JavaScript • MySql ",
    description: "Effective airline management relies on online booking systems to enhance customer experience, streamline operations, and boost profitability. These systems improve reservations, reduce errors, and provide valuable data for tailored services and marketing.",
    challenges: "Real-time monitoring of Flights and Tickets",
    achievements: "Reduced variation of data",
    githubLink: "https://github.com/user/project-three"
  },
  {
    title: "PortfolioWeb",
    image: "./Portfolio.jpg",
    tech: "React• Javascript • TailwindCSS  ",
    description: "Created an interactive portfolio website that highlights skills and projects with modern design and animations. Included a contact form and social media links to facilitate user engagement and connections.",
    githubLink: "https://github.com/rohitmanohar2108/Portfolioweb",
    liveLink:"https://here-one.vercel.app/"
  }
];

export default function Projects() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div id="projects" className="py-20 bg-black/30">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end transform transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-white mb-4">{project.tech}</p>
                <div className="flex space-x-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <button
                    onClick={() => setActiveModal(index)}
                    className="flex items-center text-purple-400 hover:text-purple-300"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" /> View Details
                  </button>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center text-purple-400 hover:text-purple-300"
                  >
                    <Github className="w-5 h-5 mr-2" /> View Code
                  </a>
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center text-purple-400 hover:text-purple-300"
                  >
                    <Link className="w-5 h-5 mr-2" /> Link
                  </a>
                </div>
              </div>

              {/* Modal */}
              {activeModal === index && (
                <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-50">
                  <div className="relative bg-gradient-to-br from-purple-900/50 to-black rounded-xl max-w-2xl w-full p-8 backdrop-blur-xl">
                    <button
                      onClick={() => setActiveModal(null)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-white"
                    >
                      <X className="w-6 h-6" />
                    </button>
                    <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                    <p className="text-gray-300 mb-6">{project.description}</p>
                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-purple-400">Technical Challenges</h4>
                        <p className="text-gray-300">{project.challenges}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-2 text-purple-400">Key Achievements</h4>
                        <p className="text-gray-300">{project.achievements}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
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
               <Sparkles className="w-7 h-7  text-white/20" />
             </motion.div>
             <LoaderPinwheel className="w-7 h-7 text-purple-600" />
           </motion.div>
               
            ))}
          </motion.div>
    </div>
  );
}
