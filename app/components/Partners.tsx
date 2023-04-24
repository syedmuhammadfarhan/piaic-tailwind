"use client";
import Image from "next/image";
import React from "react";
import { RevealWrapper } from "next-reveal";

export default function Partners() {
  return (
    <center>
      <h1 className="text-xl md:text-2xl font-extrabold pt-20 mb-10 max-w-fit px-8">
        Strategic Partners
      </h1>

      <RevealWrapper mobile={false} reset={false}>
        <div className="md:flex justify-center pb-10">
          <Image
            className="mb-8"
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
  );
}
