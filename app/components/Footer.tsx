import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex justify-between items-center bg-gradient-to-r from-blue-200 to-green-100 pl-3">
      <div className="flex justify-between">
        <div className="bg-white p-2 rounded-xl mr-3 hover:scale-110">
          <Link href={"https://www.facebook.com/groups/piaic/"} target="blank">
            <FaFacebook size={15} />
          </Link>
        </div>
        <div className="bg-white p-2 rounded-xl mr-3 hover:scale-110">
          <Link
            href={
              "https://twitter.com/piaicofficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            }
            target="blank"
          ></Link>
          <FaTwitter size={15} />
        </div>
        <div className="bg-white p-2 rounded-xl mr-3 hover:scale-110">
          <Link
            href={"https://www.instagram.com/piaicofficial/?hl=en"}
            target="blank"
          >
            <FaInstagram size={15} />
          </Link>
        </div>
        <div className="bg-white p-2 rounded-xl hover:scale-110">
          <Link
            href={"https://www.youtube.com/channel/UC2Makv_pLAtvrjHNgg-pBLg"}
            target="blank"
          >
            <FaYoutube size={15} />
          </Link>
        </div>
      </div>
      <div>
        <p className="text-xs mx-4 pt-2">Powered by</p>

        <Image
          className="mx-2"
          src={"/panacloudFooter.png"}
          alt="panacloud"
          width={80}
          height={80}
        />
      </div>
    </div>
  );
}
