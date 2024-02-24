import React from "react";

const Card2 = () => {
  const card2 = [
    {
      id: 1,
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "21 November 2021",
      title: "How to become a pro web designer in 2022 and get remot job?",
    },
    {
      id: 2,
      avatar:
        "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "29 November 2021",
      title: "Read More",
    },
    {
      id: 3,
      avatar:
        "https://plus.unsplash.com/premium_photo-1658527049634-15142565537a?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      date: "23 November 2022",
      title: "How to become a pro web designer in 2022 and get remot job?",
    },
  ];
  return (
    <div className="w-[1170px] mx-auto bg-primary rounded-2xl">
      <div className="px-5">
        <div className="flex items-center mt-5 gap-8">
          {card2.map((item) => (
            <div key={item.id} className="">
              <img
                className="h-[270px] w-[370px] object-contain"
                src={item.avatar}
                alt=""
              />

              <div className=" font-normal text-sm leading-6 text-secondary border-b -ml-7">
                {item.date}
              </div>
              <div className="mt-3 w-40 h-[1] bg-orange-400"></div>
              <div className="font-semibold text-black text-base leading-7 mt-3 w-[330px]">
                {item.title}
              </div>
              <button className="mt-3 w-[118px] px-[21px] py-3 font-semibold text-white text-sm leading-6 bg-yellow-300 rounded-[25px]">
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card2;
