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
      {imagesArray.map((items: items, i: number) => {
        return (
          <div key={i} className="flex">
            <div>
              <Image
                src={items.image}
                alt={items.image}
                width={200}
                height={200}
              />
            </div>
            <div>
              <h2>{items.heading}</h2>
              <div>{items.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
