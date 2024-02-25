import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import CardCourse from "@/components/home/CardCourse";
import { courseData } from "@/utils/mockData";
const Course = () => {
  return (
    <div>
      <div className="item-center w-[1170px] mx-auto mt-[200px]">
        <div className="flex justify-between item-center w-[1170px] mx-auto">
          <div>
            <div className="font-bold text-[38px] leading-[48px] font-serif ">
              Our popular courses
            </div>

            <div className="font-normal text-[18px] leading-[30px] mt-4 w-[458px]">
              Build new skills with new trendy courses and shine for the next
              future career.
            </div>
          </div>

          <div className="ml-auto item-center">
            <button className="w-98 h-40 px-4 mt-5.5">
              <FaArrowAltCircleLeft className="w-[40] h-[40]" />
            </button>
            <button>
              <FaArrowCircleRight className="w-[40] h-[40]" />
            </button>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-between">
          {courseData.map((item) => (
            <CardCourse
              key={item.id}
              imageURL={item.image}
              title={item.title}
              subTitle={item.subTitle}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Course;
