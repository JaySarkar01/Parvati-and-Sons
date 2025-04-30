"use client";
import Image from "next/image";
export default function WorldMapDemo() {
  return (
    <div className="py-10 bg-white w-full flex flex-col justify-center items-center px-4 md:px-20">

      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl text-black">
          Remote{" "}
          <span className="text-neutral-400">
          Connectivity
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Break free from traditional boundaries. Work from anywhere, at the
          comfort of your own studio apartment. Perfect for Nomads and
          Travellers.
        </p>
      </div>
      <Image
      src="/imgs/map.png"
      alt="World Map"
      width={1000}
      height={500}
      className="w-full h-auto object-cover mt-8"
      priority={true}
      />
    </div>
  );
}
