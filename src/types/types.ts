export interface IResultProps {
  result: IMortgage;
  selectedPlan: string;
}

export interface IFormProps {
  setResult: (result: IMortgage) => void;
  selectedPlan: string;
  setSelectedPlan: (selectedPlan: string) => void;
}

export interface IMortgage {
  amount: number;
  term: number;
  rate: number;
  plan: string,
}

export const IMortgageDefault = {
  amount: 0,
  term: 0,
  rate: 0,
  plan: "",
};
