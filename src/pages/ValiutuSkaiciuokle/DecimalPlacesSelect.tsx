import React from 'react';
import { DecimalPlaceOptions } from './helpers';
import Select from '../../components/Select';
import { StyledDecimalInputContainer } from './style';
import { IDecimalPlacesSelectProps } from './types';

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
