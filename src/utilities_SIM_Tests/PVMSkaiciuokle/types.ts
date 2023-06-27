export interface ICalculateSumTotalFn {
  (
    taxRateOption: number,
    sumNoTax: number,
    setSumTotal: React.Dispatch<React.SetStateAction<number>>
  ): void;
}
