import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    //  bg-[url('/bg1.jpeg')]
    <div className="md:flex items-center h-auto bg-gradient-to-r from-blue-400 to-green-300">
      <div className="md:basis-2/4 px-14 pt-10 items-center">
        <Image src="/president.png" alt="arif alvi" width={300} height={300} />
      </div>
      <div className="md:basis-3/4 p-7">
        <h2 className="text-4xl font-bold mb-2 text-center md:text-start">
          Presidential Initiative
        </h2>

        <h2 className="text-3xl mb-2 text-center md:text-start">
          for Artificial Intelligence & Computing
        </h2>

        <div className="md:pr-4 lg:pr-52 leading-7 text-justify text-md text-white">
          <p>
            The mission of PIAIC is to reshape Pakistan by revolutionizing
            education, research, and business by adopting latest, cutting-edge
            technologies. Experts are calling this the 4th industrial
            revolution. We want Pakistan to become a global hub for AI, data
            science, cloud native computing, edge computing, blockchain,
            augmented reality, and internet of things.
          </p>
        </div>
        <div className="pt-10 flex justify-end">
          <div className="bg-green-200 max-w-fit rounded-2xl p-2 shadow-inner shadow-black">
            <p className=" text-3xl font-bold text-black">
              100 K+
            </p>
            <p className="text-[9px] text-slate-500">Applications Received</p>
          </div>
        </div>
      </div>
    </div>
  );
}
