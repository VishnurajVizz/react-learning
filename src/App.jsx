import { useState } from "react";
import Header from "./components/header";
import Result from "./components/result";
import UserInput from "./components/userInput";
import { calculateInvestmentResults, formatter } from "./util/investment";

export default function App() {
  const [value, setValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 6,
    duration: 10,
  });
  // const [result, setResult] = useState([{}]);

  function handleInput(e, key) {
    setValue((prev) => {
      return { ...prev, [key]: +e.target.value };
    });
    // setResult((prev) => {
    //   return [...prev, calculateInvestmentResults(value)];
    // });
  }

  const result = calculateInvestmentResults(value);
  return (
    <>
      <Header />
      <UserInput value={value} handleInput={handleInput} />
      {result && <Result result={result} />}
    </>
  );
}
