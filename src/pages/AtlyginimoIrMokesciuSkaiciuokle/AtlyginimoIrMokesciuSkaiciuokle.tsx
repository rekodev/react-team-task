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

const AtlyginimoIrMokesciuSkaiciuokle = () => {
  const [grossSalary, setGrossSalary] = useState(0);
  const [result, setResult] = useState({
    incomeTax: 0,
    healthInsuranceTax: 0,
    pensionAndSocialSecurityTax: 0,
    netoSalary: 0,
    brutoSalary: 0,
    sodraTax: 0,
    fullCostOfWorkplace: 0,
    npd: 0,
  });

  const [salaryType, setSalaryType] = useState('');
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const npd = calculateNPD(grossSalary); // Calculate NPD using the function
    const incomeTax = (grossSalary - npd) * 0.2;
    const healthInsuranceTax = grossSalary * 0.0698;
    const pensionAndSocialSecurityTax = isSavingAdditionalPension
      ? grossSalary * (0.1252 + 0.03) // if the user is saving an additional pension
      : grossSalary * 0.1252; // if the user is not saving an additional pension
    const sodraTax = grossSalary * 0.0177;

    const netoSalary = isSavingAdditionalPension
      ? grossSalary -
        incomeTax -
        healthInsuranceTax -
        pensionAndSocialSecurityTax // if the user is saving an additional pension
      : grossSalary -
        incomeTax -
        healthInsuranceTax -
        pensionAndSocialSecurityTax; // if the user is not saving an additional pension

    const brutoSalary =
      netoSalary + incomeTax + healthInsuranceTax + pensionAndSocialSecurityTax;
    const fullCostOfWorkplace =
      incomeTax +
      healthInsuranceTax +
      pensionAndSocialSecurityTax +
      netoSalary +
      sodraTax;

    setResult({
      incomeTax,
      healthInsuranceTax,
      pensionAndSocialSecurityTax,
      sodraTax,
      netoSalary,
      brutoSalary,
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
              <label htmlFor='grossSalary'>Atlyginimas:</label>
              <label>
                <input
                  type='radio'
                  value='Ant popieriaus'
                  checked={salaryType === 'Ant popieriaus'}
                  onChange={(e) => setSalaryType(e.target.value)}
                />
                "ant popieriaus"
              </label>
              <label>
                <input
                  type='radio'
                  value='Į rankas'
                  checked={salaryType === 'Į rankas'}
                  onChange={(e) => setSalaryType(e.target.value)}
                />
                "į rankas"
              </label>
              {salaryType === 'Ant popieriaus' ? (
                <>
                  <Input
                    id='grossSalary'
                    label
                    labelText='Ant popieriaus'
                    type='number'
                    value={grossSalary}
                    onChange={(e) => setGrossSalary(Number(e.target.value))}
                  />
                </>
              ) : (
                <>
                  <Input
                    label
                    labelText='Į rankas'
                    id='grossSalary'
                    type='number'
                    value={grossSalary}
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
                Išmokamas atlyginimas "į rankas"{' '}
                <span>{result.netoSalary.toFixed(2)} €</span>
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
