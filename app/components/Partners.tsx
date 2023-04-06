'use client'
import Image from "next/image";
import React from "react";
import { RevealWrapper } from "next-reveal";

export default function Partners() {
  return (
    <div>
        <center>
          <h1 className="text-4xl font-bold m-6 border-b-4 border-green-300 max-w-fit">
            Strategic Partners
          </h1>
        <RevealWrapper >
          <div className="md:flex max-w-fit m-8">
            <Image
              className="mx-6"
              src="/saylaniLogo.png"
              alt="saylani"
              width={250}
              height={100}
            />
            <Image
              className="mx-6"
              src="/panacloudLogo.svg"
              alt="panacloud"
              width={100}
              height={100}
            />
          </div>
    </RevealWrapper>
        </center>
      </div>
  );
}
