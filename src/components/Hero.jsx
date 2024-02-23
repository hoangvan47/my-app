import React from "react";

const Hero = () => {
  return (
    <div className="w-[1440px] ml-auto mr-auto bg-[#FFFCF4]">
      <div className="w-[1170px] pt-16 pb-16 flex ml-auto mr-auto">
        {/* media-block */}
        <div className="w-[570px] relative">
          <img src="img/guy-lesson.png" alt="Lesson" />
          <div className="w-[270px] flex items-center p-6 bg-white rounded-l-xl absolute right-0 bottom-12">
            <img
              className="w-12 h-12 p-3 rounded-full bg-[#FFF9E8] "
              src="img/ui-ux.svg"
              alt=""
            />
            <div className="ml-4">
              <div className="font-normal text-sm leading-6 text-gray-400 ">
                20 Courses
              </div>
              <div className="font-semibold text-lg leading-7 text-black">
                UI/UX Design
              </div>
            </div>
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
        </div>
      </div>
    </div>
  );
};

export default Hero;
