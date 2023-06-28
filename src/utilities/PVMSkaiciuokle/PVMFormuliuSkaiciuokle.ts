import { ICalculateSumTotalFn } from './types';

export const calculateSumTotal: ICalculateSumTotalFn = (
  taxRateOption,
  sumNoTax,
  setSumTotal
) => {
  let taxResult;
  switch (taxRateOption) {
    case 21:
      taxResult = (sumNoTax * 21) / 100;
      setSumTotal((sumNoTax + taxResult).toFixed(2));
      break;
    case 9:
      taxResult = (sumNoTax * 9) / 100;
      setSumTotal((sumNoTax + taxResult).toFixed(1));
      break;
    case 5:
      taxResult = (sumNoTax * 5) / 100;
      setSumTotal((sumNoTax + taxResult).toFixed(2));
      break;
  }
};
