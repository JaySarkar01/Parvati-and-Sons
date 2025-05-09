'use client';

import { useEffect, memo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import TestimonialSlider from '@/components/Swapin';
import Partners from './ui/PartnersTap';

type Testimonial = {
  metric: string;
  title: string;
  description: string;
  company: string;
  logo: string;
};

type Partner = {
  name: string;
  logo: string;
};

type TestimonialSectionProps = {
  testimonials: Testimonial[];
  heading?: string;
  subheading?: string;
};

const TestimonialCard = memo(({ testimonial }: { testimonial: Testimonial }) => (
  <div className="h-full p-8 bg-gradient-to-br from-white via-blue-100 to-blue-300 rounded-2xl shadow-lg border border-purple-200 flex flex-col">
    <div className="flex items-center justify-between mb-6 py-5">
      <span className="text-7xl font-sans bg-gradient-to-l from-gray-700 to-gray-950 bg-clip-text text-transparent">
        {testimonial.metric}
      </span>
    </div>
    <h3 className="text-2xl font-semibold text-gray-900 mb-2">{testimonial.title}</h3>
    <p className="text-gray-600 mb-6 flex-grow">{testimonial.description}</p>
    <div className="flex items-center justify-between">
      <span className="text-sm font-medium text-gray-700">{testimonial.company}</span>
      <div className="w-18 h-18 rounded-lg bg-gray-50 p-2 flex items-center justify-center">
        <Image
          src={testimonial.logo}
          alt={testimonial.company}
          width={64}
          height={68}
          className="max-h-17 max-w-[4rem] object-contain rounded-lg"
        />
      </div>
    </div>
  </div>
));
TestimonialCard.displayName = 'TestimonialCard';

const AutoScrollingPartners = ({ partners }: { partners: Partner[] }) => {
  const controls = useAnimation();

  useEffect(() => {
    let isMounted = true;
    return () => {
      isMounted = false;
    };
  }, [controls]);

  return (
    <div className="overflow-hidden w-full py-4">
      <motion.div className="flex gap-4 w-max" animate={controls}>
        {partners.concat(partners).map((partner, idx) => (
          <div key={idx} className="p-4 rounded-xl flex items-center justify-center h-20">
            <Image
              src={partner.logo}
              alt={partner.name}
              width={150}
              height={100}
              className="max-h-10 object-contain transition-all duration-300"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};
AutoScrollingPartners.displayName = 'AutoScrollingPartners';

export default function TestimonialSection({
  testimonials,
  heading = 'Transform Your Business',
  subheading = 'Join thousands of companies achieving real results with our platform',
}: TestimonialSectionProps) {
  return (
    <section className="py-10 px-6 pb-0 mb-0 sm:px-10 bg-white">
      <div className="max-w-7xl lg:max-w-[90vw] xl:max-w-[76vw] mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            {heading}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subheading}
          </p>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          {/* Desktop */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <TestimonialSlider testimonials={testimonials}/>
          </div>
        </div>

        {/* Partners (External Component) */}
        <div className="mb-16">
          <h3 className="text-center text-lg font-medium text-gray-500 mb-8">
            Trusted by industry leaders
          </h3>
          <Partners />
        </div>
      </div>
    </section>
  );
}
