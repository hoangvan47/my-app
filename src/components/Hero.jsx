import React from "react";
import { DiGoogleDrive } from "react-icons/di";
import { DiUbuntu } from "react-icons/di";
import { DiPhotoshop } from "react-icons/di";
const Hero = () => {
  const hero = [
    {
      id: 1,
      imageURL: <DiGoogleDrive />,
      title: "20 Courses",
      description: "UI/UX Design",
    },
    {
      id: 2,
      imageURL: <DiUbuntu />,
      title: "20 Courses",
      description: "Development",
    },
    {
      id: 3,
      imageURL: <DiPhotoshop />,
      title: "30 Courses",
      description: "Marketing",
    },
  ];

  return (
    <div className=" bg-[#FFFCF4]">
      <div className="w-[1170px] flex mx-auto pt-11 pb-16">
        {/* media-block */}
        <div className="w-[570px] relative">
          <img
            src="img/fix-avatar.jpeg"
            alt="Lesson"
            className="rounded-2xl "
          />
          <div className="w-[270px] items-center p-6 bg-white rounded-l-xl absolute right-0 bottom-12">
            {hero.map((item) => (
              <div className="flex items-center py-[14px]" key={item.id}>
                <div className="w-12 h-12 p-3 rounded-full bg-[#FFF9E8] flex items-center justify-center">
                  {item.imageURL}
                </div>
                <div className="ml-4">
                  <div className="font-normal text-sm leading-6 text-gray-400 ">
                    {item.title}
                  </div>
                  <div className="font-semibold text-lg leading-7 text-black">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* content-Block */}
        <div className="w-[600px] mt-16 ml-32">
          <div className="font-bold text-[58px] leading-[68px] text-black ">
            Learn without limits and spread knowledge.
          </div>
          <div className="mt-6 font-normal text-lg leading-[30px] text-[#5F5B53] w-[470px]">
            Build new skills for that “this is my year” feeling with courses,
            certificates, and degrees from world-class universities and
            companies.
          </div>
          <div className="mt-9 flex item-center">
            <button className="w-[180px] px-8 py-4 bg-[#FFB900] text-white rounded-[32px]">
              See Courses
            </button>
            <div className="ml-7 flex items-center">
              <img
                src="img/play.svg"
                className="w-10 h-10 p-[14px] bg-white rounded-full "
                alt="play"
              />
              <div className="ml-3 font-semibold text-lg leading-7 text-black">
                Watch Video
              </div>
            </div>
          </div>
          <div className="mt-12 font-normal text-lg leading-8 text-[#5F5B53]">
            Recent engagement
          </div>
          <div className="mt-2 flex items-center">
            <div className="font-normal text-lg leading-8 text-[#5F5B53]">
              <strong className="font-bold text-[44px] leading-[54[px] text-[#171100]">
                50K
              </strong>
              Students
            </div>
            <div className="ml-7 font-normal text-lg leading-8 text-[#5F5B53]">
              <strong className="font-bold text-[44px] leading-[54[px] text-[#171100]">
                70+
              </strong>
              Courses
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
