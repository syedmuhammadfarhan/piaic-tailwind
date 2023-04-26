import React from "react";
import Image from "next/image";
import { AiOutlineArrowDown, AiOutlineArrowRight } from "react-icons/ai";
import Link from "next/link";
import { cityList, mainList } from "../../Data/HowItWorks-data";

export default function HowItWorks() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-600">
      <div className="max-w-[80%]">
        <center>
          <h1 className="text-3xl font-bold mt-14 mb-20 max-w-fit border-b-2 border-green-400">
            How It Works
          </h1>
        </center>

        <div className="flex flex-col md:flex-row md:justify-left items-center gap-10 my-16">
          <div className="text-white text-9xl pr-[0.5rem]">1</div>
          <div className="hidden md:flex">
            <AiOutlineArrowRight size="20" color="white" />
          </div>
          <div className="flex md:hidden pl-[0.3rem]">
            <AiOutlineArrowDown size="20" color="white" />
          </div>
          <div className="flex flex-col justify-center items-center md:flex-row md:justify-start text-justify text-sm md:text-md">
            <p>
              PIAIC will launch classes in the following locations, one city at
              a time, in the following order
            </p>
          </div>
        </div>

        <div className="lg:max-w-[80%] flex flex-col md:flex-row justify-between">
          <div className="flex justify-center items-center my-8">
            <Image src="/pakmap.png" alt="" height="300" width="300" />
          </div>
          <div className="pt-20 mb-10">
            <div className="font-bold  flex items-center justify-center md:justify-start">
              <p className="border-b-2 border-green-300">
                City by City Roadmap
              </p>
            </div>
            {cityList.map((items, i) => {
              return (
                <div
                  className="flex gap-4 mt-6 justify-center items-center"
                  key={i}
                >
                  <h2>{items.listitem}</h2>
                  <p className="bg-slate-300 py-1 pl-1 text-sm w-24">
                    {items.cityName}
                  </p>
                  <p className="text-xs">{items.status}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="flex flex-col md:flex-row md:justify-left items-center gap-10 my-16">
            <div className="flex justify-center items-center text-white text-9xl">
              2
            </div>
            <div className="hidden md:flex">
              <AiOutlineArrowRight size="20" color="white" />
            </div>
            <div className="flex md:hidden">
              <AiOutlineArrowDown size="20" color="white" />
            </div>
            <div className="flex flex-col justify-center md:justify-star">
              <div className="pb-10 border-slate-400 border-b-2 text-justify text-sm md:text-md">
                <p>
                  To participate in the program and become eligible for the most
                  prestigious credentials for AI, Cloud and Blockchain
                  technologies in the world, students must complete the
                  following process
                </p>
              </div>

              <div className="text-justify pt-10 text-sm md:text-md">
                <ul>
                  <li>
                    1- Signup at PIAIC Portal.{" "}
                    <Link
                      href={"https://portal.piaic.org/signup"}
                      className="text-blue-700"
                    >
                      Click Here
                    </Link>
                  </li>
                  <li>2- Submit the online application.</li>
                  <li>
                    3- Pass the entrance exam which consists of multiple choice
                    English and Mathematics questions. Results are determined
                    based on percentile.
                  </li>

                  <li>
                    4- Pass all PIAIC exams with an average score of at least
                    70%.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {mainList.map((items, i) => {
          return (
            <div
              className="flex flex-col md:flex-row md:justify-left items-center gap-10 my-16"
              key={i}
            >
              <div className="flex justify-left items-center w-48 max-w-fit  text-white text-9xl">
                <p>{items.listnumber}</p>
              </div>
              <div className="hidden md:flex">
                <AiOutlineArrowRight size="20" color="white" />
              </div>
              <div className="flex md:hidden">
                <AiOutlineArrowDown size="20" color="white" />
              </div>
              <div className="flex flex-col justify-center items-center md:flex-row md:justify-start">
                <p className="text-justify flex justify-center items-center text-sm md:text-md">
                  {items.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
