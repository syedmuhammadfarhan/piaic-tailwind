import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="sm:flex items-center">
      <div className="md:w-1/3 m-10 ml-12">
        <Image src="/president.png" alt="arif alvi" width={300} height={300} />
      </div>
      <div className="w-2/3 bg-slate-300 p-5 text-justify">
        <h1 className="text-5xl font-bold mb-2">Presidential Initiative</h1>
        <div className="text-4xl mb-2">
          <h1>for Artificial Intelligence & Computing</h1>
        </div>
        <div className="md:pr-52 leading-7 base:textalign-center">
          <p>
            The mission of PIAIC is to reshape Pakistan by revolutionizing
            education, research, and business by adopting latest, cutting-edge
            technologies. Experts are calling this the 4th industrial
            revolution. We want Pakistan to become a global hub for AI, data
            science, cloud native computing, edge computing, blockchain,
            augmented reality, and internet of things.
          </p>
        </div>
      </div>
    </div>
  );
}
