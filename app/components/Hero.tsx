"use client";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (count < 100) {
        setCount((Count) => Count + 1);
      }
    }, 5);

    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <div className="md:flex items-center h-auto bg-gradient-to-r from-blue-400 to-green-300">
      {/* 1st div */}
      <div className="md:basis-2/4 px-14 pt-10 items-center">
        <Image src="/president.png" alt="arif alvi" width={300} height={300} />
      </div>
      {/* 2nd div */}
      <div className="md:basis-3/4 p-2">
        <h2 className="text-xl md:text-4xl mb-1 text-center md:text-start font-extrabold pt-4">
          Presidential Initiative
        </h2>

        <h3 className="text-lg md:text-3xl mb-1 text-center md:text-start font-">
          for Artificial Intelligence & Computing
        </h3>

        <div className="md:pr-4 lg:pr-52 leading-6 text-justify text-xs md:text-sm text-slate-600">
          <p>
            The mission of PIAIC is to reshape Pakistan by revolutionizing
            education, research, and business by adopting latest, cutting-edge
            technologies. Experts are calling this the 4th industrial
            revolution. We want Pakistan to become a global hub for AI, data
            science, cloud native computing, edge computing, blockchain,
            augmented reality, and internet of things."
          </p>
        </div>
        <div className="pt-10 flex justify-end">
          <div className="max-w-fit rounded-2xl p-2 shadow-inner shadow-blue-600">
            <p className="text-xl md:text-2xl font-bold text-black md:animate-pulse text-center">
              {count}K+
            </p>
            <p className="text-[7px] md:text-[8px] text-black text-center">
              Applications Received
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
