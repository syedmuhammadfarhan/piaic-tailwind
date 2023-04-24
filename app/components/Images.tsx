import React from "react";
import { imagesArray } from "../Data/Image-data";
import Image from "next/image";

interface items {
  image: string;
  heading: string;
  description: string;
}

export default function Images() {
  return (
    <div>
      <h1 className="text-xl md:text-2xl font-extrabold mt-14 mb-8 text-center px-8">
        Images
      </h1>

      <div>
        {imagesArray.map((items: items, i: number) => {
          return (
            <div
              key={i}
              className="md:flex flex-between justify-center items-center bg-slate-200 border-4 border-black"
            >
              <div className="basis-1/2 flex justify-center items-center border-2 border-red-400 p-1">
                <div className="border-2 border-green-400 md:h-[24rem] md:w-[35rem] overflow-hidden flex">
                  <Image
                    className="object-cover"
                    src={items.image}
                    alt={items.image}
                    width={560}
                    height={100}
                  />
                </div>
              </div>
              <div className="basis-1/2 flex flex-col justify-center items-center text-justify p-4 md:p-32 border-2 border-blue-500 md:h-[24rem] md:w-[35rem]">
                <h2 className="text-lg md:text-xl font-extrabold">{items.heading}</h2>
                <div className="text-xs md:text-sm">{items.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
