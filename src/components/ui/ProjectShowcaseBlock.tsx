"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ProjectShowcaseBlock() {
  const [, setIsLoaded] = useState(false);
  const [isColored, setIsColored] = useState("ffffff");
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const categories = ["UI/UX", "DEVELOPMENT", "SEO", "HOSTING"];

  return (
    <div
      className="flex flex-col items-center justify-center w-full py-12 lg:py-5"
      style={{ backgroundColor: isColored }}
    >
      <div
        className="w-full transition-colors duration-300 ease-in-out py-12 lg:py-5 flex items-center justify-center"
        onMouseEnter={() => setIsColored("#e6f3f7")}
        onMouseLeave={() => setIsColored("#ffffff")}
      >
        <div className="max-w-7xl bg-[#f5fcff] p-14 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <div className="flex lg:flex-row gap-8 lg:gap-12 items-center flex-col">
            {/* Right Content - Screenshots */}
            <div className="w-full lg:w-1/2 space-y-6">
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="px-4 py-1.5 text-black bg-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* Heading */}
              <h2
                className="text-4xl md:text-5xl font-bold leading-tight"
                style={{ color: "#1e1e5a" }}
              >
                Goodwill Industries of Dallas Inc.
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed">
                Goodwill empowers people with disabilities and other barriers
                via job training and employment at Goodwill and throughout the
                community.
              </p>

              {/* CTA */}
              <a
                href="#"
                className="inline-flex items-center font-semibold group"
                style={{ color: "#1e1e5a" }}
              >
                See Case Study{" "}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            <div className="w-full lg:w-1/2 relative">
              <div className="relative w-full aspect-[4/3]">
                {/* Main Screenshot */}
                <div className="absolute inset-0 ">
                  <Image
                    src="https://agencypartner.com/wp-content/uploads/2021/09/spa-fea.png"
                    alt="Goodwill website main page"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover rounded-lg "
                  />
                </div>

                {/* Decorative Dots */}
                <div className="absolute top-[5%] right-[5%] grid grid-cols-6 gap-1.5">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#93c5fd" }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full transition-colors duration-300 ease-in-out py-12 lg:py-5 flex items-center justify-center"
        onMouseEnter={() => setIsColored("#e6eff7")}
        onMouseLeave={() => setIsColored("#ffffff")}
      >
        <div className="max-w-7xl bg-[#f5f9ff] p-14 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Image Section */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative w-full aspect-[4/3]">
                {/* Main Screenshot */}
                <div className="absolute inset-0">
                  <Image
                    src="https://agencypartner.com/wp-content/uploads/2021/11/Mask-Group-75.png"
                    alt="Goodwill website main page"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Decorative Dots */}
                <div className="absolute top-[5%] right-[5%] grid grid-cols-6 gap-1.5">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#93c5fd" }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Text Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="px-4 py-1.5 text-black bg-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* Heading */}
              <h2
                className="text-4xl md:text-5xl font-bold leading-tight"
                style={{ color: "#1e1e5a" }}
              >
                Goodwill Industries of Dallas Inc.
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed">
                Goodwill empowers people with disabilities and other barriers
                via job training and employment at Goodwill and throughout the
                community.
              </p>

              {/* CTA */}
              <a
                href="#"
                className="inline-flex items-center font-semibold group"
                style={{ color: "#1e1e5a" }}
              >
                See Case Study{" "}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className="w-full transition-colors duration-300 ease-in-out py-12 lg:py-5 flex items-center justify-center"
        onMouseEnter={() => setIsColored("#e8e7f5")}
        onMouseLeave={() => setIsColored("#ffffff")}
      >
        <div className="max-w-7xl bg-[#f6f5ff] p-14 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6">
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <span
                    key={category}
                    className="px-4 py-1.5 text-black bg-white rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-transform duration-300 hover:scale-105 active:scale-95"
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* Heading */}
              <h2
                className="text-4xl md:text-5xl font-bold leading-tight"
                style={{ color: "#1e1e5a" }}
              >
                Goodwill Industries of Dallas Inc.
              </h2>

              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed">
                Goodwill empowers people with disabilities and other barriers
                via job training and employment at Goodwill and throughout the
                community.
              </p>

              {/* CTA */}
              <a
                href="#"
                className="inline-flex items-center font-semibold group transition-transform duration-300 hover:translate-x-1"
                style={{ color: "#1e1e5a" }}
              >
                See Case Study{" "}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Right Content - Screenshots */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative w-full aspect-[4/3]">
                {/* Main Screenshot */}
                <div className="absolute inset-0">
                  <Image
                    src="https://agencypartner.com/wp-content/uploads/2021/11/MicrosoftTeams-image-6.png"
                    alt="Goodwill website main page"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Decorative Dots */}
                <div className="absolute top-[5%] right-[5%] grid grid-cols-6 gap-1.5">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: "#93c5fd" }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
