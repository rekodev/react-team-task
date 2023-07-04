import React, { useCallback, useState } from 'react';
import {
  StyledFlag,
  StyledInputContainer,
  StyledLabel,
  StyledLabelFlagContainer,
} from './style';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { getFlagURL, formatValue } from './helpers';
import { IDataObject } from './types';

interface ICurrenciesListProps {
  decimalPlaces: number;
  conversionData: IDataObject;
  onRemove: (args: string) => void;
}

const CurrenciesList = ({
  conversionData,
  onRemove,
  decimalPlaces,
}: ICurrenciesListProps) => {
  const [activeInput, setActiveInput] = useState({
    id: '',
    value: 0,
    rawValue: '',
  });
  const handleOnRemove = useCallback(
    (currency: string) => {
      onRemove(currency);
    },
    [onRemove]
  );

  return (
    <ul>
      {Object.entries(conversionData).map(([currency, value]) => {
        const flagURL = getFlagURL(currency);
        return (
          <li key={currency}>
            <StyledInputContainer>
              <Button handleClick={() => handleOnRemove(currency)}>
                <i className='fa-solid fa-minus'></i>
              </Button>

              <Input
                id={currency}
                label
                labelText=''
                type='text'
                value={
                  currency === activeInput.id
                    ? activeInput.rawValue
                    : formatValue(
                        activeInput.value * value,
                        decimalPlaces
                      )
                }
                onChange={(e) =>
                  setActiveInput({
                    id: currency,
                    value: e.target.value ? parseFloat(e.target.value) : 0,
                    rawValue: e.target.value,
                  })
                }
              />
              <StyledLabelFlagContainer>
                <StyledLabel htmlFor={currency}>{currency}</StyledLabel>
                {/* separate component */}
                <StyledFlag src={flagURL} alt={`${currency} flag`} />
              </StyledLabelFlagContainer>
            </StyledInputContainer>
          </li>
        );
      })}
    </ul>
  );
};

export default CurrenciesList;
