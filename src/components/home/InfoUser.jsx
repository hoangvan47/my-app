import React from "react";

export const InfoUser = ({ imageURL, name, description }) => {
  return (
    <div>
      <img src={imageURL} className="rounded-full pt-[96px]" alt="" />
      <div className="mt-4 font-bold text-2xl text-[#F7F7F7]">{name}</div>
      <div className="mt-1 font-normal text-sm leading-[26px] text-[#BFBCB2]">
        {description}
      </div>
    </div>
  );
};
