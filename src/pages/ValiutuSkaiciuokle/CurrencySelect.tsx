import React, { useEffect, useState } from 'react';
import {
  StyledCurrencySelectList,
  StyledButton,
  StyledInputContainer,
  StyledLabelFlagContainer,
  StyledFlag,
  StyledLabel,
} from './style';
import Input from '../../components/Input';
import useCurrencyConversion from './useCurrencyConversion';
import { StyledBox } from '../../styles/UtilityStyles';

const CurrencySelect = ({ onAddCurrency }) => {
  const conversion = useCurrencyConversion();
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [activeInput, setActiveInput] = useState({
    id: '',
    value: 0,
    rawValue: '',
  });

  const getFlagURL = (currency) => {
    return `https://wise.com/public-resources/assets/flags/rectangle/${currency.toLowerCase()}.png`;
  };
  useEffect(() => {
    if (selectedCurrency) {
      if (onAddCurrency) {
        onAddCurrency(selectedCurrency);
      }
      setSelectedCurrency('');
    }
  }, [selectedCurrency, onAddCurrency]);

  const formatValue = (value) => {
    return value.toFixed(2);
  };

  const handleInputChange = (e) => {
    const inputValue = e.target.value ? parseFloat(e.target.value) : 0;
    const conversionRate = conversion.data[selectedCurrency];

    setActiveInput({
      id: selectedCurrency,
      value: inputValue,
      rawValue: e.target.value,
      convertedValue: inputValue * conversionRate,
    });
  };

  return (
    <StyledCurrencySelectList>
      <StyledBox>
        <h5>Pridėti valiutą</h5>
        {conversion && conversion.data ? (
          <div>
            <select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
            >
              <option value=''>Pasirinkite valiutą</option>
              {Object.entries(conversion.data).map(([currency]) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
            {selectedCurrency && (
              <div>
                <StyledInputContainer>
                  <StyledButton onClick={() => setSelectedCurrency('')}>
                    <i className='fa-solid fa-minus'></i>
                  </StyledButton>
                  <Input
                    id={selectedCurrency}
                    label
                    type='text'
                    value={
                      selectedCurrency === activeInput.id
                        ? activeInput.rawValue
                        : formatValue(
                            activeInput.value *
                              conversion.data[selectedCurrency]
                          )
                    }
                    onChange={handleInputChange}
                  />
                  <StyledLabelFlagContainer>
                    <StyledLabel htmlFor={selectedCurrency}>
                      {selectedCurrency}
                    </StyledLabel>
                    <StyledFlag
                      src={getFlagURL(selectedCurrency)}
                      alt={`${selectedCurrency} flag`}
                    />
                  </StyledLabelFlagContainer>
                </StyledInputContainer>
              </div>
            )}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </StyledBox>
    </StyledCurrencySelectList>
  );
};

export default CurrencySelect;
