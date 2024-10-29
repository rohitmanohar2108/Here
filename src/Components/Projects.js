import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const projects = [
  {
    title: "AI Code Assistant",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb",
    tech: "React • TensorFlow.js • WebGL",
    description: "Real-time code analysis and suggestions powered by AI",
    challenges: "Implementing efficient ML models in browser",
    achievements: "100k+ active users, Featured in Dev Community"
  },
  {
    title: "Cloud Fleet Manager",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    tech: "Next.js • AWS • GraphQL",
    description: "Enterprise cloud resource management dashboard",
    challenges: "Real-time monitoring of thousands of instances",
    achievements: "Reduced cloud costs by 45% for clients"
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
                <p className="text-gray-300 mb-4">{project.tech}</p>
                <div className="flex space-x-4 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <button
                    onClick={() => setActiveModal(index)}
                    className="flex items-center text-purple-400 hover:text-purple-300"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" /> View Details
                  </button>
                  <a href="#" className="flex items-center text-purple-400 hover:text-purple-300">
                    <Github className="w-5 h-5 mr-2" /> View Code
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
    </div>
  );
}
