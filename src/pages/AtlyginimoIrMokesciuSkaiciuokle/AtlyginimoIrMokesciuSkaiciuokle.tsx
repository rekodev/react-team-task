import React, { useState } from 'react';
import {
  StyledAtlyginimoMokesciuSkaiciuokle,
  StyledSectionContainer,
  StyledBox,
  StyledBoxLeft,
  StyledBoxRight,
  FormWrapper,
  ResultWrapper,
} from './style';

const AtlyginimoIrMokesciuSkaiciuokle = () => {
  const [grossSalary, setGrossSalary] = useState(0);
  const [result, setResult] = useState({
    incomeTax: 0,
    healthInsuranceTax: 0,
    pensionAndSocialSecurityTax: 0,
    netoSalary: 0,
    sodraTax: 0,
    fullCostOfWorkplace: 0,
    npd: 0,
  });

  const [salaryType, setSalaryType] = useState('');

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const npd = calculateNPD(grossSalary); // Calculate NPD using the function
    const incomeTax = (grossSalary - npd) * 0.2;
    const healthInsuranceTax = grossSalary * 0.0698;
    const pensionAndSocialSecurityTax = grossSalary * 0.1252;
    const sodraTax = grossSalary * 0.0177;
    const netoSalary =
      grossSalary -
      incomeTax -
      healthInsuranceTax -
      pensionAndSocialSecurityTax;
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
                Ant popieriaus
              </label>
              <label>
                <input
                  type='radio'
                  value='Į rankas'
                  checked={salaryType === 'Į rankas'}
                  onChange={(e) => setSalaryType(e.target.value)}
                />
                Į rankas
              </label>
              {salaryType === 'Ant popieriaus' ? (
                <>
                  <label htmlFor='grossSalary'>Ant popieriaus:</label>
                  <input
                    id='grossSalary'
                    type='number'
                    value={grossSalary}
                    onChange={(e) => setGrossSalary(Number(e.target.value))}
                  />
                </>
              ) : (
                <>
                  <label htmlFor='grossSalary'>Į rankas:</label>
                  <input
                    id='grossSalary'
                    type='number'
                    value={grossSalary}
                    onChange={(e) => setGrossSalary(Number(e.target.value))}
                  />
                </>
              )}

              <button type='submit'>Calculate</button>
            </FormWrapper>
          </StyledBoxLeft>
          <StyledBoxRight className='box-right'>
            <ResultWrapper>
              <p>Pritaikytas NPD {result.npd.toFixed(2)} €</p>
              <p>Pajamų mokestis 20 % {result.incomeTax.toFixed(2)} €</p>
              <p>
                Sodra. Sveikatos draudimas 6.98 %{' '}
                {result.healthInsuranceTax.toFixed(2)} €
              </p>
              <p>
                Sodra. Pensijų ir soc. draudimas 12.52 %{' '}
                {result.pensionAndSocialSecurityTax.toFixed(2)}€
              </p>
              <p>
                Išmokamas atlyginimas "į rankas" {result.netoSalary.toFixed(2)}€
              </p>
              <p>Sodra 1.77 %: {result.sodraTax.toFixed(2)}€</p>
              <p>
                Visa darbo vietos kaina {result.fullCostOfWorkplace.toFixed(2)}€
              </p>
            </ResultWrapper>
          </StyledBoxRight>
        </StyledBox>
      </StyledSectionContainer>
    </StyledAtlyginimoMokesciuSkaiciuokle>
  );
};

export default AtlyginimoIrMokesciuSkaiciuokle;
