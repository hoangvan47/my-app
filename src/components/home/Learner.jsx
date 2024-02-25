import React from "react";

const Learner = () => {
  return (
    <div className="w-[1170px] mx-auto mt-[200px] flex items-center">
      <div className="w-[49%] h-[438px] flex items-center relative">
        <img
          src="img/learner-1.png"
          alt=""
          className="  absolute bottom-0 rounded-2xl w-[270px] h-[404px] "
        />
        <img
          src="img/learner-2.png"
          alt=""
          className="top-0 ml-[300px] rounded-2xl"
        />
      </div>

      <div className="w-[51%] ml-[130px]">
        <div className="font-bold text-4xl leading-[48px] w-[470px]">
          Learner outcomes through our awesome platform
        </div>
        <div className="mt-4 w-[458px] font-normal text-base leading-7 text-[#5F5B53]">
          87% of people learning for professional development report career
          benefits like getting a promotion, a raise, or starting a new career.
        </div>
        <div className="mt-4 w-[458px] font-normal text-base leading-7 text-[#5F5B53]">
          Lesson Impact Report (2022)
        </div>
        <div className="mt-[43px]">
          <button className="py-[11px] px-[37px] bg-[#FFB900] font-semibold text-base leading-7 text-white rounded-[26px]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learner;
