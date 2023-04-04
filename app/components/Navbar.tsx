"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [mobNav, setMobNav] = useState(false);

  return (
    <div className="flex w-full max-w-full justify-between items-center mt-3">
      <div className="flex gap-10">
        <Image
          className="ml-5 md:-mb-11"
          src="/PIAICLogo.webp"
          alt="piaiclogo"
          width={70}
          height={70}
        />
        <ul className="hidden md:flex gap-10 items-center">
          <li className="hover:border-b">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:border-b">
            <Link href="/">About us</Link>
          </li>
          <li className="hover:border-b">
            <Link href="/">Contact Us</Link>
          </li>
        </ul>
      </div>
      <button className="hidden md:flex bg-emerald-600 m-2 mr-4 px-5 py-2 rounded-full text-white text-sm hover:bg-green-500">
        <Link href="https://portal.piaic.org/">Apply</Link>
      </button>

      {/* mobile navbar */}
      <div onClick={() => setMobNav(!mobNav)} className="md:hidden">
        <AiOutlineMenu size="25" className="cursor-pointer" />
      </div>

      {mobNav && (
        <div className="md:hidden fixed left-0 top-0 w-full h-screen bg-black/70">
          <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-white p-10 ease-in duration-500">
            <div className="flex justify-between">
              <Image
                src="/PIAICLogo.webp"
                alt="piaiclogo"
                width={50}
                height={50}
              />
              <AiOutlineClose
                onClick={() => setMobNav(!mobNav)}
                className="cursor-pointer"
              />
            </div>
            <div className="text-center leading-10 py-32">
              <ul>
                <li
                  onClick={() => setMobNav(!mobNav)}
                  className="hover:border-b"
                >
                  <Link href="/">Home</Link>
                </li>
                <li
                  onClick={() => setMobNav(!mobNav)}
                  className="hover:border-b"
                >
                  <Link href="/">About us</Link>
                </li>
                <li
                  onClick={() => setMobNav(!mobNav)}
                  className="hover:border-b"
                >
                  <Link href="/">Contact Us</Link>
                </li>
                <li
                  onClick={() => setMobNav(!mobNav)}
                  className="hover:border-b"
                >
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
