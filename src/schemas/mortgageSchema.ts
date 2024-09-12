import { z } from "zod";

export const mortgageSchema = z.object({
  amount: z
    .string()
    .transform((val) => Number(val.split(",").join("")))
    .pipe(z.number().min(1)),
  term: z.number().positive(),
  rate: z.number().positive(),
  plan: z.enum(["repayment", "interest"]),
});
