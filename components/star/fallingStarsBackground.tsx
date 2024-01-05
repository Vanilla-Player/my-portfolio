"use client"
import React, { useEffect, useRef } from 'react';
import { start } from 'repl';


const FallingStarsBackground: React.FC = () => {
  const starsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const starsContainer = starsContainerRef.current;
    const numberOfStars = 50; // Number of stars

    const createStar = (): HTMLDivElement => {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * window.innerWidth}px`;
      star.style.animationDuration = `${1 + Math.random() * 3}s`; // Vary animation speed
      starsContainer!.appendChild(star);
      return star;
    };

    const createStars = () => {
      for (let i = 0; i < numberOfStars; i++) {
        createStar();
      }
    };

    createStars();

    const handleResize = () =>{
        const stars = starsContainerRef.current?.querySelectorAll('.star');
        if(stars){
            const startsArray = Array.from(stars)
            startsArray.forEach((star: any) => {
                star.style.left = `${Math.random() * window.innerWidth}px`;
              });
        }
    }
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };

  }, []);

  return (
    <div
      ref={starsContainerRef}
      className="absolute top-0 left-0 pointer-events-none w-full h-full overflow-hidden"
    >

    </div>
  );
};

export default FallingStarsBackground;
