'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Lightbulb, Layout, Code2, Bug, Rocket } from 'lucide-react';

type Step = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const DEFAULT_STEPS: Step[] = [
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: 'Idea & Consultation',
    description: 'We begin with a discovery session to fully understand your vision and business objectives.',
  },
  {
    icon: <Layout className="h-5 w-5" />,
    title: 'Wireframes & UI/UX',
    description: 'Our designers create intuitive interfaces focused on optimal user experience.',
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    title: 'Development',
    description: 'We build high-performance solutions using cutting-edge technologies.',
  },
  {
    icon: <Bug className="h-5 w-5" />,
    title: 'Testing & QA',
    description: 'Rigorous quality assurance ensures stability and security.',
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: 'Launch & Support',
    description: 'We handle deployment and provide ongoing maintenance.',
  },
];

const StepIndicator = ({ index, isActive }: { index: number; isActive: boolean }) => (
  <motion.div
    className="relative"
    animate={{
      scale: isActive ? 1.2 : 1,
    }}
    transition={{ type: 'spring', stiffness: 500, damping: 15 }}
  >
    <div className={`w-3 h-3 rounded-full ${isActive ? 'bg-blue-600' : 'bg-gray-300'}`} />
    {isActive && (
      <motion.div
        className="absolute inset-0 rounded-full bg-blue-200"
        initial={{ scale: 0 }}
        animate={{ scale: 2 }}
        transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
      />
    )}
  </motion.div>
);

const StepCard = React.memo(({ step, isActive, index }: { step: Step; isActive: boolean; index: number }) => (
  <motion.div
    className={`relative flex flex-col items-center p-4 cursor-pointer rounded-xl transition-colors ${
      isActive ? 'bg-blue-50' : 'hover:bg-gray-50'
    }`}
    whileHover={{ y: -5 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <div className="relative mb-4">
      <motion.div
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-sm ${
          isActive ? 'bg-blue-600 text-white shadow-blue-200' : 'bg-white text-blue-600 shadow-gray-200'
        }`}
        animate={{
          scale: isActive ? 1.1 : 1,
        }}
      >
        {step.icon}
      </motion.div>
      <div
        className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
          isActive ? 'bg-blue-800 text-white' : 'bg-gray-200 text-gray-700'
        }`}
      >
        {index + 1}
      </div>
    </div>
    
    <motion.h3
      className={`text-sm font-medium mb-1 ${
        isActive ? 'text-blue-600 font-semibold' : 'text-gray-700'
      }`}
    >
      {step.title}
    </motion.h3>
    
    <AnimatePresence>
      {isActive && (
        <motion.p
          className="text-xs text-gray-600 text-center px-2"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {step.description}
        </motion.p>
      )}
    </AnimatePresence>
  </motion.div>
));
 StepCard.displayName = 'StepCard';
const ProcessOverview = ({ steps = DEFAULT_STEPS }: { steps?: Step[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInteractive, setIsInteractive] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center']
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, steps.length - 1]);

  useEffect(() => {
    return progress.onChange((value) => {
      const newIndex = Math.round(value);
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    });
  }, [progress, activeIndex]);

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative py-20 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            A carefully crafted journey from concept to successful implementation
          </p>
        </motion.div>

        <div className="relative">
          {/* Progress bar */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-gray-100 mx-16 hidden sm:block">
            <motion.div
              className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
              style={{
                width: `${(activeIndex / (steps.length - 1)) * 100}%`,
              }}
              transition={{ type: 'spring', damping: 20 }}
            />
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 sm:gap-6 mb-12">
            {steps.map((step, idx) => (
              <StepCard
                key={idx}
                step={step}
                isActive={idx === activeIndex}
                index={idx}
              />
            ))}
          </div>

          {/* Mobile indicators */}
          <div className="sm:hidden flex justify-center gap-2 mb-8">
            {steps.map((_, idx) => (
              <StepIndicator
                key={idx}
                index={idx}
                isActive={idx === activeIndex}
              />
            ))}
          </div>

          {/* Active step details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
                  {steps[activeIndex].icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Step {activeIndex + 1}: {steps[activeIndex].title}
                </h3>
              </div>
              <p className="text-gray-600 pl-14">{steps[activeIndex].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default ProcessOverview;