"use client"
import React, { useEffect, useRef } from 'react';

const FallingStar: React.FC = () => {
  const starRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const star = starRef.current;

    const animation = () => {
      let yPos = -100; // Start position
      let rotation = 0; // Initial rotation
      let falling = true;

      const fall = () => {
        if (falling) {
          yPos += 1; // Speed of falling, increase for faster fall
          rotation += 10; // Rotation speed, increase for faster rotation
          if (yPos >= window.innerHeight) {
            falling = false; // Stop falling when it reaches the bottom
          }
        } else {
          yPos -= 1; // Move back up
          if (yPos <= -100) {
            falling = true; // Reset at the top
          }
        }

        star!.style.transform = `translateY(${yPos}px) rotate(${rotation}deg)`;
        requestAnimationFrame(fall);
      };

      fall();
    };

    animation();
  }, []);

  return (
    <div
      ref={starRef}
      className="absolute w-2 h-2"
      style={{ backgroundColor: 'yellow', borderRadius: '50%' }}
    />
  );
};

export default FallingStar;
