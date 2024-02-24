"use client";
import React from "react";
import { MdModeEditOutline } from "react-icons/md";

const Card = ({ title }) => {
  const onDrag = (e) => {
    console.log(`🚀 ~ onDrag ~ e:`, e);
  };

  return (
    <div  className="bg-slate-300 rounded-lg min-h-9 flex items-center px-2 hover:cursor-pointer">
      {/* <input
        type="text"
        value={title || ""}
        onChange={(e) => console.log(e.target.value)}
        className="bg-transparent w-full p-2 text-gray-900 focus:outline-none"
      /> */}
      <p
        draggable="true"
        onDrag={onDrag}
        className="bg-transparent w-full p-2 text-gray-900 focus:outline-none"
      >
        {title}
      </p>

      <button>
        <MdModeEditOutline />
      </button>
    </div>
  );
};

export default Card;
