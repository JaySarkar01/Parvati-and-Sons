"use client";
import React from "react";
import Hero from "@/components/Hero";
import ClientResultsDisplay from "@/components/ClientResultsDisplay";
import ProjectShowcaseBlock from "@/components/ui/ProjectShowcaseBlock";
import CareerHero from "@/components/CareerHero";
import Footer from "@/components/Footer";
import LanguageTape from "@/components/ui/LanguageTape";
import BrandHeroSection from "@/components/BrandEndorsementSection";
import ReviewSection from "@/components/ui/ReviewSection";

export default function Home() {
  return (
   <div>
    <section>
      <Hero/>
    </section>
    <section>
      <ClientResultsDisplay/>
    </section>
    <section>
      <BrandHeroSection/>
    </section>
    <section>
      <CareerHero/>
    </section>
    <section className="mb-16 flex flex-col items-center justify-center min-h-[300px]">
      <ProjectShowcaseBlock/>
    </section>
    <section>
      <ReviewSection/>
    </section>
    <footer>
      <Footer/>
    </footer>
    <section className="fixed bottom-0 z-10 w-full">
      <LanguageTape/>
    </section>
   </div>
  );
}
