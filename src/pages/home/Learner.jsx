import React from "react";
import LearnerCard from "@/components/home/LearnerCard";
import { InfoUser } from "@/components/home/InfoUser";

const Learner = () => {
  const Learner = [
    {
      id: 1,
      imageURL1:
        "https://images.unsplash.com/photo-1708834269879-e7bd99d7e77c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      imageURL2:
        "https://images.unsplash.com/photo-1708793699440-67fa853abd4d?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return (
    <div className="w-[1170px] mx-auto mt-[200px] flex items-center">
      {Learner.map((Learner) => (
        <LearnerCard
          imageURL1={Learner.imageURL1}
          imageURL2={Learner.imageURL2}
        />
      ))}

      <div className="w-[51%] ml-[130px]">
        <div className="font-bold text-4xl leading-[48px] w-[470px]">
          Learner outcomes through our awesome platform
        </div>
        <div className="mt-4 w-[458px] font-normal text-base leading-7 text-[#5F5B53]">
          87% of people learning for professional development report career
          benefits like getting a promotion, a raise, or starting a new career.
        </div>
        <div className="mt-4 w-[458px] font-normal text-base leading-7 text-[#5F5B53]">
          Lesson Impact Report (2022)
        </div>
        <div className="mt-[43px]">
          <button className="py-[11px] px-[37px] bg-[#FFB900] font-semibold text-base leading-7 text-white rounded-[26px]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Learner;
