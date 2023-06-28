import React from 'react';

export interface IOptionProps {
  value: string;
  label: string;
}

const Option: React.FC<IOptionProps> = ({ value, label }) => {
  return <option value={value}>{label}</option>;
};

export default Option;
