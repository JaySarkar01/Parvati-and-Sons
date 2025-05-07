'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, memo } from 'react';
import Image from 'next/image';
import TestimonialSlider from '@/components/Swapin';

// ---- Data ----
const testimonials = [
  {
    metric: '2x',
    title: 'Revenue Growth',
    description: 'UK-based ACF Events doubled revenue after implementing our solution',
    company: 'ACF EVENTS',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZsfBAgTdR9yBtGdz404amtV_ejE4FyOGHrg&s',
  },
  {
    metric: '5 Hours',
    title: 'Weekly Savings',
    description: 'Lisbon Santra Tours saves 5 hours weekly on operations',
    company: 'LISBON SANTRA TOURS',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYM7ViWKDu371o9FnxoxSoIYcWf9SMnsmB4A&s',
  },
  {
    metric: '35%',
    title: 'Lead Conversion',
    description: 'Cystercare increased lead conversion by 35% with our platform',
    company: 'CysterCare',
    logo: 'https://cystercare.com/wp-content/uploads/2023/01/Logo.png',
  },
  {
    metric: '20%',
    title: 'Sales Increase',
    description: 'Eden Ridge boosted sales by 20% using our tools',
    company: 'EDENRIDGE',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD_d_Bl0xBroCEv0rPzzXj_OZltQZ2ApE9jg&s',
  },
];

type Partner = {
  name: string;
  logo: string;
};

// 2. partners array
const partners: Partner[] = [
  { name: 'G2', logo: '/Partners/1.webp' },
  { name: 'Trustpilot', logo: '/Partners/2.webp' },
  { name: 'Capterra', logo: '/Partners/3.webp' },
  { name: 'Microsoft', logo: '/Partners/4.webp' },
  { name: 'App Store', logo: '/Partners/5.png' },
  { name: 'Google Play', logo: '/Partners/6.webp' },
  { name: 'Microsoft', logo: '/Partners/8.webp' },
];
// ---- Components ----
const TestimonialCard = memo(({ testimonial }: { testimonial: typeof testimonials[0] }) => (
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

    const animate = async () => {
      while (isMounted) {
        await controls.start({
          x: '-100%',
          transition: { duration: 60, ease: 'linear' },
        });
        controls.set({ x: '0%' });
      }
    };

    animate();

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
  )
};
AutoScrollingPartners.displayName = 'AutoScrollingPartners';

export default function ClientResultsDisplay() {
  return (
    <section className="py-10 px-6 pb-0 mb-0 sm:px-10 bg-white">
      <div className="max-w-7xl lg:max-w-[90vw] xl:max-w-[76vw] mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Transform Your Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of companies achieving real results with our platform
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
            <TestimonialSlider />
          </div>
        </div>

        {/* Partners */}
        <div className="mb-16">
          <h3 className="text-center text-lg font-medium text-gray-500 mb-8">
            Trusted by industry leaders
          </h3>
          <AutoScrollingPartners partners={partners} />
        </div>
      </div>
    </section>
  );
}
