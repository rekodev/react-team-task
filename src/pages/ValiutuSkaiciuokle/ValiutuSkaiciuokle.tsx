import { useState } from 'react';
import { StyledValiutuSkaiciuokle } from './style';
import Input from '../../components/Input';
import {
  StyledBox,
  StyledBoxRight,
  StyledSectionContainer,
} from '../../styles/UtilityStyles';
import useCurrencyConversion from './useCurrencyConversion';
import CurrencySelect from './CurrencySelect';
import FullScreenLoader from '../../components/FullScreenLoader';

const ValiutuSkaiciuokle = () => {
  const conversion = useCurrencyConversion();

  const [activeInput, setActiveInput] = useState({
    id: '',
    value: 0,
    rawValue: '',
  });

  const formatValue = (value: number) => {
    const fixedValue = value.toFixed(5);
    return fixedValue.includes('.')
      ? parseFloat(fixedValue).toString()
      : fixedValue;
  };

  return (
    <StyledValiutuSkaiciuokle>
      <StyledSectionContainer>
        <h1>Valiutų Skaičiuoklė</h1>
        <p>
          Si aplikacija nnaudoja naujasia valiutos kursa. <br />
          Iveskite norima suma i laukeli ir ji bus konvertuojama. <br />
          Jei norimos valiutos nėra pradiniame sąraše, pridėkite pasirinkdami iš
          išsiskleidžiančio sąrašo
        </p>
        <StyledBox>
          <StyledBoxRight>
            <CurrencySelect />
          </StyledBoxRight>
          <StyledBoxRight>
            {conversion && conversion.data ? (
              <ul>
                {Object.entries(conversion.data).map(([currency, value]) => (
                  <Input
                    id={currency}
                    type='text'
                    label
                    labelText={currency}
                    value={
                      currency === activeInput.id
                        ? activeInput.rawValue
                        : formatValue(activeInput.value * value)
                    }
                    onChange={(e) =>
                      setActiveInput({
                        id: currency,
                        value: e.target.value ? parseFloat(e.target.value) : 0,
                        rawValue: e.target.value,
                      })
                    }
                  />
                ))}
              </ul>
            ) : (
              <FullScreenLoader />
            )}
          </StyledBoxRight>
        </StyledBox>
      </StyledSectionContainer>
    </StyledValiutuSkaiciuokle>
  );
};

export default ValiutuSkaiciuokle;
