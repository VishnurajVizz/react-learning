import React, { useState } from "react";

export default function UserInput({ value, handleInput }) {
  console.log(value);

  return (
    <form id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={value.initialInvestment || ""}
            onChange={(e) => {
              handleInput(e, "initialInvestment");
            }}
            required
          />
        </p>

        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={value.annualInvestment || ""}
            onChange={(e) => {
              handleInput(e, "annualInvestment");
            }}
            required
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={value.expectedReturn || ""}
            onChange={(e) => {
              handleInput(e, "expectedReturn");
            }}
            required
          />
        </p>

        <p>
          <label>Duration</label>
          <input
            type="number"
            value={value.duration || ""}
            onChange={(e) => {
              handleInput(e, "duration");
            }}
            required
          />
        </p>
      </div>
    </form>
  );
}
