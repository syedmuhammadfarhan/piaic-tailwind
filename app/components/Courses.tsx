"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Courses } from "../Data/Courses-data";
import { RevealWrapper } from "next-reveal";

export default function Courses1() {
  return (
    <center>
      <div className="max-w-fit sm:flex-wrap md:flex justify-center gap-3 mt-8 mb-16">
        {Courses.map(
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
                  reset={true}
                  viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
                >
                  <div className="border-2 rounded-3xl w-56 h-auto bg-gradient-to-r from-blue-400 to-green-300 mb-4">
                    <div className="flex items-center justify-center w-full">
                      <div className="flex h-40 w-40 rounded-full border-2 overflow-hidden mt-3 object-cover">
                        <Image
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
                      <button className="text-sm text-slate-500 md:animate-pulse hover:scale-110 m-2">
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
