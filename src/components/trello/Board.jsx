"use client";
import React, { useContext, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import Column from "./Column";
import { BoardTrello } from "@/app/trello/page";

const Board = () => {
  const { boards } = useContext(BoardTrello);

  return (
    <div className="max-w-[1170px] mx-auto pb-10  overflow-x-hidden flex items-baseline gap-3">
      <div className="overflow-x-auto flex items-center gap-5">
        {boards.columns?.map((column) => (
          <Column
            key={column?.id}
            title={column?.title}
            cards={column?.cards}
          />
        ))}
      </div>

      <button className="flex items-center gap-2 bg-slate-500  hover:bg-slate-300  hover:text-gray-800 font-bold duration-200 transition-all min-w-64  rounded-lg shadow-sm p-3 text-white ">
        <IoMdAdd />
        <span className="text-sm font-light">Add another list</span>
      </button>
    </div>
  );
};

export default Board;
