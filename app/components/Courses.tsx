"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CoursesArray } from "../Data/Courses-data";
import { RevealWrapper } from "next-reveal";

export default function Courses() {
  return (
    <center>
      <div className="w-[60%] xl:w-[60%] 2xl:w-[100%] flex-wrap flex justify-center items-center gap-5 lg:gap-4 mt-8 mb-16">
        {CoursesArray.map(
          (items: { image: string; courseName: string; href: string }, i) => {
            return (
              <center key={i}>
                <RevealWrapper
                  mobile={false}
                  rotate={{ x: 12, y: 40, z: 0 }}
                  origin="left"
                  delay={200}
                  duration={1000}
                  distance="500px"
                  reset={false}
                  viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
                >
                  <div className="border-2 rounded-3xl w-56 h-auto bg-gradient-to-r from-blue-400 to-green-300 mb-4">
                    <div className="flex items-center justify-center w-full">
                      <div className="flex justify-center items-center h-40 w-40 rounded-full border-2 overflow-hidden mt-3">
                        <Image
                          className="object-cover h-40"
                          src={items.image}
                          alt={items.image}
                          width={200}
                          height={200}
                        />
                      </div>
                    </div>
                    <div className="flex h-36 border-white uppercase text-xl font-extrabold text-white justify-center items-center border-b-2 mt-4 mx-4">
                      {items.courseName}
                    </div>
                    <Link
                      className="flex justify-center items-center"
                      href={items.href}
                    >
                      <button className="text-sm text-black md:animate-pulse hover:scale-110 m-2">
                        Learn more
                      </button>
                    </Link>
                  </div>
                </RevealWrapper>
              </center>
            );
          }
        )}
      </div>
    </center>
  );
}
