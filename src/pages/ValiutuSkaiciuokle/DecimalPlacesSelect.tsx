import React from 'react';
import { StyledBoxRight } from '../../styles/UtilityStyles';

import { DecimalPlaceOptions } from './helpers';
import Select from '../../components/Select';
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
    <StyledBoxRight>
      <h5>Skaičiai po kablelio</h5>
      <Select
        id='decimalPlacesSelect'
        options={DecimalPlaceOptions}
        onChange={handleSelectChange}
      />
    </StyledBoxRight>
  );
};

export default DecimalPlacesSelect;
