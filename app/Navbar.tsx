import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="flex bg-slate-400 justify-between">
        <div className="flex gap-40">
          <Image src="/PIAICLogo.webp" alt="piaiclogo" width={50} height={50}/>
          <ul className="flex gap-10">
            <li>Home</li>
            <li>About us</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <>Apply</>
      </div>
    </div>
  );
}
