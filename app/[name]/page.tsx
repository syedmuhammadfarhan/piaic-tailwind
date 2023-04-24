import Image from "next/image";

import {
  CommonQuarters,
  aiQuarters,
  bioQuarters,
  cncQuarters,
  iotQuarters,
  npaQuarters,
  progBanner,
  wmdQuarters,
} from "../Data/Quarters-data";
import Link from "next/link";

export default function AvailableProgramsD({
  params,
}: {
  params: { name: string };
}) {
  return (
    <div>
      <div className="md:flex md:justify-between md:h-96 bg-gradient-to-r from-blue-400 to-green-300 px-8 pb-6">
        {params.name === "wmd" && (
          <div className="md:w-2/3 py-10 md:py-20 md:pl-28">
            <h1 className="text-2xl md:text-3xl font-extrabold text-center md:text-left md:mb-3 md:pr-64 mb-4">
              {progBanner.wmdBanner.heading}
            </h1>
            <p className="text-slate-600 text-sm md:text-md text-center md:text-justify md:pr-64">
              {progBanner.wmdBanner.description}
            </p>
          </div>
        )}
        {params.name === "ai" && (
          <div className="md:w-2/3 py-10 md:py-20 md:pl-28">
            <h1 className="text-2xl md:text-3xl font-extrabold text-center md:text-left md:mb-3 md:pr-64 mb-4">
              {progBanner.aiBanner.heading}
            </h1>
            <p className="text-slate-600 text-sm md:text-md text-center md:text-justify md:pr-64">
              {progBanner.aiBanner.description}
            </p>
          </div>
        )}
        {params.name === "cnc" && (
          <div className="md:w-2/3 py-10 md:py-20 md:pl-28">
            <h1 className="text-2xl md:text-3xl font-extrabold text-center md:text-left md:mb-3 md:pr-64 mb-4">
              {progBanner.cncBanner.heading}
            </h1>
            <p className="text-slate-600 text-sm md:text-md text-center md:text-justify md:pr-64">
              {progBanner.cncBanner.description}
            </p>
          </div>
        )}
        {params.name === "iot" && (
          <div className="md:w-2/3 py-10 md:py-20 md:pl-28">
            <h1 className="text-2xl md:text-3xl font-extrabold text-center md:text-left md:mb-3 md:pr-64 mb-4">
              {progBanner.iotBanner.heading}
            </h1>
            <p className="text-slate-600 text-sm md:text-md text-center md:text-justify md:pr-64">
              {progBanner.iotBanner.description}
            </p>
          </div>
        )}
        {params.name === "bio" && (
          <div className="md:w-2/3 py-10 md:py-20 md:pl-28">
            <h1 className="text-2xl md:text-3xl font-extrabold text-center md:text-left md:mb-3 md:pr-64 mb-4">
              {progBanner.bioBanner.heading}
            </h1>
            <p className="text-slate-600 text-sm md:text-md text-center md:text-justify md:pr-64">
              {progBanner.bioBanner.description}
            </p>
          </div>
        )}
        {params.name === "npa" && (
          <div className="md:w-2/3 py-10 md:py-20 md:pl-28">
            <h1 className="text-2xl md:text-3xl font-extrabold text-center md:text-left md:mb-3 md:pr-64 mb-4">
              {progBanner.npaBanner.heading}
            </h1>
            <p className="text-slate-600 text-sm md:text-md text-center md:text-justify md:pr-64">
              {progBanner.npaBanner.description}
            </p>
          </div>
        )}
        <div className="md:w-1/2 md:flex md:justify-center items-center">
          <Image
            src="/courses-banner.png"
            alt="courses"
            height={350}
            width={350}
          />
        </div>
      </div>
      <center>
        <h2 className="text-xl md:text-2xl font-extrabold text-center mt-6">
          Common Quarters
        </h2>
        <p className="text-sm text-slate-500 text-center px-4 pt-2 leading-6">
          We will start the program by learning the fundamentals of
          Object-Oriented programming using JavaScript and TypeScript.
          <br />
          After completing the first three quarters the participants will select
          one or more specializations consisting of two courses each.
        </p>
        <div className="max-w-fit sm:flex-wrap md:flex justify-center gap-3 mt-8 mb-16">
          {CommonQuarters.map((items, i) => (
            <div
              key={i}
              className="border-2 rounded-3xl w-56 h-auto bg-gradient-to-r from-blue-400 to-green-300 mb-4"
            >
              <div className="flex items-center justify-center w-full">
                <div className="flex h-40 w-40 rounded-full border-2 overflow-hidden mt-3 justify-center items-center text-lg font-bold bg-white">
                  {items.heading}
                </div>
              </div>
              <div className="flex h-36 border-white text-sm  text-white justify-center items-center border-b-2 mt-4 mx-4">
                {items.description}
              </div>

              <div className="text-sm text-slate-500 md:animate-pulse hover:scale-110 m-2">
                Duration: 3 Weeks
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-xl md:text-2xl font-extrabold text-center mt-6">
          Specialized Tracks
        </h2>
        <p className="text-sm text-slate-500 text-center px-4 pt-2">
          After completing the first three quarters the participants will select
          one or more specializations consisting of two courses each.
        </p>
        <div className="max-w-fit sm:flex-wrap md:flex justify-center gap-3 mt-8 mb-16">
          {params.name === "wmd" &&
            wmdQuarters.map((items, i) => (
              <div
                key={i}
                className="border-2 rounded-3xl w-56 h-auto bg-gradient-to-r from-blue-400 to-green-300 mb-4"
              >
                <div className="flex items-center justify-center w-full">
                  <div className="flex h-40 w-40 rounded-full border-2 overflow-hidden mt-3 justify-center items-center text-lg font-bold bg-white">
                    {items.heading}
                  </div>
                </div>
                <div className="flex h-36 border-white text-sm  text-white justify-center items-center border-b-2 mt-4 mx-4">
                  {items.description}
                </div>

                <div className="text-sm text-slate-500 md:animate-pulse hover:scale-110 m-2">
                  Duration: 3 Weeks
                </div>
              </div>
            ))}
          {params.name === "ai" &&
            aiQuarters.map((items, i) => (
              <div
                key={i}
                className="border-2 rounded-3xl w-56 h-auto bg-gradient-to-r from-blue-400 to-green-300 mb-4"
              >
                <div className="flex items-center justify-center w-full">
                  <div className="flex h-40 w-40 rounded-full border-2 overflow-hidden mt-3 justify-center items-center text-lg font-bold bg-white">
                    {items.heading}
                  </div>
                </div>
                <div className="flex h-36 border-white text-sm  text-white justify-center items-center border-b-2 mt-4 mx-4">
                  {items.description}
                </div>

                <div className="text-sm text-slate-500 md:animate-pulse hover:scale-110 m-2">
                  Duration: 3 Weeks
                </div>
              </div>
            ))}
          {params.name === "cnc" &&
            cncQuarters.map((items, i) => (
              <div
                key={i}
                className="border-2 rounded-3xl w-56 h-auto bg-gradient-to-r from-blue-400 to-green-300 mb-4"
              >
                <div className="flex items-center justify-center w-full">
                  <div className="flex h-40 w-40 rounded-full border-2 overflow-hidden mt-3 justify-center items-center text-lg font-bold bg-white">
                    {items.heading}
                  </div>
                </div>
                <div className="flex h-36 border-white text-sm  text-white justify-center items-center border-b-2 mt-4 mx-4">
                  {items.description}
                </div>

                <div className="text-sm text-slate-500 md:animate-pulse hover:scale-110 m-2">
                  Duration: 3 Weeks
                </div>
              </div>
            ))}
          {params.name === "iot" &&
            iotQuarters.map((items, i) => (
              <div
                key={i}
                className="border-2 rounded-3xl w-56 h-auto bg-gradient-to-r from-blue-400 to-green-300 mb-4"
              >
                <div className="flex items-center justify-center w-full">
                  <div className="flex h-40 w-40 rounded-full border-2 overflow-hidden mt-3 justify-center items-center text-lg font-bold bg-white">
                    {items.heading}
                  </div>
                </div>
                <div className="flex h-36 border-white text-sm  text-white justify-center items-center border-b-2 mt-4 mx-4">
                  {items.description}
                </div>

                <div className="text-sm text-slate-500 md:animate-pulse hover:scale-110 m-2">
                  Duration: 3 Weeks
                </div>
              </div>
            ))}
          {params.name === "bio" &&
            bioQuarters.map((items, i) => (
              <div
                key={i}
                className="border-2 rounded-3xl w-56 h-auto bg-gradient-to-r from-blue-400 to-green-300 mb-4"
              >
                <div className="flex items-center justify-center w-full">
                  <div className="flex h-40 w-40 rounded-full border-2 overflow-hidden mt-3 justify-center items-center text-lg font-bold bg-white">
                    {items.heading}
                  </div>
                </div>
                <div className="flex h-36 border-white text-sm  text-white justify-center items-center border-b-2 mt-4 mx-4">
                  {items.description}
                </div>

                <div className="text-sm text-slate-500 md:animate-pulse hover:scale-110 m-2">
                  Duration: 3 Weeks
                </div>
              </div>
            ))}
          {params.name === "npa" &&
            npaQuarters.map((items, i) => (
              <div
                key={i}
                className="border-2 rounded-3xl w-56 h-auto bg-gradient-to-r from-blue-400 to-green-300"
              >
                <div className="flex items-center justify-center w-full">
                  <div className="flex h-40 w-40 rounded-full border-2 overflow-hidden mt-3 justify-center items-center text-lg font-bold bg-white">
                    {items.heading}
                  </div>
                </div>
                <div className="flex h-36 border-white text-sm  text-white justify-center items-center border-b-2 mt-4 mx-4">
                  {items.description}
                </div>

                <div className="text-sm text-slate-500 md:animate-pulse hover:scale-110 m-2">
                  Duration: 3 Weeks
                </div>
              </div>
            ))}
        </div>
      </center>
      <center className="md:flex justify-center items-center gap-2 mb-20">
        <div className="text-xs md:text-sm text-slate-500 pb-4 md:pb-0">
          To View Detailed Syllabus{" "}
        </div>
        <div className="text-blue-500 shadow-inner max-w-fit shadow-slate-400 px-2 py-1 rounded-2xl md:hover:scale-105 text-xs md:text-md">
          <Link
            href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit"
            target="_blank"
          >
            Click Here
          </Link>
        </div>
      </center>
    </div>
  );
}
