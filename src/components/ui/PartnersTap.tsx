'use client';
import React, { useEffect } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import Image from 'next/image';

// Replace these with your actual image URLs or local paths
const logos =[
    '/Partners/1.webp',
    '/Partners/2.webp',
    '/Partners/3.webp',
    '/Partners/4.webp',
    '/Partners/5.png',
    '/Partners/6.webp',
    '/Partners/8.webp'
  ]
  ;

const Partners = () => {
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
  }, [controls]);

  const renderedLogos = React.useMemo(() => (
    [...logos, ...logos].map((logo, i) => (
      <div key={i} className="flex-shrink-0 px-4 py-2">
        <Image
          src={logo}
          alt={`Logo ${i}`}
          width={150}
          height={50}
          className="object-contain max-h-10 w-auto transition duration-300"
        />
      </div>
    ))
  ), []);

  return (
    <div className="overflow-hidden w-full py-4">
      <motion.div
        className="flex w-max items-center gap-10"
        animate={controls}
      >
        {renderedLogos}
      </motion.div>
    </div>
  );
};

export default Partners;
