import React from "react";
import { formatter } from "../util/investment";

export default function Result({ result }) {
  console.log(result);
  const initialInvestment =
    result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;
  let tableHeadings = [
    "Year",
    "Investment Value",
    "Interset (Year)",
    "Total Interest",
    "Invested Capital",
  ];
  return (
    <table id="result">
      <thead>
        <tr>
          {tableHeadings.map((heading) => {
            return (
              <th key={heading} className="center">
                {heading}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {result.map((data) => {
          const totalInterset =
            data.valueEndOfYear -
            data.annualInvestment * data.year -
            initialInvestment;
          const totalAmountInvested = data.valueEndOfYear - totalInterset;
          return (
            <tr key={data.year}>
              <td className="center">{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td className="center">{formatter.format(data.interest)}</td>
              <td className="center">{formatter.format(totalInterset)}</td>
              <td className="center">
                {formatter.format(totalAmountInvested)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
