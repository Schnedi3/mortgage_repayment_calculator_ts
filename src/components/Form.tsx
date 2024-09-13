import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import data from "../data.json";
import { IFormProps, IMortgage, IMortgageDefault } from "../types/types";
import { mortgageSchema } from "../schemas/mortgageSchema";
import { getCurrencySymbol, handleKeyDown, locale } from "../lib/utils";
import iconCalc from "../assets/icon-calculator.svg";

import "../css/form.css";

export const Form = ({
  setResult,
  selectedPlan,
  setSelectedPlan,
}: IFormProps) => {
  const { title, clear, amount, term, rate, type, repay, interest, calculate } =
    data;
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

  const currencySymbol = getCurrencySymbol();

  return (
    <section className="form_container">
      <figure className="white_bg"></figure>
      <article className="header">
        <h1>{title}</h1>
        <button onClick={handleClear}>{clear}</button>
      </article>

      <form
        className="form"
        onSubmit={handleSubmit(onSubmit)}
        autoComplete="off"
      >
        <article className="amount">
          <label htmlFor="amount">{amount}</label>
          <div className={`amount_input${errors.amount ? " input_error" : ""}`}>
            <p>{currencySymbol}</p>
            <input
              type="text"
              id="amount"
              {...register("amount")}
              onKeyDown={handleKeyDown}
              onChange={(e) => {
                const value = e.target.value.replace(/[^0-9.]/g, "");
                const parsedValue = parseInt(value);
                if (!isNaN(parsedValue)) {
                  e.target.value = new Intl.NumberFormat(locale).format(
                    parsedValue
                  );
                }
              }}
            />
          </div>
        </article>

        <article className="term_rate">
          <div className="term">
            <label htmlFor="term">{term}</label>
            <div className={`term_input${errors.term ? " input_error" : ""}`}>
              <input
                type="text"
                id="term"
                {...register("term", { valueAsNumber: true })}
                onKeyDown={handleKeyDown}
              />
              <p>years</p>
            </div>
          </div>
          <div className="rate">
            <label htmlFor="rate">{rate}</label>
            <div className={`rate_input${errors.rate ? " input_error" : ""}`}>
              <input
                type="text"
                id="rate"
                {...register("rate", { valueAsNumber: true })}
                onKeyDown={handleKeyDown}
              />
              <p>%</p>
            </div>
          </div>
        </article>

        <article className="repayment_interest">
          <h2>{type}</h2>
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
              {repay}
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
              {interest}
            </label>
          </div>
        </article>

        <button type="submit">
          <img src={iconCalc} alt="calculator icon" /> {calculate}
        </button>
      </form>
    </section>
  );
};
