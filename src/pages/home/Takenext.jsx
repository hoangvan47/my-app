import React from "react";

const Takenext = () => {
  return (
    <div className="w-[1170px] mx-auto mt-[200px] flex item-center">
      <div className="w-[49%]">
        <div className="mt-[71px] font-bold text-4xl leading-[48px] text-[#171100]">
          Take the next step toward your personal and professional goals with
          Lesson.
        </div>
        <div className="mt-4 font-normal text-base leading-7 text-[#5F5B53]">
          Take the next step toward. Join now to receive personalized and more
          recommendations from the full Coursera catalog.
        </div>
        <button className="mt-[32px] w-[137px] px-[31] py-[11px] bg-[#FFB900] text-white font-semibold text-base leading-7 rounded-3xl">
          Join Now
        </button>
      </div>
      <div className="w-[51%]">
        <img
          src="img/takenext-img.png"
          className="ml-[130px] w-[470px] h-[440px] round-[20px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Takenext;
