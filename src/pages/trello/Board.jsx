"use client";
import React, { useContext } from "react";
import { IoMdAdd } from "react-icons/io";
import Column from "./Column";
import { BoardTrello } from "@/app/trello/page";

const Board = () => {
  const { columns } = useContext(BoardTrello);

  const alowDrop = (e) => {
    console.log(`🚀 ~ alowDrop ~ e:`, e)
    e.preventDefault();
  };

  const onDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-[1170px] h-full mx-auto pb-10  overflow-x-hidden flex items-baseline gap-3">
      <div className="overflow-x-auto flex gap-5 h-full">
        {columns?.map((column) => (
          <div onDrop={onDrop} onDragOver={alowDrop} key={column.id}>
            <Column id={column.id} title={column.title} cards={column.cards} />
          </div>
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
