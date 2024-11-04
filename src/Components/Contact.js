import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Stars,
  Star,
} from "lucide-react";

const socials = [
  {
    icon: <Github className="w-6 h-6" />,
    label: "GitHub",
    href: "https://github.com/rohitmanohar2108",
    color: "hover:text-purple-400",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rohit-manohar-80b949207/",
    color: "hover:text-blue-400",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    href: "mailto:your.email@example.com",
    color: "hover:text-pink-400",
  },
];

export default function Contact() {
  return (
    <div id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="relative inline-block group mb-16">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Let's Connect
          </h2>
          

          {/* Animated Icons */}
          <div className="absolute -inset-10 pointer-events-none">
            {/* Spinning Arrows */}

            <Sparkles className="absolute right-0 top-0 w-5 h-5 text-yellow-300 animate-sparkle mr-6" />
            <Stars className="absolute left-0 bottom-0 w-5 h-5 text-blue-300 animate-sparkle-delay ml-6" />

            {/* Orbital Circles */}
           
          </div>
        </div>

        {/* Bordered Container with Animated Border */}
        <div className="animated-border-box rounded-2xl p-1 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20 animate-pulse-slow" />
          <div className="relative bg-black bg-opacity-90 p-8 rounded-2xl">
            {/* Profile Image */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 "></div>
                <img
                  src="/rohit.jpg"
                  alt="Rohit Manohar"
                  className="relative w-52 h-52 rounded-full border-2 border-pink-500/20 group-hover:border-white transition-colors duration-300"
                />
              </div>
            </div>

            {/* Social Links with Icons Above Text */}
            <div className="flex justify-center space-x-3 mb-8">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex flex-col items-center px-5 rounded-lg transition-all duration-300 ${social.color} bg-pink-500/10 border border-pink-500/20 hover:bg-white/5 hover:scale-105 hover:border-pink-500/40`}
                >
                  <div className="mb-1 mt-3 transform transition-transform group-hover:scale-110 group-hover:rotate-6">
                    {social.icon}
                  </div>
                  <span className="text-sm font-medium items-center gap-2">
                    {social.label}
                    <ExternalLink className="inline-block w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1" />
                  </span>
                </a>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <p className="text-gray-400 mb-6">
                Looking for opportunities to create impactful solutions and
                contribute to innovative projects.
              </p>
              <button className="relative px-8 py-3 rounded-full overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 animate-gradient-xy"></div>
                <span className="relative text-white font-medium group-hover:scale-105 transition-transform duration-300 inline-block">
                  View Resume
                </span>
              </button>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} Rohit Manohar. All rights reserved.
        </p>
      </div>
    </div>
  );
}
