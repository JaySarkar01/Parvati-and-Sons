"use client";
import React from "react";
import Hero from "@/components/Hero";
import ClientResultsDisplay from "@/components/ClientResultsDisplay";

export default function Home() {
  return (
   <div>
    <section>
      <Hero/>
    </section>
    <section>
      <ClientResultsDisplay/>
    </section>
   </div>
  );
}
