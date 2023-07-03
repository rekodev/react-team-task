import React, { useState } from 'react';
import { StyledBoxRight } from '../../styles/UtilityStyles';

interface IDecimalPlacesSelectProps {
  onChange?: (value: number) => void;
}

const DecimalPlacesSelect: React.FC<IDecimalPlacesSelectProps> = ({
  onChange,
}) => {
  const options = [0, 1, 2, 3, 4, 5];

  const [selectedValue, setSelectedValue] = useState<number>(0);

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseFloat(e.target.value);
    setSelectedValue(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <StyledBoxRight>
      <h5>Skaičiai po kablelio</h5>
      <select value={selectedValue} onChange={handleSelectChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </StyledBoxRight>
  );
};

export default DecimalPlacesSelect;
