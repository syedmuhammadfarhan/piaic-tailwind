import Image from "next/image";
import React from "react";

export default function Partners() {
  return (
    <div>
      <center>
        <h1 className="text-4xl font-bold m-6 border-b-8 border-green-300 max-w-fit">
          Strategic Partners
        </h1>
        <div className="flex max-w-fit m-8">
          <Image
            className="m-6"
            src="/saylaniLogo.png"
            alt="saylani"
            width={250}
            height={100}
          />
          <Image
            className="m-6"
            src="/panacloudLogo.svg"
            alt="panacloud"
            width={100}
            height={100}
          />
        </div>
      </center>
    </div>
  );
}
