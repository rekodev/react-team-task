import React, { ChangeEvent, useState } from 'react';
import Input from '../../components/Input';
import { convertDateToCustomFormat } from '../../utilities/dateFormatting';
import { StyledHistoricalInputContainer } from './style';

interface IHistoricalRatesProps {
  onDateSelect: (date: string) => void;
}

const HistoricalRates = ({ onDateSelect }: IHistoricalRatesProps) => {
  const [selectedDate, setSelectedDate] = useState<string>(''); // duplicated state
  // review decimalPlaces component and replace duplicate state.
  // value can be received from the parent element.

  const handleDateInput = (e: ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    console.log(convertDateToCustomFormat(date));
    setSelectedDate(date);
    onDateSelect(date);
  };
  return (
    <StyledHistoricalInputContainer>
      <Input
        id='1'
        type='date'
        label
        value={selectedDate}
        labelText='Valiutos kurso data:'
        onChange={handleDateInput}
      />
    </StyledHistoricalInputContainer>
  );
};

export default HistoricalRates;
