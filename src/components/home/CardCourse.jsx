import React from "react";

const CardCourse = ({ imageURL, title, price, subTitle }) => {
  return (
    <div className=" max-w-[370px] max-h-[466px] bg-primary rounded-xl">
      <div className="max-h-[278px] bg-cover overflow-hidden">
        <img
          src={imageURL || ""}
          alt="Lesson"
          className="rounded-t-lg min-h-[278px]  object-fill"
        />
      </div>
      <div>
        <div className="flex items-center justify-between mt-4">
          <div className="font-semibold text-base">{title}</div>
          <div className="ml-auto flex">
            <img src="img/start-6.svg" alt="" />
            <img className="ml-1.5" src="img/4.5.svg" alt="" />
          </div>
        </div>
        <div className="mt-1.5 font-normal text-sm leading-6 text-secondary w-[326px]">
          {subTitle}
        </div>
        <div className="mt-3 flex items-center justify-between">
          <div className="font-semibold text-lg leading-7">{price}</div>
          <button className="text-white bg-primary w-[118] rounded-3xl px-6 py-3">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardCourse;
