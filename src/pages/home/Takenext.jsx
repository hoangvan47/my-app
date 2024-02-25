import React from "react";
import { takenext } from "@/utils/mockData";
const Takenext = () => {
  return (
    <div className="w-[1170px] mx-auto mt-[200px] flex item-center">
      <div className="w-[49%]">
        <div className="mt-[71px] font-bold text-4xl leading-[48px] text-[#171100]">
          {takenext.title}
        </div>
        <div className="mt-4 font-normal text-base leading-7 text-[#5F5B53]">
          {takenext.description}
        </div>
        <button className="mt-[32px] w-[137px] px-[31] py-[11px] bg-[#FFB900] text-white font-semibold text-base leading-7 rounded-3xl">
          Join Now
        </button>
      </div>
      <div className="w-[51%]">
        <img
          src={takenext.imgURL}
          className="ml-[130px] w-[470px] h-[440px] round-[20px]"
          alt=""
        />
      </div>
    </div>
  );
};

export default Takenext;
