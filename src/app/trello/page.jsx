"use client";
import React, { useState, createContext, useEffect } from "react";
import Board from "@/pages/trello/Board";
import { trello } from "@/utils/mockData";

export const BoardTrello = createContext(null);

const Trello = () => {
  const [boards, setBoards] = useState([]);
  const [columns, setColumns] = useState([])

  useEffect(() => {
    setBoards(trello[0]);
    setColumns(trello[0].columns)
  }, []);

  const providerValue = {
    boards,
    columns,
    setBoards,
    setColumns
  };

  return (
    <BoardTrello.Provider value={providerValue}>
      <div className="bg-[#FFFCF4] h-full">
        <Board />
      </div>
    </BoardTrello.Provider>
  );
};

export default Trello;
