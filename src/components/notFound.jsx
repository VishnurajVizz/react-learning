import React from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/", { state: "Visited a not found page" });
  }
  return (
    <>
      <h1>NotFound</h1>
      <button onClick={handleClick}>Lost?</button>
    </>
  );
}
