import React from "react";
import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
export default function Player({ pName, symbol, isActive, handlePlayerNames }) {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(pName);
  let playerName = <span className="player-name">{name}</span>;
  let btn = "Edit";
  if (isEditing) {
    playerName = (
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    );
    btn = "Save";
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <Button
        onClick={() => {
          setIsEditing((prev) => !prev);
          if (isEditing) {
            handlePlayerNames(symbol, name);
          }
        }}
      >
        {btn}
      </Button>
    </li>
  );
}
