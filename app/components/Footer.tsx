import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ReactNode } from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

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
  );
}
