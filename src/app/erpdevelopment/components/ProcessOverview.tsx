'use client';

import {
  Lightbulb,
  Layout,
  Code2,
  Bug,
  Rocket,
} from 'lucide-react';
import { motion, useInView, useAnimation } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

const defaultSteps = [
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: 'Idea & Consultation',
    description:
      'We begin by understanding your vision, challenges, and business goals through a discovery session.',
  },
  {
    icon: <Layout className="h-6 w-6" />,
    title: 'Wireframes & UI/UX',
    description:
      'Our designers craft wireframes and intuitive user interfaces for a smooth and elegant user experience.',
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: 'Development',
    description:
      'Our developers build high-performance, scalable solutions using modern technologies and best practices.',
  },
  {
    icon: <Bug className="h-6 w-6" />,
    title: 'Testing & QA',
    description:
      'We perform rigorous testing across devices to ensure your product is stable, secure, and bug-free.',
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'Launch & Support',
    description:
      'We handle deployment and offer ongoing support and updates to ensure long-term success.',
  },
];

type Step = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type Props = {
  steps?: Step[];
};

export default function ProcessOverview({ steps = defaultSteps }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // Track which step is active based on scroll progress
 useEffect(() => {
  let animationFrameId: number;

  const updateScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const progress = Math.min(Math.max((window.innerHeight - rect.top) / (rect.height + window.innerHeight), 0), 1);
    const activeIndex = Math.round(progress * (steps.length - 1));

    controls.start((i) => ({
      opacity: i <= activeIndex ? 1 : 0.3,
      scale: i === activeIndex ? 1.1 : 1,
      transition: { type: 'spring', stiffness: 500, damping: 12 },
    }));

    animationFrameId = requestAnimationFrame(updateScroll);
  };

  animationFrameId = requestAnimationFrame(updateScroll);
  window.addEventListener('scroll', updateScroll);

  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('scroll', updateScroll);
  };
}, [controls, steps.length]);

  return (
    <section
      ref={containerRef}
      className="py-24 px-6 lg:px-8 bg-white relative"
      id="process"
    >
      <div className="max-w-5xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900">
            Our Development Process
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A step-by-step approach designed to turn your idea into a successful digital product.
          </p>
        </motion.div>
      </div>

      <div className="relative border-l sm:border-l-0 sm:border-t border-gray-200 sm:grid sm:grid-cols-5 gap-8">
        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial={{ opacity: 0.3, scale: 1 }}
            animate={controls}
            className="relative sm:pt-12 sm:text-center px-6 sm:px-4 py-10 sm:py-0 border-l sm:border-l-0 sm:border-t border-gray-200"
          >
            <div className="flex sm:justify-center items-start sm:items-center sm:flex-col gap-4">
              <div className="relative flex items-center justify-center">
                {/* Step number circle */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white font-semibold sm:-top-6 sm:left-1/2 sm:-translate-x-1/2 sm:translate-y-0">
                  {idx + 1}
                </div>
                {/* Icon circle */}
                <div className="p-3 rounded-full bg-blue-100 text-blue-600 shadow-md z-10">
                  {step.icon}
                </div>
              </div>

              <div className="sm:mt-4 text-left sm:text-center">
                <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{step.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
