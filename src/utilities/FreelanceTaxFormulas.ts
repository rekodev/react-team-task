interface ICalculations {
  income: number;
  expenses: number;
  additionalPension?: boolean;
  VSDPaid?: number;
  PSDPaid?: number;
}

class FreelanceMokesciuSkaiciuokle {
  //Apmokestinamos Pajamos pagal tax.lt
  //expenses tax.lt yra pasirinkimas 30%, bet ta kituose failuose galima siust
  static calculateApmokestinamosPajamos({
    income,
    expenses,
    additionalPension,
  }: ICalculations) {
    const profit = income - expenses;
    const apmokestinamosPajamos = additionalPension
      ? profit * 0.8245
      : profit * 0.7975;
    return apmokestinamosPajamos;
  }

  //VSD
  static calculateVSDAmount({
    income,
    expenses,
    additionalPension,
    VSDPaid,
  }: ICalculations) {
    const profit = income - expenses;
    const VSDAmount =
      (additionalPension ? profit * 0.9 * 0.1552 : profit * 0.9 * 0.1252) -
      (VSDPaid || 0);
    return VSDAmount;
  }

  //PSD
  static calculatePSDAmount({ income, expenses, PSDPaid }: ICalculations) {
    const profit = income - expenses;
    const PSDAmount = profit * 0.9 * 0.0698 - (PSDPaid || 0);
    return PSDAmount;
  }

  static calculateGPMAmount({ income, expenses }: ICalculations) {
    const profit = income - expenses;
    const GPMAmount = profit < 20000 ? profit * 0.05 : profit * 0.15;
    return GPMAmount;
  }

  //Final Income
  static calculateFinalIncome(
    income: number,
    expenses: number,
    additionalPension: boolean,
    VSDPaid: number,
    PSDPaid: number
  ) {
    const apmokestinamosPajamos = this.calculateApmokestinamosPajamos({
      income,
      expenses,
      additionalPension,
    });
    const VSDAmount = this.calculateVSDAmount({
      income,
      expenses,
      additionalPension,
      VSDPaid,
    });
    const PSDAmount = this.calculatePSDAmount({ income, expenses, PSDPaid });
    const GPMAmount = this.calculateGPMAmount({ income, expenses });

    const finalIncome =
      apmokestinamosPajamos - VSDAmount - PSDAmount - GPMAmount;
    const finalTaxes = VSDAmount + PSDAmount + GPMAmount;

    return { finalIncome, finalTaxes };
  }
}

// Usage example
// let pajamos = 1100;
// let sanaudos = 100;
// let additionalPension = false;
// let VSDPaid = 100;
// let PSDPaid = 100;

// const apmokestinamosPajamos =
//   FreelanceMokesciuSkaiciuokle.calculateApmokestinamosPajamos(
//     pajamos,
//     sanaudos,
//     additionalPension
//   );
// const VSDAmount = FreelanceMokesciuSkaiciuokle.calculateVSDAmount(
//   pajamos,
//   sanaudos,
//   additionalPension,
//   VSDPaid
// );
// const PSDAmount = FreelanceMokesciuSkaiciuokle.calculatePSDAmount(
//   pajamos,
//   sanaudos,
//   PSDPaid
// );

// console.log('apmokestinamosPajamos', apmokestinamosPajamos);
// console.log('VSD', VSDAmount);
// console.log('PSD', PSDAmount);

export default FreelanceMokesciuSkaiciuokle;
