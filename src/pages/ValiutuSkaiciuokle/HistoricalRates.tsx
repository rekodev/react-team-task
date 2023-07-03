import React, { useState } from 'react';
import Input from '../../components/Input';

const HistoricalRates = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateInput = (e) => {
    const date = e.target.value;
    setSelectedDate(date);
    onDateSelect(date);
  };
  return (
    <div>
      <Input
        id='1'
        type='date'
        label
        labelText='Valiutos kurso data:'
        onChange={handleDateInput}
      />
    </div>
  );
};

export default HistoricalRates;
