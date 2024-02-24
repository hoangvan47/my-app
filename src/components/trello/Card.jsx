"use client";
import React from "react";
import { MdModeEditOutline } from "react-icons/md";

const Card = () => {
  return (
    <div className="bg-slate-300 rounded-lg min-h-9 flex items-center px-2">
      <input
        type="text"
        value={"ABC"}
        className="bg-transparent w-full p-2 text-gray-900 focus:outline-none"
      />

      <button>
        <MdModeEditOutline />
      </button>
    </div>
  );
};

export default Card;
