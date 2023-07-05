import React from 'react';
import { StyledBoxRight } from '../../styles/UtilityStyles';

import { DecimalPlaceOptions } from './helpers';
import Select from '../../components/Select';
import { StyledDecimalInputContainer } from './style';
interface IDecimalPlacesSelectProps {
  onChange?: (value: number) => void;
}

const DecimalPlacesSelect: React.FC<IDecimalPlacesSelectProps> = ({
  onChange,
}) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseFloat(e.target.value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <StyledDecimalInputContainer>
      <div className='select-wrapper'>
        <h5>Skaičiai po kablelio</h5>
        <div className='select'>
          <Select
            id='decimalPlacesSelect'
            options={DecimalPlaceOptions}
            onChange={handleSelectChange}
          />
        </div>
      </div>
    </StyledDecimalInputContainer>
  );
};

export default DecimalPlacesSelect;
