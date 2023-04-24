import React, { ReactNode } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";

export const Heading = ({ children }: { children: ReactNode }) => {
  <h1 className="text-xl md:text-2xl font-extrabold mt-14 mb-3 max-w-fit px-8">{children}</h1>;
};

export default function Programs() {
  return (
    <div>
      <center>
        <h2 className="text-xl md:text-2xl font-extrabold mt-14 mb-3 max-w-fit px-8">
          Getting Ready for the Next Generation of the Internet
        </h2>

        <p className="text-sm md:text-md text-slate-500 md:px-24 text-justify px-4">
          The internet is without a doubt the most important technological
          development in human history. Web3, 3D Metaverse, AI, IoT, Cloud, and
          Edge technologies expand the internet as we know it by introducing
          novel features and advancements. Metaverse will make use of all
          aspects of modern technology, including 3D, VR, AR, AI, blockchain,
          cloud and edge computing, voice computing, ambient computing, and
          more.
        </p>
        <h2 className="text-xl md:text-2xl font-extrabold mt-14 mb-3 max-w-fit px-8">
          Available Programs
        </h2>

        <p className="text-sm md:text-md text-slate-500 md:px-24 text-justify px-4">
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
        <div className="md:animate-bounce w-10 h-10 rounded-full border-2 border-black flex justify-center items-center mt-10">
          <AiOutlineArrowDown className="color-purple" />
        </div>
      </center>
    </div>
  );
}
