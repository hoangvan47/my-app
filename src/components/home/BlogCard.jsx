import React from "react";

const BlogCard = ({ avatar, date, title }) => {
  return (
    <>
      <div className="w-[370px] ">
        <img className="w-[270px] object-contain" src={avatar} alt="" />

        <div className=" font-normal text-sm leading-6 text-secondary border-b ">
          {date}
        </div>

        <div className="font-semibold text-black text-base leading-7 mt-3 w-[330px]">
          {title}
        </div>
        <button className="mt-3 w-[118px] px-[21px] py-3 font-semibold text-white text-sm leading-6 bg-yellow-300 rounded-[25px]">
          Read More
        </button>
      </div>
    </>
  );
};

export default BlogCard;
