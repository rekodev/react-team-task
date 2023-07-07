import { ChangeEvent, useState } from 'react';
import Input from '../../components/Input';
import { convertDateToCustomFormat } from '../../utilities/dateFormatting';
import { StyledHistoricalInputContainer } from './style';
import { IHistoricalRatesProps } from './types';

const HistoricalRates = ({ onDateSelect }: IHistoricalRatesProps) => {
  const [selectedDate, setSelectedDate] = useState<string>(''); // duplicated state

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
