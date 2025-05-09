"use client";
import React from "react";
import Hero from "@/components/Hero";
import TestimonialSection from "@/components/ClientResultsDisplay";
import ProjectShowcaseBlock from "@/components/ui/ProjectShowcaseBlock";
import CareerHero from "@/components/CareerHero";
import Footer from "@/components/Footer";
import BrandHeroSection from "@/components/BrandEndorsementSection";
import ReviewSection from "@/components/ui/ReviewSection";
import WhyChooseUsSection from "@/components/ui/WhyChooseUsSection";
import HeroBannerCard from "@/components/ui/HeroBannerCard";
import WorldMapDemo from "@/components/Call_map";
import { Inter } from "next/font/google";
  const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-inter',
    display: 'swap',
  });

  // Define the data object with heading and subheading
  const data = {
    heading: 'Websites & Apps',
    subheading: 'Attain your Digital Vision and Rise above the Digital Noise to Show Up and Stand Out',
  };

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


export default function Home() {
  return (
   <div className={`${inter.className} antialiased mt-15`}>
    <section>
      <Hero data={data} />
    </section>
    <section>
    <TestimonialSection testimonials={testimonials} />;
    </section>
    <section className="mb-16 flex flex-col items-center justify-center min-h-[300px] p-8">
      <BrandHeroSection/>
    </section>
    <section className="">
      <CareerHero/>
    </section>
    <section className="mb-16">
    <WhyChooseUsSection/>
    </section>
    <section className="mb-16 flex flex-col items-center justify-center min-h-[300px]">
      <ProjectShowcaseBlock/>
    </section>
    <section>
      <ReviewSection/>
    </section>
    <section>
      <HeroBannerCard/>
    </section>
    <section className="">
      <WorldMapDemo/>
    </section>
    <footer>
      <Footer/>
    </footer>
   
   </div>
  );
}
