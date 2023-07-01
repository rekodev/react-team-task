import React, { useState } from 'react';

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
    <div>
      <h3>Skaičiai po kablelio</h3>
      <select value={selectedValue} onChange={handleSelectChange}>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DecimalPlacesSelect;
