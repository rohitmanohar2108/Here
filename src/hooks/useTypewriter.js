import { useState, useEffect } from 'react';

export function useTypewriter(words: string[], typingSpeed = 150, deletingSpeed = 100, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const animate = () => {
      const currentWord = words[currentIndex];
      
      if (isDeleting) {
        // Deleting text
        if (displayText.length > 0) {
          timeout = setTimeout(() => {
            setDisplayText(prev => prev.slice(0, -1));
          }, deletingSpeed);
        } else {
          setIsDeleting(false);
          setCurrentIndex(prev => (prev + 1) % words.length);
        }
      } else {
        // Typing text
        if (displayText.length < currentWord.length) {
          timeout = setTimeout(() => {
            setDisplayText(currentWord.slice(0, displayText.length + 1));
          }, typingSpeed);
        } else {
          // Pause before deleting
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseTime);
        }
      }
    };

    animate();

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
}