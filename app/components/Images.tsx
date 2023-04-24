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
      <h1 className="text-xl md:text-2xl font-extrabold mt-14 mb-8 text-center px-8 ">
        Images
      </h1>

      <div>
        {imagesArray.map((items: items, i: number) => {
          return (
            <div
              key={i}
              className="md:flex flex-between justify-center items-center p-2 bg-gradient-to-r from-green-200 to-white pt-10"
            >
              <div className="basis-1/2 flex justify-center items-center">
                <div className="md:h-[24rem] md:w-[35rem] overflow-hidden flex">
                  <Image
                    className="object-cover border-8 border-white shadow-2xl"
                    src={items.image}
                    alt={items.image}
                    width={560}
                    height={100}
                  />
                </div>
              </div>
              <div className="basis-1/2 flex flex-col justify-center items-center text-justify p-4 md:p-32 md:h-[24rem] md:w-[35rem]">
                <h2 className="text-lg md:text-xl font-extrabold">
                  {items.heading}
                </h2>
                <div className="text-xs md:text-sm mt-2">
                  <p className="leading-6">{items.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
