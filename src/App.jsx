import React from "react";
import Player from "./components/player";

function App() {
  return (
    <>
      <header>
        <img src="game-logo.png" />
        <h1>Tic-Tac-Toe</h1>
      </header>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player pName={"Player 1"} symbol={"X"} />
            <Player pName={"Player 2"} symbol={"O"} />
          </ol>
          Game Board
        </div>
        LOG
      </main>
    </>
  );
}

export default App;
