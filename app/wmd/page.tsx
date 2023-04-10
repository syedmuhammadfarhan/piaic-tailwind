import Image from "next/image";
import React from "react";

export default function Wmd() {
  return (
    <>
      <div className="md:flex justify-between h-1/3 bg-gradient-to-r from-blue-300 to-green-200 px-8">
        <div className="md:w-2/3 py-10 md:py-20 md:pl-28">
          <h1 className="text-2xl md:text-3xl font-extrabold text-center md:text-left md:mb-3 md:pr-64 mb-4">
            Web 3.0 (Blockchain) and Metaverse Specialization
          </h1>
          <p className="text-slate-600 text-sm md:text-lg text-center md:text-justify md:pr-64">
            This Web 3.0 and Metaverse specialization focuses on developing
            full-stack Web 3.0 and Metaverse experiences for the next generation
            of the internet by specializing in building worlds that merge the
            best of cutting-edge decentralized distributed blockchains with 3D
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
      <div className="text-center">
        <h1 className="text-3xl font-extrabold mt-10 mb-2">
          Program of Studies
        </h1>
        <p className="text-justify px-16 text-slate-500 mb-10">
          This curriculum is intended for beginners who want to learn software
          development from the ground up. The first three quarters are shared by
          all specialties and are dedicated to studying Object-Oriented
          Programming and cutting-edge Full-Stack Web 2.0 development. It is
          going to be a fifteen-month-long hybrid program that includes both
          onsite and online classes and is divided into five quarters of 13
          weeks each. The emphasis will be on hands-on learning by educating
          students to produce projects. To accommodate everyone, courses will be
          held primarily on weekends or after 6:00 p.m. (Pakistan Time) on
          weekdays. It employs a hybrid teaching format, with core onsite
          classes complemented by online Zoom laboratories and recorded videos.
        </p>
      </div>
      <div className="w-96 h-44 shadow-2xl border-2 rounded-xl ml-20 text-center p-8">
        <h1>Quarter I</h1>
        <p>CS- 101: Object - Oriented Programming using TypeScript</p>
        <p>Duration: 3 Months</p>
      </div>
      {/* courses box */}
      <div className="flex border-2 rounded-3xl w-fit h-auto bg-gradient-to-r from-blue-300 to-green-200 ml-32">
        {/* <div className="flex items-center w-full"> */}
          <div className="flex h-36 w-36 rounded-full border-2 overflow-hidden justify-center items-center -ml-16">
            Quarter I
          </div>
        {/* </div> */}
        <div className="flex flex-col border-white uppercase text-white justify-center items-center border-b-2 m-6">
          CS- 101: Object - Oriented Programming using TypeScript
        <p className="text-sm text-slate-500 md:animate-pulse hover:scale-110 m-2">
          Duration: 3 Months{" "}
        </p>
        </div>

      </div>
    </>
  );
}
