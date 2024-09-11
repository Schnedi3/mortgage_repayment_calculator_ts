import { useState } from "react";

import { Form } from "./components/Form";
import { Result } from "./components/Result";
import { Empty } from "./components/Empty";

import { IMortgage, IMortgageDefault } from "./types/types";
import "./css/app.css";

export const App = () => {
  const [result, setResult] = useState<IMortgage>(IMortgageDefault);
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  return (
    <main className="app">
      <Form
        setResult={setResult}
        selectedPlan={selectedPlan}
        setSelectedPlan={setSelectedPlan}
      />
      {result.amount !== 0 ? (
        <Result result={result} selectedPlan={selectedPlan} />
      ) : (
        <Empty />
      )}
    </main>
  );
};
