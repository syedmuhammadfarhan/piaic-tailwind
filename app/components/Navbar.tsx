"use client";
import { RevealWrapper } from "next-reveal";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineDoubleRight,
  AiOutlineMenu,
} from "react-icons/ai";

const navItems = [
  {
    navList: "Home",
    href: "./",
  },
  {
    navList: "About",
    href: "./About",
  },
  {
    navList: "How It Works",
    href: "./HowItWorks",
  },
];

const programsArray = [
  {
    programList: "Web 3.0 & Metaverse",
    href: "./wmd",
  },
  {
    programList: "Artificial Intelligence & Deep Learning",
    href: "./wmd",
  },
  {
    programList: "Cloud-Native Computing",
    href: "./wmd",
  },
  {
    programList: "Ambient Computing & IoT",
    href: "./wmd",
  },
  {
    programList: "Genomics & Bioinformatics",
    href: "./wmd",
  },
  {
    programList: "Network Programmability & Automation",
    href: "./wmd",
  },
];

export default function Navbar() {
  const [mobNav, setMobNav] = useState(false);
  const [proMenu, setProMenu] = useState(false);

  return (
    <div className="flex w-full max-w-full justify-between items-center bg-gradient-to-r from-green-200 to-white">
      <RevealWrapper>
        <div className="flex gap-10 mt-1">
          <div className="hidden md:flex ml-5 md:-mb-11">
            <Image
              src="/PIAICLogo.webp"
              alt="piaiclogo"
              width={60}
              height={60}
            />
          </div>
          <RevealWrapper
            className="items-center flex"
            // rotate={{ x: 12, y: 40, z: 0 }}
            origin="right"
            delay={200}
            duration={1000}
            distance="1000px"
            reset={false}
            // viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
          >
            <ul className="hidden md:flex gap-10 items-center">
              {navItems.map((items: { navList: string; href: string }, i) => {
                return (
                  <li
                    key={i}
                    className="hover:border-b-2 border-green-600 text-sm font-semibold"
                  >
                    <Link href={items.href}>{items.navList}</Link>
                  </li>
                );
              })}
              <li className="hover:border-b-2 border-green-600 text-sm font-semibold">
                <div onClick={() => setProMenu(!proMenu)}>
                  Available Programs
                </div>
              </li>
            </ul>
          </RevealWrapper>
        </div>
      </RevealWrapper>

      {/* Available Programs Menu */}

      {proMenu && (
        <div className="fixed w-screen h-screen top-12"
          onClick={() => setProMenu(!proMenu)}>
          <div
            className="bg-gradient-to-r from-blue-400 to-green-300 h-auto w-auto top-12 fixed left-96 px-3 py-2"
            onClick={() => setProMenu(!proMenu)}
          >
            {programsArray.map((items) => {
              return (
                <div className="flex p-2 text-sm">
                  <Link href={items.href}>{items.programList}</Link>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Available Programs Menu End */}

      <button className="hover:scale-95 hidden md:flex bg-emerald-600 m-2 mr-3 px-4 py-2 rounded-full text-white text-sm hover:bg-green-500">
        <Link
          className="flex items-center gap-1"
          href="https://portal.piaic.org/"
        >
          Apply
          <AiOutlineDoubleRight size={13} />
        </Link>
      </button>

      {/* Hamburger */}
      <div onClick={() => setMobNav(!mobNav)} className="md:hidden">
        <AiOutlineMenu size="25" className="cursor-pointer mr-1.5 m-1.5" />
      </div>

      {/* onClick Hamburger menu */}

      {mobNav && (
        <div
          className="md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
          onClick={() => setMobNav(!mobNav)}
        >
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
            <div className="text-center leading-10 py-10">
              <ul>
                {navItems.map((items: { navList: string; href: string }, i) => (
                  <li onClick={() => setMobNav(!mobNav)} key={i}>
                    <Link href={items.href}>{items.navList}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
