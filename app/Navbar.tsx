import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (

    <div className="flex bg-slate-400 justify-between items-center pt-3">
      <div className="flex gap-10">
        <Image className="ml-5 -mb-11" src="/PIAICLogo.webp" alt="piaiclogo" width={70} height={70} />
        <ul className="flex gap-10 items-center">
          <li><a href="/">Home</a></li>
          <li><a href="/">About us</a></li>
          <li><a href="/">Contact Us</a></li>
        </ul>
      </div>
      <button className="bg-emerald-600 m-2 mr-4 px-3.5 py-1.5 rounded-3xl text-white">Apply</button>
    </div>

  );
}
