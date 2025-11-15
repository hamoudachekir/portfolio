import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Star = ({ x, y, size, duration, delay }) => (
  <motion.circle
    cx={x}
    cy={y}
    r={size}
    fill="white"
    initial={{ opacity: 0 }}
    animate={{ opacity: [0, 1, 0.5, 1, 0] }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      repeatType: 'loop',
    }}
  />
);

export default function Starfield() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = Array.from({ length: 150 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.5 + 0.5,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 5,
      }));
      setStars(newStars);
    };
    generateStars();
  }, []);

  return (
    <svg
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="galaxy-gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(128, 90, 213, 0.3)" />
          <stop offset="100%" stopColor="rgba(10, 10, 31, 0)" />
        </radialGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#galaxy-gradient)" />
      {stars.map((star, i) => (
        <Star
          key={i}
          x={`${star.x}%`}
          y={`${star.y}%`}
          size={star.size}
          duration={star.duration}
          delay={star.delay}
        />
      ))}
    </svg>
  );
}
