import React, { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

let initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function findCurrentPlayer(turns) {
  let currentPlayer = "X";
  if (turns.length > 0 && turns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function getGameBoard(gameTurns) {
  let gameBoard = [...initialBoard.map((innerArray) => [...innerArray])];
  if (gameTurns.length > 0) {
    for (const turn of gameTurns) {
      const { movePos, player } = turn;
      const { row, col } = movePos;
      gameBoard[row][col] = player;
    }
  }
  return gameBoard;
}

function getWinner(gameBoard, players) {
  let winner = null;
  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combinations[0].row][combinations[0].column];
    const secondSquareSymbol =
      gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquareSymbol =
      gameBoard[combinations[2].row][combinations[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      secondSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }

  return winner;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]); //   { movePos: { row: "", col: "" }, player: "" }
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2",
  });
  const activePlayer = findCurrentPlayer(gameTurns);

  const gameBoard = getGameBoard(gameTurns);

  const winner = getWinner(gameBoard, players);

  const hasDraw = gameTurns.length === 9 && !winner;

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

  function handlePlayerNames(symbol, name) {
    setPlayers((prev) => {
      return { ...prev, [symbol]: name };
    });
  }

  function handleRestart() {
    setGameTurns([]);
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
              handlePlayerNames={handlePlayerNames}
            />
            <Player
              pName={"Player 2"}
              symbol={"O"}
              isActive={activePlayer === "O"}
              handlePlayerNames={handlePlayerNames}
            />
          </ol>
          <GameBoard
            handleActivePlayer={handleActivePlayer}
            gameBoard={gameBoard}
          />
          {(winner || hasDraw) && (
            <GameOver winner={winner && winner} handleRestart={handleRestart} />
          )}
        </div>
        <Log history={gameTurns} />
      </main>
    </>
  );
}

export default App;
