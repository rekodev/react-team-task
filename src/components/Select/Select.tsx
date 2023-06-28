import React from 'react';
import Option from '../Option';
import { IOptionProps } from '../Option/Option';

interface ISelectProps {
  id: string;
  options: IOptionProps[];
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<ISelectProps> = ({ id, options, onChange }) => {
  return (
    <select id={id} onChange={onChange}>
      {options.map((option, index) => (
        <Option key={index} value={option.value} label={option.label} />
      ))}
    </select>
  );
};

export default Select;
