import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ReactNode } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";
import { navItems, programsArray } from "../Data/NavBar-data";
import { FcCallback } from "react-icons/fc";
import { cityList } from "../Data/HowItWorks-data";

export const SocialButton = ({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) => {
  return (
    <Link
      href={href}
      target="blank"
      className="bg-white p-2 rounded-xl mr-1 hover:scale-110"
    >
      {children}
    </Link>
  );
};

// export default function Footer() {
//   return (
//     <div className="flex justify-between items-center bg-gradient-to-r from-blue-300 to-green-200 pl-3">
//       <div className="flex justify-between">
//         <div className="bg-white p-2 rounded-xl mr-1 hover:scale-110">
//           <Link href={"https://www.facebook.com/groups/piaic/"} target="blank">
//             <FaFacebook size={13} />
//           </Link>
//         </div>
//         <div className="bg-white p-2 rounded-xl mr-1 hover:scale-110">
//           <Link
//             href={
//               "https://twitter.com/piaicofficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
//             }
//             target="blank"
//           ></Link>
//           <FaTwitter size={13} />
//         </div>
//         <div className="bg-white p-2 rounded-xl mr-1 hover:scale-110">
//           <Link
//             href={"https://www.instagram.com/piaicofficial/?hl=en"}
//             target="blank"
//           >
//             <FaInstagram size={13} />
//           </Link>
//         </div>
//         <div className="bg-white p-2 rounded-xl hover:scale-110">
//           <Link
//             href={"https://www.youtube.com/channel/UC2Makv_pLAtvrjHNgg-pBLg"}
//             target="blank"
//           >
//             <FaYoutube size={13} />
//           </Link>
//         </div>
//       </div>
//       <div>
//         <p className="text-xs mx-3 pt-2">Powered by</p>

//         <Image
//           className="mx-2"
//           src={"/panacloudFooter.png"}
//           alt="panacloud"
//           width={80}
//           height={80}
//         />
//       </div>
//     </div>
//   );
// }

export default function Footer() {
  return (
    <div>
      <div className="py-10 pl-[0.6rem] md:px-12 md:flex bg-gradient-to-r from-green-200 to-white">
        <div className="basis-1/2">
          <h2 className="text-sm border-b-2 border-green-400 max-w-fit mb-2">
            Navigation
          </h2>
          <ul>
            {navItems.map((items, i) => {
              return (
                <li key={i} className="text-xs leading-5">
                  <Link href={items.href}>{items.navList}</Link>
                </li>
              );
            })}
          </ul>
          <h3 className="text-sm border-b-2 border-green-400 max-w-fit mb-2 mt-4">
            Available Programs
          </h3>
          <ul>
            {programsArray.map((items, i) => {
              return (
                <li key={i} className="text-xs leading-5">
                  <Link href={items.href}>{items.programList}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h2 className="basis-1/2 text-sm border-b-2 border-green-400 max-w-fit mb-2 mt-4">
            Locations
          </h2>
          <ul>
            {cityList.map((items, i) => {
              return (
                <li key={i} className="text-xs leading-5">
                  {items.cityName}
                </li>
              );
            })}
          </ul>
          <h2 className="basis-1/2 text-sm border-b-2 border-green-400 max-w-fit mb-2 mt-4">
            PIAIC Helpline
          </h2>
          <p className="text-xs flex gap-2 mt-4">
            <FcCallback size={20} />
            +92-308-2220203 (WhatsApp as well)
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center bg-gradient-to-r from-green-200 to-white pl-3">
        <div className="flex justify-between">
          <SocialButton href={"https://www.facebook.com/groups/piaic/"}>
            <FaFacebook size={13} />
          </SocialButton>
          <SocialButton
            href={
              "https://twitter.com/piaicofficial?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
            }
          >
            <FaTwitter size={13} />
          </SocialButton>
          <SocialButton href={"https://www.instagram.com/piaicofficial/?hl=en"}>
            <FaInstagram size={13} />
          </SocialButton>
          <SocialButton
            href={"https://www.youtube.com/channel/UC2Makv_pLAtvrjHNgg-pBLg"}
          >
            <FaYoutube size={13} />
          </SocialButton>
        </div>
        <div>
          <p className="text-xs mx-3 pt-2">Powered by</p>

          <Image
            className="mx-2"
            src={"/panacloudFooter.png"}
            alt="panacloud"
            width={80}
            height={80}
          />
        </div>
      </div>
    </div>
  );
}
