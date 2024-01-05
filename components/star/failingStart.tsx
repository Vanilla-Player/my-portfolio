"use client"
import React, { useEffect, useRef } from 'react';

const FallingStar: React.FC = () => {
  const starRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const star = starRef.current;

    const animation = () => {
      let yPos = -100; // Start position
      let xPos = 0; // Start x position
      let falling = true;
      const fall = () => {
        if (falling) {
          yPos += 1; // Speed of falling, increase for faster fall
          xPos += 1; // Speed of diagonal movement, adjust as needed
          if (yPos >= window.innerHeight || xPos >= window.innerWidth) {
            falling = false; // Stop falling when it reaches the bottom or goes out of screen
          }
        } else {
          yPos = -100; // Reset y position
          xPos = 0; // Reset x position
          falling = true; // Restart from the top-left corner
        }

        star!.style.transform = `translate(${xPos}px, ${yPos}px)`;
        requestAnimationFrame(fall);
      };

      fall();
    };

    animation();
  }, []);

  return (
    <div
      ref={starRef}
      className="absolute w-2 h-2 top-0 left-0"
      style={{ backgroundColor: 'yellow', borderRadius: '50%' }}
    />
  );
};

export default FallingStar;
