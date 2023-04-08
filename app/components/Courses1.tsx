import Image from "next/image";
import React from "react";

export default function Courses1() {
  return (
    <div>
      <center>
        <div className="shadow-green-500 border-slate-500 border-1 rounded-3xl  w-64 h-auto overflow-hidden bg-gradient-to-r from-blue-300 to-green-200 px-4">
          <div className="flex w-full h-1/2 items-center justify-center">
            <div className="h-32 w-32 rounded-full border-2 overflow-hidden mt-3">
              <Image
                src="/web3.jpeg"
                alt=""
                width={200}
                height={200}
                className="object-fill"
              />
            </div>
          </div>
          <div className="h-1/2 flex w-full border-white text-4xl text-white font-bold items-center justify-center py-4 border-b-2">
            WEB 3.0 & METAVERSE DEVELOPER
          </div>
          <div className="flex justify-center items-center p-2">
            <button className="text-sm text-white md:animate-pulse">
              Learn more
            </button>
          </div>
        </div>
      </center>
    </div>
  );
}
