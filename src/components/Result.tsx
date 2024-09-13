import data from "../data.json";
import { IResultProps } from "../types/types";
import { formatValue } from "../lib/utils";
import "../css/result.css";

export const Result = ({ result, selectedPlan }: IResultProps) => {
  const { resTitle, resDesc, monthTitle, total } = data;
  const { amount, term, rate } = result;

  // formula
  // M = (P * r * (1 + r)**n) / ((1 + r)**n - 1)
  // M = monthly payment
  // P = mortgage amount
  // n = term * 12
  // r = rate / 100 / 12

  const P = amount;
  const n = term * 12;
  const r = rate / 100 / 12;

  const monthlyPayment = (P * r * (1 + r) ** n) / ((1 + r) ** n - 1);
  const totalRepayment = monthlyPayment * n;
  const interestOnly = totalRepayment - P;

  return (
    <section className="result_container">
      <article className="summary">
        <h3>{resTitle}</h3>
        <p>{resDesc}</p>
      </article>

      <article className="card">
        <p>{monthTitle}</p>
        <h4>{formatValue(monthlyPayment.toFixed(2))}</h4>
        <span></span>
        <p>{total}</p>
        <h5>
          {formatValue(
            selectedPlan === "repayment"
              ? totalRepayment.toFixed(2)
              : interestOnly.toFixed(2)
          )}
        </h5>
      </article>
    </section>
  );
};
