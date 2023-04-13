import React from "react";
import Image from "next/image";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function HowItWorks() {
  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-600">
      <div className=" max-w-[80%]">
        <center>
          <h1 className="text-3xl font-bold mt-14 mb-20 max-w-fit">
            How It Works
          </h1>
        </center>
        <div className="flex justify-left items-center gap-10 my-16">
          <div className="flex justify-center items-center w-14 h-14 rounded-full  bg-green-400 text-white text-9xl">
            1
          </div>
          <div className="w-10 h-10 rounded-full border- flex justify-center items-center">
            <AiOutlineArrowRight size="20" color="white" />
          </div>
          <div className="px-16">
            <p>
              PIAIC will launch classes in the following locations, one city at
              a time, in the following order
            </p>
          </div>
        </div>
        <div className=" max-w-[80%] flex justify-between">
          <div className="my-16">
            <Image src="/pakmap.png" alt="" height="300" width="300" />
          </div>
          <div className="pt-20 mb-10">
            <center>City by City Roadmap</center>
            <div className="flex gap-4 mt-6">
              <div>1</div>
              <div className="bg-white py-1 pl-1 pr-20 text-xs">Karachi</div>
              <div>Accepting Applications</div>
            </div>
            <div className="flex gap-4">
              <div>2</div>
              <div>Islamabd</div>
              <div>Accepting Applications</div>
            </div>
            <div className="flex gap-4">
              <div>3</div>
              <div>Lahore</div>
              <div>Accepting Applications</div>
            </div>
            <div className="flex gap-4">
              <div>4</div>
              <div>Peshawar</div>
              <div>Accepting Applications</div>
            </div>
          </div>
        </div>

        <div className="bg-slate-300">
          <div className="flex justify-left gap-10">
            <div className="flex justify-center items-center w-14 h-14 rounded-full  bg-green-400 text-white text-9xl  ">
              2
            </div>
            <div className="w-10 h-10 rounded-full border- flex justify-center items-center">
              <AiOutlineArrowRight size="20" color="white" />
            </div>

            <div>
              <div className=" pl-16 pb-10 border-slate-400 border-b-2">
                <p>
                  To participate in the program and become eligible for the most
                  prestigious credentials for AI, Cloud and Blockchain
                  technologies in the world, students must complete the
                  following process
                </p>
              </div>
              <div className="flex justify-left p-16">
                <ul>
                  <li>1- Signup at PIAIC Portal. Click Here</li>
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

        <div className="flex justify-left items-center gap-10 my-16">
          <div className="flex justify-center items-center w-14 h-14 rounded-full  bg-green-400 text-white text-9xl">
            3
          </div>
          <div className="w-10 h-10 rounded-full border- flex justify-center items-center">
            <AiOutlineArrowRight size="20" color="white" />
          </div>
          <div className="pl-16 flex">
            <p className="text-justify">
              All programs are one year long in duration. Each program is
              divided into four quarters (12 weeks each). Classes are held once
              a week. In the initial stages, classes will be held only on
              Sundays. There will 6 sections of classes available, including
              Artificial Intelligence, Cloud Native and Mobile Web Computing,
              Blockchain, Internet of Things, 5G and Software Defined Networking
              and Quantum Computing . Each class will be 3 hours in duration per
              week, for a total of 36 hours per quarter or 144 hours for the
              entire year.
            </p>
          </div>
        </div>

        <div className="flex justify-left items-center gap-10 my-16">
          <div className="flex justify-center items-center w-14 h-14 rounded-full  bg-green-400 text-white text-9xl">
            4
          </div>
          <div className="w-10 h-10 rounded-full border- flex justify-center items-center">
            <AiOutlineArrowRight size="20" color="white" />
          </div>
          <div className="pl-16 flex">
            <p className="text-justify">
              Those students who wish to participate in the program online can
              check the distance learning option in the application form. Please
              note that distance learning students must also take proctored
              exams on site, just like the onsite students. The fee structure
              for onsite students is PKR 1,000 per month for 12 months, payable
              in 4 installments of PKR 3,000, before the start of each quarter.
              The fee structure for distance learning students is PKR 500 per
              month for 12 months, payable in 4 installments of PKR 1,500,
              before the start of each quarter.
            </p>
          </div>
        </div>

        <div className="flex justify-left items-center gap-10 my-16">
          <div className="flex justify-center items-center w-14 h-14 rounded-full  bg-green-400 text-white text-9xl">
            5
          </div>
          <div className="w-10 h-10 rounded-full border- flex justify-center items-center">
            <AiOutlineArrowRight size="20" color="white" />
          </div>
          <div className="pl-16 flex">
            <p className="text-justify">
              Please note, all fees will be collected by Saylani Welfare Trust,
              the most trusted NGO in Pakistan. Saylani has strict audit
              processes already in place to ensure proper accountability of
              funds.
            </p>
          </div>
        </div>
        <div className="flex justify-left items-center gap-10 my-16">
          <div className="flex justify-center items-center w-14 h-14 rounded-full  bg-green-400 text-white text-9xl">
            6
          </div>
          <div className="w-10 h-10 rounded-full border- flex justify-center items-center">
            <AiOutlineArrowRight size="20" color="white" />
          </div>
          <div className="pl-16 flex">
            <p className="text-justify">
              Please note, this is a highly prestigious program. Due to the high
              level of difficulty, only 10% of students will be awarded the
              PIAIC certifications.
            </p>
          </div>
        </div>
        <div className="flex justify-left items-center gap-10 my-16">
          <div className="flex justify-center items-center w-14 h-14 rounded-full  bg-green-400 text-white text-9xl">
            7
          </div>
          <div className="w-10 h-10 rounded-full border- flex justify-center items-center">
            <AiOutlineArrowRight size="20" color="white" />
          </div>
          <div className="pl-16 flex">
            <p className="text-justify">
              For questions related to admissions, you may call us on the PIAIC
              Helpline: +92-308-2220203 between 10 AM - 6 PM.
              <br />
              Please note we are closed on Fridays.
              <br />
              For technical questions related to coursework, you may contact us
              via email at education@piaic.org.
            </p>
          </div>
        </div>
        <div className="w-80 h-80 bg-slate-300 flex justify-center items-center relative">
          1
          <div className="w-60 h-60 bg-yellow-300 flex justify-center items-center absolute bottom-0 right-0">
            2
            <div className="w-40 h-40 bg-green-300 flex justify-center items-center absolute top-0 right-0">
              3
              <div className="w-20 h-20 bg-orange-300 absolute top-0 left-0">
                4
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
