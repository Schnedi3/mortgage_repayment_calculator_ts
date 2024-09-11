import { IResultProps } from "../types/types";

export const Result = ({ result, selectedPlan }: IResultProps) => {
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
    <section>
      <article>
        <h3>Your results</h3>
        <p>
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click “calculate repayments”
          again.
        </p>
      </article>

      <article>
        <p>Your monthly repayments</p>
        <h4>£{monthlyPayment}</h4>
        <span></span>
        <p>Total you'll repay over the term</p>
        <h5>£{selectedPlan === "repayment" ? totalRepayment : interestOnly}</h5>
      </article>
    </section>
  );
};
