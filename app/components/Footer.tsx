import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-blue-200 to-green-100 pl-3">
      <div className="flex justify-between">
        <div className="bg-white p-2 rounded-xl mr-3">
          <Link href={"https://www.facebook.com/groups/piaic/"} target="blank">
            <FaFacebook size={20} />
          </Link>
        </div>
        <div className="bg-white p-2 rounded-xl mr-3">
          <FaTwitter size={20} />
        </div>
        <div className="bg-white p-2 rounded-xl mr-3">
          <FaInstagram size={20} />
        </div>
        <div className="bg-white p-2 rounded-xl">
          <Link href={"https://www.facebook.com/groups/piaic/"} target="blank">
            <FaYoutube size={20} />
          </Link>
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
