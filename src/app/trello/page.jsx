import React from "react";
import Board from "@/components/trello/Board";

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
    <div className="bg-[#FFFCF4] ">
      <Board />
    </div>
  );
};

export default Trello;
