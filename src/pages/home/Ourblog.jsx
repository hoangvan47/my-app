import React from "react";

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
          <div className=" w-[370px] flex items-center gap-x-[30px] mt-[55px] text-left bg-white rounded-3xl">
            <div>
              <img
                src="img/ourblog-img.png"
                alt=""
                className="w-[370px] object-cover"
              />
              <div className="mt-5 flex items-center ">
                <img src="img/dott.svg" alt="" />
                <div className="ml-3 font-normal text-sm leading-6 text-[#696262]">
                  21 November 2021
                </div>
              </div>
              <div className="mt-1 w-[160px] h-[1px] bg-[#E2DFDA] "></div>
              <div className="mt-3 font-semibold text-base leading-7 text-[#171100] w-[330px]">
                How to become a pro web designer in 2022 and get remot job?
              </div>
              <button className="mt-6 w-[118px] px-[21px] py-3 font-semibold text-sm leading-[36px] text-white bg-[#FFB900] rounded-[25px]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourblog;
