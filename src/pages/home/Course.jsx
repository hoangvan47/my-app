import React from "react";
import CardCourse from "@/components/home/CardCourse";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
const Course = () => {
  const courseData = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1707845696801-4d4b89e510fa?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Basic web design",
      subTitle:
        "Get the best course, gain knowledge and shine for your future career.",
      price: "$120.75",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1707845696801-4d4b89e510fa?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "UI/UX design",
      subTitle:
        "Get the best course, gain knowledge and shine for your future career.",
      price: "$120.75",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1707845696801-4d4b89e510fa?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Web App design",
      subTitle:
        "Get the best course, gain knowledge and shine for your future career.",
      price: "$120.75",
    },
  ];

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
