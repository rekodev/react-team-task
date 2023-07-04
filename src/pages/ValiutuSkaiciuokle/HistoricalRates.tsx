import React, { ChangeEvent, useState } from 'react';
import Input from '../../components/Input';
import { convertDateToCustomFormat } from '../../utilities/dateFormatting';

interface IHistoricalRatesProps {
  onDateSelect: (date: string) => void;
}

const HistoricalRates = ({ onDateSelect }: IHistoricalRatesProps) => {
  const [selectedDate, setSelectedDate] = useState<string>('');

  const handleDateInput = (e: ChangeEvent<HTMLInputElement>) => {
    const date = e.target.value;
    console.log(convertDateToCustomFormat(date));
    setSelectedDate(date);
    onDateSelect(date);
  };
  return (
    <div>
      <Input
        id='1'
        type='date'
        label
        value={selectedDate}
        labelText='Valiutos kurso data:'
        onChange={handleDateInput}
      />
    </div>
  );
};

export default HistoricalRates;
