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
import { navItems, programsArray } from "../Data/NavBar-data";

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
            distance="4000px"
            reset={false}
            // viewOffset={{ top: 25, right: 0, bottom: 10, left: 5 }}
          >
            <div className="hidden md:flex gap-10 items-center">
              {navItems.map((items: { navList: string; href: string }, i) => {
                return (
                  <div
                    key={i}
                    className="hover:border-b-2 border-green-600 text-xs font-bold"
                    onClick={() => setProMenu(false)}
                  >
                    <Link href={items.href}>{items.navList}</Link>
                  </div>
                );
              })}

              <div
                className="hover:border-b-2 border-green-600 text-xs font-bold cursor-pointer "
                onClick={() => setProMenu(!proMenu)}
              >
                Available Programs
                {proMenu && (
                  
                  <div
                    className="bg-gradient-to-r from-blue-400 to-green-300 h-auto w-72 fixed top-[2.4rem] left-[69] py-2 "
                    onMouseLeave={() => setProMenu(false)}
                  >
                    {programsArray.map((items, i) => {
                      return (
                        <div
                          key={i}
                          className="flex p-2 text-xs hover:bg-sky-500 font-normal"
                        >
                          <Link href={items.href}>{items.programList}</Link>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </RevealWrapper>
        </div>
      </RevealWrapper>

      <button className="hover:scale-95 hidden md:flex bg-emerald-600 m-2 mr-3 px-3 py-[0.4rem] rounded-full text-white text-xs hover:bg-green-500">
        <Link
          className="flex items-center gap-1"
          href="https://portal.piaic.org/"
        >
          Apply
          <AiOutlineDoubleRight size={11} />
        </Link>
      </button>

      {/* Hamburger icon*/}
      <div onClick={() => setMobNav(!mobNav)} className="md:hidden">
        <AiOutlineMenu size="25" className="cursor-pointer mr-1.5 m-1.5" />
      </div>

      {/* onClick Hamburger menu items*/}

      {mobNav && (
        <div className="fixed md:hidden left-0 top-0 w-full h-screen bg-black/70">
          <div className="fixed z-20 right-0 top-0 w-[100%] sm:w-[60%] md:[45%] h-screen bg-gradient-to-r from-blue-400 to-green-300 p-4 ease-in duration-500">
            <div className="flex justify-between">
              <Image
                src="/PIAICLogo.webp"
                alt="piaiclogo"
                width={40}
                height={40}
              />
              <AiOutlineClose
                onClick={() => {
                  setProMenu(false);
                  setMobNav(!mobNav);
                }}
                className="cursor-pointer"
              />
            </div>
            <div className="leading-10 pt-10 text-sm font-bold">
              <ul>
                {navItems.map((items: { navList: string; href: string }, i) => (
                  <li
                    onClick={() => {
                      setMobNav(!mobNav);
                      setProMenu(false);
                    }}
                    key={i}
                  >
                    <Link href={items.href}>{items.navList}</Link>
                  </li>
                ))}
                <li className="text-sm leading-10">
                  <div
                    onClick={() => {
                      setProMenu(!proMenu);
                    }}
                  >
                    Available Programs
                  </div>
                </li>
              </ul>
            </div>
            {proMenu && (
              <ul>
                {programsArray.map((items, i) => (
                  <div
                    key={i}
                    className="border-b-2 border-slate-300 text-xs flex justify-start items-center leading-6"
                    onClick={() => setMobNav(!mobNav)}
                  >
                    <li
                      onClick={() => {
                        setProMenu(!proMenu);
                      }}
                    >
                      <Link href={items.href}>{items.programList}</Link>
                    </li>
                  </div>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
