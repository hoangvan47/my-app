import React from "react";

const Quote = () => {
  return (
    <div>
      <div className="w-full mx-auto mt-[200px] bg-[#2E2100]">
        <div className="w-[1170px] mx-auto flex item-center ">
          <div>
            <img
              src="img/peter.png"
              className="rounded-full pt-[96px]"
              alt=""
            />
            <div className="mt-4 font-bold text-2xl text-[#F7F7F7]">
              Peter Moor
            </div>
            <div className="mt-1 font-normal text-sm leading-[26px] text-[#BFBCB2]">
              Student of Web Design
            </div>
            <div className="mt-7 flex items-center gap-x-1 pb-24">
              <img src="img/dott1.svg" alt="" />
              <img src="img/dott2.svg" alt="" />
              <img src="img/dott-3.svg" alt="" />
            </div>
          </div>

          <div className="ml-[241px] mt-24">
            <img src="img/vector.svg" className="color=[#634700]" alt="" />
            <div className=" ml-6 font-normal italic text-[26px] leading-[40px] w-[740px] ">
              Not only does my resume look impressive—filled with the names and
              logos of world-class institutions—but these certificates also
              bring me closer to my career goals by validating the skills I've
              learned."{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
