import React from "react";

const LearnerCard = ({ imageURL1, imageURL2 }) => {
  return (
    <div className="w-[49%] h-[438px] flex items-center relative">
      <img
        src={imageURL1}
        alt=""
        className="  absolute bottom-0 rounded-2xl w-[270px] h-[404px] "
      />
      <img
        src={imageURL2}
        alt=""
        className="top-0 ml-[300px] rounded-2xl w-[270px] h-[404px]"
      />
    </div>
  );
};

export default LearnerCard;
