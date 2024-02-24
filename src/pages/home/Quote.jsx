import React from "react";
import { RxAvatar } from "react-icons/rx";
import { SiGravatar } from "react-icons/si";
import { TbBrandGravatar } from "react-icons/tb";
import { InfoUser } from "./InfoUser";
const Quote = () => {
  const quote = [
    {
      id: 1,
      icon: <RxAvatar />,
    },
    {
      id: 2,
      icon: <SiGravatar />,
    },
    {
      id: 3,
      icon: <TbBrandGravatar />,
    },
  ];
  const infouser = {
    id: 1,
    avatar:
      "https://images.unsplash.com/photo-1707310042819-5d00accd7d81?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Peter Moor",
    description: "Student of Web Design",
    text: "Not only does my resume look impressive—filled with the names and logos of world-class institutions—but these certificates also bring me closer to my career goals by validating the skills I've learned.",
  };

  return (
    <div>
      <div className="w-full mx-auto mt-[200px] bg-[#2E2100]">
        <div className="w-[1170px] mx-auto flex item-center ">
          <div>
            <InfoUser
              imageURL={infouser.avatar}
              name={infouser.name}
              description={infouser.description}
            />
            <div className="mt-7 flex items-center gap-x-1 pb-24">
              {quote.map((item) => (
                <div key={item.id}>{item.icon}</div>
              ))}
            </div>
          </div>

          <div className="ml-[241px] mt-24">
            <img src="img/vector.svg" className="color=[#634700]" alt="" />
            <div className=" ml-6 font-normal italic text-[26px] leading-[40px] w-[740px] ">
              {infouser.text}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
