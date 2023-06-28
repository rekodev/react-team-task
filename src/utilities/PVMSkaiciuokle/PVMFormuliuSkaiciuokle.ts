import { ITaxProps } from "./types";


export const calculateTax = ({ sumNoTax, taxRate }: ITaxProps) => {
  return (sumNoTax * taxRate) / 100;
};

export const calculateSumWithTax = ({ sumNoTax, taxRate }: ITaxProps) => {
  const taxAmount: number = calculateTax({ sumNoTax, taxRate });
  return (sumNoTax + taxAmount).toFixed(2);
};
