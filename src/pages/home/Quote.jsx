import React from "react";
import { InfoUser } from "../../components/home/InfoUser";
import { quote } from "@/utils/mockData";
import { infouser } from "@/utils/mockData";

const Quote = () => {
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
