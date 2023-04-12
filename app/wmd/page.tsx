import Image from "next/image";
import React from "react";
import { CommonQuarters, WmdQuarters } from "../Data/Quarters-data";

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
      {/* <div className="text-center">
        <h2 className="text-3xl font-extrabold mt-10 mb-2">
        Program of Studies
        </h2>
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
      {/* box */}
      {/* <div className="w-96 h-auto shadow-2xl border-2 rounded-xl text-center p-2 justify-center items-center flex flex-col bg-gradient-to-r from-blue-300 to-green-200 m-20">
        <div className="flex h-28 w-28 rounded-full border-2 overflow-hidden justify-center items-center font-bold bg-white -mt-16">
          <h3 className="animate-pulse">Quarter I</h3>
        </div>
        <p className="text-lg m-2 bottom-b-2 font-bold text-white">
        CS- 101: Object - Oriented Programming using TypeScript
        </p>
        <p className="text-sm animate-pulse">Duration: 3 Months</p>
      </div> */}
      {/* courses box */}
      {/* capsule */}
      {/* {CommonQuarters.map((items, i) => (
        <center>
          <center
            key={i}
            className="rounded-t-full min-w-32 rounded-b-full border-2 md:w-fit md:h-32  bg-gradient-to-r from-blue-300 to-green-200 md:rounded-s-full md:rounded-e-full flex justify-start items-center overflow-hidden m-10"
          >
            <div className="bg-red-100  md:flex md:h-44 justify-stretch items-center">
              <div className="bg-slate-500">
                <div className="bg-white h-32 w-32 rounded-full items-center justify-center flex font-bold">
                  {items.heading}
                </div>
              </div>
              <div className="bg-slate-200 ">
                <div className=" text-sm px-6 w-96">
                  <p>{items.description}</p>
                </div>
                <div>
                  <p className="pt-6 text-xs p-6">Duration: 3 Weeks</p>
                </div>
              </div>
            </div>
          </center>
        </center>
      ))} */}

      <center>
        <h2 className="text-xl md:text-2xl font-extrabold text-center mt-6">
          Common Quarters
        </h2>
        <p className="text-sm text-slate-500 text-center px-4 pt-2">
          We will start the program by learning the fundamentals of
          Object-Oriented programming using JavaScript and TypeScript.
          <br />
          After completing the first three quarters the participants will select
          one or more specializations consisting of two courses each.
        </p>
        <div className="max-w-fit sm:flex-wrap md:flex justify-center gap-3 mt-8 mb-16">
          {CommonQuarters.map((items, i) => (
            <div className="border-2 rounded-3xl w-56 h-auto bg-gradient-to-r from-blue-300 to-green-200 mb-4">
              <div className="flex items-center justify-center w-full">
                <div className="flex h-40 w-40 rounded-full border-2 overflow-hidden mt-3 justify-center items-center text-lg font-bold bg-white">
                  {items.heading}
                </div>
              </div>
              <div className="flex h-36 border-white text-sm  text-white justify-center items-center border-b-2 mt-4 mx-4">
                {items.description}
              </div>

              <div className="text-sm text-slate-500 md:animate-pulse hover:scale-110 m-2">
                Duration: 3 Weeks
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-xl md:text-xl font-extrabold text-center">
          Specialized Tracks
        </h2>
        <p className="text-sm text-slate-500 text-center px-4 pt-2">
          After completing the first three quarters the participants will select
          one or more specializations consisting of two courses each.
        </p>
        <div className="max-w-fit sm:flex-wrap md:flex justify-center gap-3 mt-8 mb-16">
          {WmdQuarters.map((items, i) => (
            <div className="border-2 rounded-3xl w-56 h-auto bg-gradient-to-r from-blue-300 to-green-200 mb-4">
              <div className="flex items-center justify-center w-full">
                <div className="flex h-40 w-40 rounded-full border-2 overflow-hidden mt-3 justify-center items-center text-lg font-bold bg-white">
                  {items.heading}
                </div>
              </div>
              <div className="flex h-36 border-white text-sm  text-white justify-center items-center border-b-2 mt-4 mx-4">
                {items.description}
              </div>

              <div className="text-sm text-slate-500 md:animate-pulse hover:scale-110 m-2">
                Duration: 3 Weeks
              </div>
            </div>
          ))}
        </div>
      </center>
    </>
  );
}
