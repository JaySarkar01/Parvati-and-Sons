"uce client"
import React from "react";
import HeroFrom from "@/components/ui/HomeForm";
// import WhatsAppInput from "@/components/ui/whatsendbox";
// import Image from 'next/image';

type HeroProps = {
  data: {
    heading: string;
    subheading: string;
  };
};

export const dynamic = 'force-static';
const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center px-6 md:px-16 py-12 gap-3">
      {/* Left Section */}
      <div className="text-center space-y-8 md:text-left max-w-3xl">
      <h1 className= "text-3xl md:text-5xl xl:text-6xl text-gray-700 font-bold leading-tight">
          Build <span
                className="
                  relative inline-block bg-blue-100 px-1 rounded-lg
                  "
              >
                <span className="border-b-[3.3px] border-blue-500 rounded-md px-1 text-black">
                  {data.heading}
                </span>
              </span> Without Boundaries
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-900 font-medium mt-4">
          {data.subheading}
        </p>
        {/* <div className="mt-6 flex flex-col md:flex-col items-center md:items-start space-y-2 md:space-y-0 md:space-x-3 text-gray-800">
          <span className="flex items-end">
            <span className="text-5xl font-bold text-black">30% </span>
            <span className={`font-bold text-gray-700 text-2xl ml-1`}>instant off</span>
          </span>
          <span className="text-lg text-gray-600">+1 Month Google Ad</span>
        </div>
        <WhatsAppInput/> */}
      </div>

      {/* Right Section - Image Placeholder */}
      <div className="mt-6 w-90 md:w-160 h-105 md:h-105 bg-gray-50 rounded-lg flex justify-center items-center overflow-hidden">
          <HeroFrom/>
      </div>
    </div>
  );
};

export default Hero;
