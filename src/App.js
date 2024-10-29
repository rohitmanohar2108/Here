import React, { Suspense } from 'react';
import Hero from './Components/Hero';

// Lazy load components for better mobile performance
const Skills = React.lazy(() => import('./Components/Skills'));
const Projects = React.lazy(() => import('./Components/Projects'));
const Experience = React.lazy(() => import('./Components/Experience'));
const Contact = React.lazy(() => import('./Components/Contact.js'));

// Loading component
const LoadingSection = () => (
  <div className="py-20 px-4">
    <div className="w-full h-64 bg-purple-900/10 rounded-xl loading-shimmer"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Suspense fallback={<LoadingSection />}>
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;