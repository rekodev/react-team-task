class AtlyginimoIrMokesciuFormules {
  calculateIncomeTax(grossSalary: number): number {
    return grossSalary * 0.2; // 20% income tax
  }

  calculateHealthInsuranceTax(grossSalary: number): number {
    return grossSalary * 0.0698; // 6.98 health insurance tax
  }

  calculatePensionAndSocialSecurityTax(grossSalary: number): number {
    return grossSalary * 0.1252; // 12.52 pension and social security tax
  }

  calculateSodraTax(grossSalary: number): number {
    return grossSalary * 0.0177; // 1.77 Sodra tax
  }

  calculateFullCostOfWorkplace(grossSalary: number): number {
    return (
      grossSalary +
      this.calculateIncomeTax(grossSalary) +
      this.calculateHealthInsuranceTax(grossSalary) +
      this.calculatePensionAndSocialSecurityTax(grossSalary) +
      this.calculateSodraTax(grossSalary)
    );
  }
}

let salaryCalculator = new AtlyginimoIrMokesciuFormules();

let grossSalary = 10000; // example value

console.log('Income Tax: ', salaryCalculator.calculateIncomeTax(grossSalary));
console.log(
  'Health Insurance Tax: ',
  salaryCalculator.calculateHealthInsuranceTax(grossSalary)
);
console.log(
  'Pension and Social Security Tax: ',
  salaryCalculator.calculatePensionAndSocialSecurityTax(grossSalary)
);
console.log('Sodra Tax: ', salaryCalculator.calculateSodraTax(grossSalary));
console.log(
  'Full Cost of Workplace: ',
  salaryCalculator.calculateFullCostOfWorkplace(grossSalary)
);

export default salaryCalculator;
