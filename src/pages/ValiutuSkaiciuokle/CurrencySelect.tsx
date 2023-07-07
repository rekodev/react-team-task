import { ChangeEvent, useEffect, useState } from 'react';
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
import FullScreenLoader from '../../components/FullScreenLoader';

import SVG from '../../assets/icons/down-arrow-svgrepo-com.svg';
import { ICurrencySelectProps } from './types';

const CurrencySelect = ({ onAddCurrency }: ICurrencySelectProps) => {
  const conversion = useCurrencyConversion();
  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [activeInput, setActiveInput] = useState({
    id: '',
    value: 0,
    rawValue: '',
    convertedValue: 0,
  });

  const getFlagURL = (currency: string) => {
    if (currency) {
      return `https://wise.com/public-resources/assets/flags/rectangle/${currency.toLowerCase()}.png`;
    }
  };
  useEffect(() => {
    if (selectedCurrency) {
      if (onAddCurrency) {
        onAddCurrency(selectedCurrency);
      }
      setSelectedCurrency('');
    }
  }, [selectedCurrency, onAddCurrency]);

  const formatValue = (value: number) => {
    return value.toFixed(2);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value ? parseFloat(e.target.value) : 0;
    const conversionRate = conversion?.data[selectedCurrency];

    setActiveInput({
      id: selectedCurrency,
      value: inputValue,
      rawValue: e.target.value,
      convertedValue: inputValue * (conversionRate ? conversionRate : 0),
    });
  };
  return (
    <StyledCurrencySelectList>
      <div className='select-wrapper'>
        <h5>Pridėti valiutą</h5>
        {conversion && conversion.data ? (
          <div>
            <div className='select'>
              <select
                value={selectedCurrency}
                onChange={(e) => setSelectedCurrency(e.target.value)}
              >
                <option value=''>
                  Pasirinkite valiutą <img src={SVG} alt='' />
                </option>
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
          </div>
        ) : (
          <FullScreenLoader />
        )}
      </div>
    </StyledCurrencySelectList>
  );
};

export default CurrencySelect;
