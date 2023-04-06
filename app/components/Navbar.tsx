"use client";
import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [mobNav, setMobNav] = useState(false);

  return (
    <div className="flex w-full max-w-full justify-between items-center">
      <div className="flex gap-10 mt-1">
        <div className="hidden md:flex ml-5 md:-mb-11">
          <Image src="/PIAICLogo.webp" alt="piaiclogo" width={60} height={60} />
        </div>
        <RevealWrapper className="items-center flex"
          // rotate={{ x: 12, y: 40, z: 0 }}
          origin="right"
          delay={200}
          duration={1000}
          distance="1000px"
          reset={true}
          // viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
        >
          <ul className="hidden md:flex gap-10 items-center">
            <li className="hover:border-b-2 border-green-500 text-sm">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:border-b-2 border-green-500 text-sm">
              <Link href="/">About</Link>
            </li>
            <li className="hover:border-b-2 border-green-500 text-sm">
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </RevealWrapper>
      </div>
      <button className="hover:scale-95 hidden md:flex bg-emerald-600 m-2 mr-3 px-5 py-2 rounded-full text-white text-sm hover:bg-green-500">
        <Link href="https://portal.piaic.org/">Apply</Link>
      </button>

      {/* mobile navbar */}
      <div
        onClick={() => setMobNav(!mobNav)}
        className="md:hidden hover:drop-shadow-md"
      >
        <AiOutlineMenu size="25" className="cursor-pointer mr-1.5 m-1.5" />
      </div>

      {mobNav && (
        <div className="md:hidden fixed left-0 top-0 w-full h-screen bg-black/70">
          <div className="fixed right-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-gradient-to-r from-blue-200 to-green-100 p-4 ease-in duration-500">
            <div className="flex justify-between">
              <Image
                src="/PIAICLogo.webp"
                alt="piaiclogo"
                width={40}
                height={40}
              />
              <AiOutlineClose
                onClick={() => setMobNav(!mobNav)}
                className="cursor-pointer"
              />
            </div>
            <div className="text-center leading-10 py-24">
              <ul>
                <li onClick={() => setMobNav(!mobNav)}>
                  <Link href="/">Home</Link>
                </li>
                <li onClick={() => setMobNav(!mobNav)}>
                  <Link href="/">About</Link>
                </li>
                <li onClick={() => setMobNav(!mobNav)}>
                  <Link href="/">Contact</Link>
                </li>
                <li onClick={() => setMobNav(!mobNav)}>
                  <Link href="https://portal.piaic.org/">Apply</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
