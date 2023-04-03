import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="flex w-full max-w-full justify-between items-center pt-3">
      <div className="flex gap-10">
        <Image
          className="ml-5 -mb-11"
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
      <button className="hidden md:flex bg-emerald-600 m-2 mr-4 px-3.5 py-1.5 rounded-3xl text-white">
        <Link href="https://portal.piaic.org/">Apply</Link>
      </button>
      {/* mobile navbar */}
      <div className="md:hidden">
        <AiOutlineMenu size="25" />
      </div>
      <div className="md:hidden fixed left-0 top-0 w-full h-screen bg-black/90">
        <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:[45%] h-screen bg-white p-10 ease-in duration-500">
          <div className="flex justify-between">
            <Image
              src="/PIAICLogo.webp"
              alt="piaiclogo"
              width={50}
              height={50}
            />
            <AiOutlineClose />
          </div>
          <div className="text-center leading-10 py-32">
            <ul>
              <li className="hover:border-b">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:border-b">
                <Link href="/">About us</Link>
              </li>
              <li className="hover:border-b">
                <Link href="/">Contact Us</Link>
              </li>
              <li className="hover:border-b">
                <Link href="/">Apply</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
