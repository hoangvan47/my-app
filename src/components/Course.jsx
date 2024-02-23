import React from "react";
import Card2 from "@/components/Card2";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
const Course = () => {
  const data2 = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1707845696801-4d4b89e510fa?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "21 November 2021",
      title: "How to become a pro web designer in 2022 and get remot job?",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_photo-1705091310316-fc9fa5335b17?q=80&w=3435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "21 November 2021",
      title: "How to become a pro web designer in 2022 and get remot job?",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1707385060909-34a3c220696a?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "21 November 2021",
      title: "How to become a pro web designer in 2022 and get remot job?",
    },
  ];

  return (
    <div>
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
        {data2.map((item) => (
          <Card2
            key={item.id}
            imageURL={item.image}
            date={item.date}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Course;
