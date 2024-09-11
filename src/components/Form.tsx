import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { IFormProps, IMortgage, IMortgageDefault } from "../types/types";
import { mortgageSchema } from "../schemas/mortgageSchema";
import iconCalc from "../assets/icon-calculator.svg";

export const Form = ({
  setResult,
  selectedPlan,
  setSelectedPlan,
}: IFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IMortgage>({
    resolver: zodResolver(mortgageSchema),
    mode: "onChange",
  });

  const onSubmit = (data: IMortgage) => {
    setResult(data);
  };

  const handleClear = () => {
    reset();
    setResult(IMortgageDefault);
    setSelectedPlan("");
  };

  return (
    <section>
      <h1>Mortgage Calculator</h1>
      <button onClick={handleClear}>Clear All</button>

      <form onSubmit={handleSubmit(onSubmit)}>
        <article>
          <label htmlFor="amount">Mortgage Amount</label>
          <i>£</i>
          <input
            type="number"
            id="amount"
            {...register("amount", { valueAsNumber: true })}
          />
        </article>

        <article>
          <div>
            <label htmlFor="term">Mortgage Term</label>
            <input
              type="number"
              id="term"
              {...register("term", { valueAsNumber: true })}
            />
            <p>years</p>
          </div>
          <div>
            <label htmlFor="rate">Interest Rate</label>
            <input
              type="number"
              id="rate"
              {...register("rate", { valueAsNumber: true })}
            />
            <p>%</p>
          </div>
        </article>

        <article>
          <h2>Mortgage type</h2>
          <div>
            <input
              type="radio"
              id="repayment"
              value="repayment"
              checked={selectedPlan === "repayment"}
              {...register("plan", {
                required: true,
                onChange: (e) => setSelectedPlan(e.target.value),
              })}
            />
            <label htmlFor="repayment">Repayment</label>
          </div>
          <div>
            <input
              type="radio"
              id="interest"
              value="interest"
              checked={selectedPlan === "interest"}
              {...register("plan", {
                required: "Please select a mortgage type",
                onChange: (e) => setSelectedPlan(e.target.value),
              })}
            />
            <label htmlFor="interest">Interest Only</label>
          </div>
        </article>

        <button type="submit">
          <img src={iconCalc} /> Calculate Repayments
        </button>
      </form>
    </section>
  );
};
