"use client";
import Board from "@/components/trello/Board";
import { useEffect, createContext, useState } from "react";
import { trello } from "@/utils/mockData";

export const BoardTrello = createContext(null);

const Trello = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    setBoards(trello[0]);
  }, [trello[0]]);

  return (
    <BoardTrello.Provider value={{ boards }}>
      <div className="bg-[#FFFCF4] ">
        <Board />
      </div>
    </BoardTrello.Provider>
  );
};

export default Trello;
