import Image from "next/image";
import React from "react";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillTwitterSquare } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-blue-200 to-green-100 pl-3">
      <div className="flex justify-between">
        <div>
          <AiFillFacebook size={30} />
        </div>
        <div>
          <AiFillTwitterSquare size={30} />
        </div>
        <div>
          <AiFillInstagram size={30} />
        </div>
        <div>
          <AiFillYoutube size={30} />
        </div>
      </div>
      <div>
        <p className="text-xs mx-6 pt-2">Powered by</p>

        <Image
          className="mx-2"
          src={"/panacloudFooter.png"}
          alt="panacloud"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}
