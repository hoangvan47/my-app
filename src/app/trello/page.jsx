"use client";
import React from "react";

const Trello = () => {
  const alowDrop = (e) => {
    e.preventDefault();
  };

  const onDrop = (e) => {
    e.preventDefault();
    console.log(`🚀 ~ onDrop ~ e.dataTransfer.getData("text"):`, e.dataTransfer.getData("text"))
    e.target.appendChild(
      document.getElementById(e.dataTransfer.getData("text"))
    );
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text", e.target.id);
  };

  return (
    <div className="w-full">
      <div className="flex items-center gap-2 w-full">
        <div
          className="bg-red-600 h-screen w-4/12 p-4 flex flex-col gap-3"
          onDragOver={alowDrop}
          onDrop={onDrop}
          id="div1"
        >
          <div
            className="w-full max-h-6 bg-white text-black"
            draggable="true"
            id="1"
            onDragStart={handleDragStart}
          >
            To Do 1
          </div>

          <div
            className="w-full max-h-6 bg-white text-black"
            draggable="true"
            id="2"
            onDragStart={handleDragStart}
          >
            To Do 2
          </div>
        </div>

        <div
          className="bg-green-600 h-screen w-4/12 p-4 flex flex-col gap-3"
          onDragOver={alowDrop}
          onDrop={onDrop}
          id="div2"
        ></div>

        <div
          className="bg-yellow-600 h-screen w-4/12 p-4 flex flex-col gap-3"
          onDragOver={alowDrop}
          onDrop={onDrop}
          id="div3"
        ></div>
      </div>
    </div>
  );
};

export default Trello;
