import React, { Suspense, useEffect, useState } from 'react';
import Hero from './Components/Hero';
import Loader from './Components/Loader.js';


// Lazy load components for better mobile performance
const Skills = React.lazy(() => import('./Components/Skills'));
const Education = React.lazy(() => import('./Components/Education.js'));
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
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {loading ? <Loader /> : <Hero />}
      <Suspense fallback={<LoadingSection />}>
        <Skills />
        <Education />
        <Experience />
        <Projects /> 
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;