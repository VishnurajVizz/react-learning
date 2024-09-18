import React, { useState } from "react";

let initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ handleActivePlayer, turns }) {
  let gameBoard = initialBoard;
  for (const turn of turns) {
    const { movePos, player } = turn;
    const { row, col } = movePos;
    gameBoard[row][col] = player;
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIdx) => (
        <li key={rowIdx}>
          <ol>
            {row.map((playerMove, colIdx) => (
              <li key={colIdx}>
                <button
                  onClick={() => handleActivePlayer(rowIdx, colIdx)}
                  disabled={playerMove && true}
                >
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
