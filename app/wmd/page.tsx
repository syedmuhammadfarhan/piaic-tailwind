import Image from "next/image";
import React from "react";

export default function Wmd() {
  return (
    <div className="md:flex justify-between h-1/3 bg-gradient-to-r from-blue-300 to-green-200 px-8">
      <div className="md:w-1/2 py-10 md:py-32 md:pl-28">
        <h1 className="text-2xl md:text-3xl font-extrabold text-center md:text-left md:mb-3 md:pr-64 mb-4">
          Web 3.0 (Blockchain) and Metaverse Specialization
        </h1>
        <p className="text-slate-600 text-sm md:text-lg text-center md:text-justify md:pr-64">
          This Web 3.0 and Metaverse specialization focuses on developing
          full-stack Web 3.0 and Metaverse experiences for the next generation
          of the internet by specializing in building worlds that merge the best
          of cutting-edge decentralized distributed blockchains with 3D
          metaverse client experiences.
        </p>
      </div>
      <div className="md:w-1/2 md:flex md:justify-center items-center">
        <Image
          src="/courses-banner.png"
          alt="courses"
          height={350}
          width={350}
        />
      </div>
    </div>
  );
}
