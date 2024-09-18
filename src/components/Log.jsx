import React from "react";

export default function Log({ history }) {
  return (
    <ol id="log">
      {history.map((move) => {
        const { movePos, player } = move;
        const { row, col } = movePos;
        return (
          <li key={`${row}${col}`}>{player} Selected {row + 1}, {col + 1}</li>
        );
      })}
    </ol>
  );
}
