const calculateIncomeTax = (grossSalary: number) => {
  return grossSalary * 0.2; // 20% income tax
};

const calculateHealthInsuranceTax = (grossSalary: number) => {
  return grossSalary * 0.0698; // 6.98 health insurance tax
};

const calculatePensionAndSocialSecurityTax = (grossSalary: number) => {
  return grossSalary * 0.1252; // 12.52 pension and social security tax
};

const calculateSodraTax = (grossSalary: number) => {
  return grossSalary * 0.0177; // 1.77 Sodra tax
};

const calculateFullCostOfWorkplace = (grossSalary: number) => {
  return (
    grossSalary +
    calculateIncomeTax(grossSalary) +
    calculateHealthInsuranceTax(grossSalary) +
    calculatePensionAndSocialSecurityTax(grossSalary) +
    calculateSodraTax(grossSalary)
  );
};

const calculateNPD = (grossSalary: number) => {
  if (grossSalary < 840) {
    return 625; // NPD is 625 eu
  } else if (grossSalary > 840 && grossSalary < 1926) {
    return 625 - 0.42 * (grossSalary - 840);
  } else if (grossSalary > 1926) {
    return 400 - 0.18 * (grossSalary - 642);
  }

  return 0; // default return value if none of the conditions are met
};
