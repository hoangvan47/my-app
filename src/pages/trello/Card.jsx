"use client";
import React from "react";
import { MdModeEditOutline } from "react-icons/md";

const Card = ({ title }) => {
  return (
    <div  className="bg-slate-300 rounded-lg min-h-9 flex items-center px-2 hover:cursor-pointer">
      {/* <input
        type="text"
        value={title || ""}
        onChange={(e) => console.log(e.target.value)}
        className="bg-transparent w-full p-2 text-gray-900 focus:outline-none"
      /> */}
      <p
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
