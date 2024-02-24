import React from "react";
import Board from "@/pages/trello/Board";

const Trello = () => {
  const [boards, setBoards] = useState([]);

  const onDrop = (e) => {
    e.preventDefault();
    console.log(
      `🚀 ~ onDrop ~ e.dataTransfer.getData("text"):`,
      e.dataTransfer.getData("text")
    );
    e.target.appendChild(
      document.getElementById(e.dataTransfer.getData("text"))
    );
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData("text", e.target.id);
  };

  return (
    <BoardTrello.Provider value={{ boards }}>
      <div className="bg-[#FFFCF4] ">
        <Board />
      </div>
    </BoardTrello.Provider>
  );
};

export default Trello;
