import React, { useState } from "react";

export default function GameBoard({ handleActivePlayer, activePlayer }) {
  let gameHistory = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  const [move, setMove] = useState(gameHistory);

  function handlePlayerMove(rowIdx, colIdx) {
    setMove((prevMoves) => {
      const updatedBoard = [...prevMoves.map((innerArray) => [...innerArray])]; // creating a deep copy then updating
      updatedBoard[rowIdx][colIdx] = activePlayer;
      return updatedBoard;
    });
    handleActivePlayer();
  }

  return (
    <ol id="game-board">
      {move.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerMove, colIdx) => (
              <li key={colIdx}>
                <button onClick={() => handlePlayerMove(rowIdx, colIdx)} disabled={playerMove&&true}>
                  {playerMove}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
