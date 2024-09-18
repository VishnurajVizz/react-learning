import React, { useState } from "react";

export default function GameBoard({ handleActivePlayer, gameBoard }) {
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
