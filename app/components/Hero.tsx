import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="h-screen bg-gradient-to-r from-blue-200 to-green-100">
      <div className="md:flex items-center">
        <div className="md:w-1/4 m-10 ml-12 items-center">
          <Image
            src="/president.png"
            alt="arif alvi"
            width={300}
            height={300}
          />
        </div>
        <div className="md:w-3/4 p-5 ">
          <h1 className="text-4xl font-bold mb-2">
            Presidential Initiative
          </h1>
          <div className="text-3xl mb-2">
            <h1>for Artificial Intelligence & Computing</h1>
          </div>
          <div className="md:pr-4 lg:pr-52 leading-7 base:textalign-center text-justify sm:text-md">
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
    </div>
  );
}
