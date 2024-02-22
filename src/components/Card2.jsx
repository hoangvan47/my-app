import React from "react";

const Card2 = ({ imageURL, date, title }) => {
  return (
    <div className="w-[370px] h-[466px] bg-primary rounded-2xl">
      <img src="img/image3.png" alt="" className="max-h-250 object-cover" />
      <div className="px-5">
        <div className="flex items-center justify-between mt-5">
          <img src={imageURL || ""} alt="" />
          <div className=" font-normal text-sm leading-6 text-secondary border-b -ml-7">
            {date}
          </div>
          <div className="mt-3 w-40 h-[1] bg-orange-400"></div>
        </div>
        <div className="font-semibold text-black text-base leading-7 mt-3 w-[330px]">
          {title}
        </div>
        <button className="mt-3 w-[118px] px-[21px] py-3 font-semibold text-white text-sm leading-6 bg-yellow-300 rounded-[25px]">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card2;
