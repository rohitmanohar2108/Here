import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const socials = [
  {
    icon: <Github className="w-6 h-6" />,
    label: "GitHub",
    href: "https://github.com/rohitmanohar2108",
    color: "hover:text-purple-400"
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rohit-manohar-80b949207/",
    color: "hover:text-blue-400"
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    href: "mailto:your.email@example.com",
    color: "hover:text-pink-400"
  }
];

export default function Contact() {
  return (
    <div id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Let's Connect
        </h2>

        {/* Bordered Container with Image and Social Links */}
        <div className="bg-black/50 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/20">
          
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <img
              src="/rohit.jpg" // Directly referencing the image in the public folder
              alt="Rohit Manohar"
              className="w-32 h-32 rounded-full border-4 border-purple-400"
            />
          </div>
          
          {/* Social Links in a Horizontal Layout */}
          <div className="flex justify-center space-x mb-8">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center space-x-2 p-4 rounded-lg transition-colors ${social.color} hover:bg-white/5`}
              >
                <div className="transform transition-transform group-hover:scale-110">
                  {social.icon}
                </div>
                <span className="text-sm font-medium flex items-center gap-1">
                  {social.label}
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </span>
              </a>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center">
            <p className="text-gray-400 mb-6">
              Looking for opportunities to create impactful solutions and contribute to innovative projects.
            </p>
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:from-purple-600 hover:to-pink-600 transition-colors">
              View Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
