import { z } from "zod";

export const mortgageSchema = z.object({
  amount: z.number().positive(),
  term: z.number().positive(),
  rate: z.number().positive(),
  plan: z.enum(["repayment", "interest"]),
});
