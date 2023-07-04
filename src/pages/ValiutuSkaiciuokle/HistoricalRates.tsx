import React, { useState } from 'react';
import Input from '../../components/Input';
import { convertDateToCustomFormat } from '../../utilities/dateFormatting';

interface IHistoricalRatesProps {
  onDateSelect: (setSelectedDate: React.FC) => string[];
}

const HistoricalRates = ({ onDateSelect }: IHistoricalRatesProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateInput = (e) => {
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
