import React, { useState } from 'react';
import {
  StyledAtlyginimoMokesciuSkaiciuokle,
  FormWrapper,
  ResultWrapper,
} from './style';
import {
  StyledBoxLeft,
  StyledBox,
  StyledBoxRight,
  StyledSectionContainer,
} from '../../styles/UtilityStyles';
import Input from '../../components/Input';
import RadioButton from '../../components/RadioButton';

const AtlyginimoIrMokesciuSkaiciuokle = () => {
  const [grossSalary, setGrossSalary] = useState(0);
  const [result, setResult] = useState({
    incomeTax: 0,
    healthInsuranceTax: 0,
    pensionAndSocialSecurityTax: 0,
    netSalaryTemp: 0,
    grossSalaryTemp: 0,
    sodraTax: 0,
    fullCostOfWorkplace: 0,
    npd: 0,
  });

  const [salaryType, setSalaryType] = useState('Į rankas');
  const [isSavingAdditionalPension, setIsSavingAdditionalPension] =
    useState(false);
  const [additionalPensionRate, setAdditionalPensionRate] = useState('');

  const calculateNPD = (grossSalary: number) => {
    if (grossSalary <= 840) {
      return 625; // NPD is 625 eu
    } else if (grossSalary > 840 && grossSalary <= 1926) {
      return 625 - 0.42 * (grossSalary - 840);
    } else if (grossSalary > 1926) {
      const formule = 400 - 0.18 * (grossSalary - 642);

      return formule > 0 ? formule : 0;
    }

    return 0; // default return value if none of the conditions are met
  };
  const calculateGrossFromNet = (
    netSalary: number,
    incomeTaxRate: number,
    healthInsuranceTaxRate: number,
    pensionAndSocialSecurityTaxRate: number,
    additionalPensionRate: number
  ) => {
    let grossSalary = netSalary;
    let lastGrossSalary;

    // Iterate until grossSalary converges to a stable value
    while (lastGrossSalary !== grossSalary) {
      lastGrossSalary = grossSalary;

      const npd = calculateNPD(grossSalary);
      const taxable = grossSalary - npd;

      const incomeTax = taxable * incomeTaxRate;
      const healthInsuranceTax = grossSalary * healthInsuranceTaxRate;
      const pensionAndSocialSecurityTax =
        grossSalary * (pensionAndSocialSecurityTaxRate + additionalPensionRate);

      grossSalary =
        netSalary +
        incomeTax +
        healthInsuranceTax +
        pensionAndSocialSecurityTax;
    }

    return grossSalary;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let netSalaryTemp;
    let grossSalaryTemp;
    const additionalPensionRate = isSavingAdditionalPension ? 0.03 : 0;

    if (salaryType === 'Į rankas') {
      netSalaryTemp = grossSalary;
      grossSalaryTemp = calculateGrossFromNet(
        netSalaryTemp,
        0.2,
        0.0698,
        0.1252,
        additionalPensionRate
      );
    } else {
      grossSalaryTemp = grossSalary;
      netSalaryTemp = 0; // To be calculated
    }

    const npd = calculateNPD(grossSalaryTemp); // Calculate NPD using the function
    const incomeTax = (grossSalaryTemp - npd) * 0.2;
    const healthInsuranceTax = grossSalaryTemp * 0.0698;
    const pensionAndSocialSecurityTax =
      grossSalaryTemp * (0.1252 + additionalPensionRate);

    if (salaryType !== 'Į rankas') {
      netSalaryTemp =
        grossSalaryTemp -
        incomeTax -
        healthInsuranceTax -
        pensionAndSocialSecurityTax;
    }

    const sodraTax = grossSalaryTemp * 0.0177;

    const fullCostOfWorkplace =
      incomeTax +
      healthInsuranceTax +
      pensionAndSocialSecurityTax +
      netSalaryTemp +
      sodraTax;

    setResult({
      incomeTax,
      healthInsuranceTax,
      pensionAndSocialSecurityTax,
      sodraTax,
      netSalaryTemp,
      grossSalaryTemp,
      fullCostOfWorkplace,
      npd,
    });
  };

  return (
    <StyledAtlyginimoMokesciuSkaiciuokle>
      <StyledSectionContainer>
        <h1>Atlyginimo ir mokesčių skaičiuoklė</h1>
        <StyledBox>
          <StyledBoxLeft className='box-left'>
            <FormWrapper onSubmit={handleSubmit}>
              <div className='control-radio'>
                {' '}
                <RadioButton
                  label='Atlyginimas:'
                  name=''
                  options={['Ant popieriaus', 'Į rankas']}
                  value={salaryType}
                  onChange={() =>
                    setSalaryType(
                      salaryType === 'Į rankas' ? 'Ant popieriaus' : 'Į rankas'
                    )
                  }
                />
              </div>
              {salaryType === 'Ant popieriaus' ? (
                <>
                  <Input
                    id='grossSalary'
                    label
                    labelText='Ant popieriaus'
                    type='number'
                    value={grossSalary === 0 ? '' : grossSalary}
                    onChange={(e) => setGrossSalary(Number(e.target.value))}
                  />
                </>
              ) : (
                <>
                  <Input
                    label
                    labelText='Į rankas'
                    data-testid='grossSalary'
                    id='grossSalary'
                    type='number'
                    value={grossSalary === 0 ? '' : grossSalary}
                    onChange={(e) => setGrossSalary(Number(e.target.value))}
                  />
                </>
              )}
              <label htmlFor='additionalPension'>
                Kaupiu pensija papildomai
                <input
                  id='additionalPension'
                  type='checkbox'
                  checked={isSavingAdditionalPension}
                  onChange={(e) =>
                    setIsSavingAdditionalPension(e.target.checked)
                  }
                />
              </label>
              {isSavingAdditionalPension && (
                <label htmlFor='additionalPensionRate'>
                  Kiek % ?
                  <select
                    id='additionalPensionRate'
                    value={additionalPensionRate}
                    onChange={(e) => setAdditionalPensionRate(e.target.value)}
                  >
                    <option className='select-class' value='3'>
                      3%
                    </option>
                  </select>
                </label>
              )}
              <button className='button' type='submit'>
                Skaičiuoti
              </button>
            </FormWrapper>
          </StyledBoxLeft>
          <StyledBoxRight className='box-right'>
            <ResultWrapper>
              <p>
                Priskaičiuotas atlyginimas "ant popieriaus"
                <span>{result.grossSalaryTemp.toFixed(2)} €</span>
              </p>
              <p>
                Pritaikytas NPD <span>{result.npd.toFixed(2)} €</span>
              </p>
              <p>
                Pajamų mokestis 20 %{' '}
                <span>{result.incomeTax.toFixed(2)} €</span>
              </p>
              <p>
                Sodra. Sveikatos draudimas 6.98 %{' '}
                <span>{result.healthInsuranceTax.toFixed(2)} €</span>
              </p>
              <p>
                Sodra. Pensijų ir soc. draudimas 12.52 %{' '}
                <span>{result.pensionAndSocialSecurityTax.toFixed(2)} €</span>
              </p>

              <p>
                Išmokamas atlyginimas "į rankas"
                <span>{result.netSalaryTemp.toFixed(2)} €</span>
              </p>
              <p>
                Sodra 1.77 %: <span>{result.sodraTax.toFixed(2)} €</span>
              </p>
              <p>
                Visa darbo vietos kaina{' '}
                <span>{result.fullCostOfWorkplace.toFixed(2)} €</span>
              </p>
            </ResultWrapper>
          </StyledBoxRight>
        </StyledBox>
      </StyledSectionContainer>
    </StyledAtlyginimoMokesciuSkaiciuokle>
  );
};

export default AtlyginimoIrMokesciuSkaiciuokle;
