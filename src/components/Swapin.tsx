import { useState, useCallback } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export type Testimonial = {
  metric: string;
  title: string;
  description: string;
  company: string;
  logo: string;
};

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
  className?: string;
}

export default function TestimonialCarousel({ testimonials, className = '' }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  if (!testimonials.length) {
    return <div className="text-center py-10 text-gray-500">No testimonials available.</div>;
  }

  const current = testimonials[currentIndex];

  return (
    <div className={`relative max-w-3xl mx-auto p-4 ${inter.className} ${className}`}>
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-300 ease-in-out">
          <div className="p-8 py-5 bg-gradient-to-br from-white via-blue-100 to-blue-300 rounded-2xl shadow-lg border border-purple-200 flex flex-col">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <span className="text-5xl font-sans bg-gradient-to-l from-gray-600 to-gray-950 bg-clip-text text-transparent">
                  {current.metric}
                </span>
                <h3 className="text-xl font-semibold mt-2">{current.title}</h3>
                <p className="text-gray-600 mt-2">{current.description}</p>
              </div>
              <div className="flex flex-row items-end justify-between">
                <div className="text-sm font-medium text-gray-500">{current.company}</div>
                <div className="w-19 h-19 rounded-lg bg-gray-50 p-2 mt-2 flex items-center justify-center">
                  <Image 
                    src={current.logo} 
                    alt={current.company}
                    width={50}
                    height={50}
                    className="max-h-18 max-w-[4rem] object-contain rounded-lg"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-end mt-8 gap-4">
        <button 
          onClick={prevSlide}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
