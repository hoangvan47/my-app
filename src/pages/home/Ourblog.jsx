import React from "react";
import { ourblog } from "@/utils/mockData";

const Ourblog = () => {
  return (
    <div>
      <div className="bg-[#FFFCF4] mx-auto text-center  ">
        <div className="w-[1170px] pt-[96px] pb-[140px] mx-auto ">
          <div className="font-bold text-[38px] leading-tight text-[#130606] inline-block">
            Our blog
          </div>
          <div className="mt-4 font-normal text-base leading-7 text-[#696262]">
            Read our regular travel blog and know the latest update of tour and
            travel
          </div>

          <div className="flex items-center gap-x-[30px] mt-[55px] w-[1170px] mx-auto">
            {ourblog.map((item) => (
              <div key={item.id}>
                <div className=" w-[370px]  text-left bg-white rounded-3xl">
                  <img
                    src={item.imgURL}
                    alt=""
                    className="w-[370px] h-[250px] object-cover"
                  />
                  <div className="mt-5 flex items-center ">
                    <img src="img/dott.svg" alt="" />
                    <div className="ml-3 font-normal text-sm leading-6 text-[#696262]">
                      {item.date}
                    </div>
                  </div>
                  <div className="mt-1 w-[160px] h-[1px] bg-[#E2DFDA] "></div>
                  <div className="mt-3 font-semibold text-base leading-7 text-[#171100] w-[330px]">
                    {item.title}
                  </div>
                  <button className="mt-6 w-[118px] px-[21px] py-3 font-semibold text-sm leading-[36px] text-white bg-[#FFB900] rounded-[25px]">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourblog;
