import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

function findCurrentPlayer(turns) {
  let currentPlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const activePlayer = findCurrentPlayer(gameTurns);

  function handleActivePlayer(rowIdx, colIdx) {
    setGameTurns((prev) => {
      // Not getting current player value from state because it won't be updated yet.
      let currentPlayer = findCurrentPlayer(prev);
      let updatedGameTurns = [
        { movePos: { row: rowIdx, col: colIdx }, player: currentPlayer },
        ...prev,
      ];
      return updatedGameTurns;
    });
  }

  return (
    <>
      <header>
        <img src="game-logo.png" />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              pName={"Player 1"}
              symbol={"X"}
              isActive={activePlayer === "X"}
            />
            <Player
              pName={"Player 2"}
              symbol={"O"}
              isActive={activePlayer === "O"}
            />
          </ol>
          <GameBoard
            handleActivePlayer={handleActivePlayer}
            turns={gameTurns}
          />
        </div>
        <Log history={gameTurns} />
      </main>
    </>
  );
}

export default App;
