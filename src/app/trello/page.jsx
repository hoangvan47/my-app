"use client";
import React, { useState, createContext, useEffect } from "react";
import Board from "@/pages/trello/Board";
import { trello } from "@/utils/mockData";

export const BoardTrello = createContext();

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
