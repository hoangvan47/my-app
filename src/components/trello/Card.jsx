"use client";
import React from "react";
import { MdModeEditOutline } from "react-icons/md";

const Card = ({ title, description }) => {
  const onDragOver = (e) => {
    console.log(`🚀 ~ onDragOver ~ e:`, e);
  };

  return (
    <div
      onDrag={onDragOver}
      draggable="true"
      className="bg-slate-300 rounded-lg min-h-9 flex items-center px-2 "
    >
      <input
        type="text"
        value={title || ""}
        onChange={(e) => console.log(e.target.value)}
        className="bg-transparent w-full p-2 text-gray-900 focus:outline-none"
      />

      <button>
        <MdModeEditOutline />
      </button>
    </div>
  );
};

export default Card;
