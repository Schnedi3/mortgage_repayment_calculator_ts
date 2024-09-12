import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { IFormProps, IMortgage, IMortgageDefault } from "../types/types";
import { mortgageSchema } from "../schemas/mortgageSchema";
import iconCalc from "../assets/icon-calculator.svg";

import "../css/form.css";

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
    <section className="form_container">
      <figure className="white_bg"></figure>
      <article className="header">
        <h1>Mortgage Calculator</h1>
        <button onClick={handleClear}>Clear All</button>
      </article>

      <form
        className="form"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <article className="amount">
          <h2>Mortgage Amount</h2>
          <input
            type="text"
            id="amount"
            className={errors.amount ? "input_error" : ""}
            {...register("amount")}
          />
          <p>£</p>
        </article>

        <article className="term_rate">
          <div className="term">
            <h2>Mortgage Term</h2>
            <input
              type="text"
              id="term"
              className={errors.term ? "input_error" : ""}
              {...register("term", { valueAsNumber: true })}
            />
            <p>years</p>
          </div>
          <div className="rate">
            <h2>Interest Rate</h2>
            <input
              type="text"
              id="rate"
              className={errors.rate ? "input_error" : ""}
              {...register("rate", { valueAsNumber: true })}
            />
            <p>%</p>
          </div>
        </article>

        <article className="repayment_interest">
          <h2>Mortgage type</h2>
          <div>
            <label className={`repayment${errors.plan ? " input_error" : ""}`}>
              <input
                type="radio"
                id="repayment"
                className={`radio${errors.plan ? " input_error" : ""}`}
                value="repayment"
                checked={selectedPlan === "repayment"}
                {...register("plan", {
                  required: true,
                  onChange: (e) => setSelectedPlan(e.target.value),
                })}
              />
              Repayment
            </label>
            <label className={`interest${errors.plan ? " input_error" : ""}`}>
              <input
                type="radio"
                id="interest"
                className={`radio${errors.plan ? " input_error" : ""}`}
                value="interest"
                checked={selectedPlan === "interest"}
                {...register("plan", {
                  required: true,
                  onChange: (e) => setSelectedPlan(e.target.value),
                })}
              />
              Interest Only
            </label>
          </div>
        </article>

        <button type="submit">
          <img src={iconCalc} /> Calculate Repayments
        </button>
      </form>
    </section>
  );
};
