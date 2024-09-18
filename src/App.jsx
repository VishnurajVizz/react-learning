import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleActivePlayer() {
    setActivePlayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
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
            activePlayer={activePlayer}
          />
        </div>
        LOG
      </main>
    </>
  );
}

export default App;
