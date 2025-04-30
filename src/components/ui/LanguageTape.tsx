'use client';
import React, { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';

const languages = [
  "JavaScript", "TypeScript", "Python", "C++", "Java", "Kotlin",
  "Dart", "HTML", "CSS", "SQL", "Shell"
];

const ScrollingTape = () => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        duration: 25,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      },
    });
  }, []);

  const renderedLanguages = React.useMemo(() => (
    [...languages, ...languages].map((lang, i) => (
      <span
        key={i}
        className="whitespace-nowrap px-2 hover:text-blue-300 transition-colors duration-200"
      >
        <span className="mx-2 text-blue-400">•</span> {lang}
      </span>
    ))
  ), []);

  return (
    <div className="overflow-hidden w-full bg-black py-2">
      <motion.div
        className="flex w-max text-white text-sm sm:text-base md:text-lg font-medium gap-10"
        animate={controls}
      >
        {renderedLanguages}
      </motion.div>
    </div>
  );
};

export default ScrollingTape;
