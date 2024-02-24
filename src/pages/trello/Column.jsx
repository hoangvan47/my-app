"use client";
import React from "react";
import Card from "@/pages/trello/Card";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";
import { IoFileTrayFullOutline } from "react-icons/io5";

const Column = () => {
  return (
    <div className="min-w-64 max-h-[500px] bg-slate-500 rounded-lg shadow-sm p-3 text-white flex flex-col gap-4">
      <div className="flex items-center justify-between pb-2 gap-2">
        <div className="font-bold text-xl">
          <input
            type="text"
            value={"To Do"}
            className="w-full bg-transparent focus:border-gray-400 px-2 focus:outline-none"
          />
        </div>
        <button>
          <HiOutlineDotsHorizontal />
        </button>
      </div>

      <div className="flex-1 flex flex-col gap-3 overflow-y-auto">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div className="flex items-center justify-between gap-2">
        <button className="flex items-center gap-2 p-2 hover:bg-slate-100 flex-1 rounded-md hover:text-gray-800 duration-200 transition-all">
          <IoMdAdd />
          <span className="text-sm font-light">Add New Card</span>
        </button>

        <button>
          <IoFileTrayFullOutline />
        </button>
      </div>
    </div>
  );
};

export default Column;