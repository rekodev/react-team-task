import { convertDateToCustomFormat } from '../../utilities/dateFormatting';

export const formatValue = (value: number, selectedDecimalPlaces: number) => {
  const fixedValue = value.toFixed(selectedDecimalPlaces);
  return fixedValue.includes('.')
    ? parseFloat(fixedValue).toString()
    : fixedValue;
};

export const getFlagURL = (currency: string) => {
  if (currency) {
    return `https://wise.com/public-resources/assets/flags/rectangle/${currency.toLowerCase()}.png`;
  }
};

export const DecimalPlaceOptions = [
  { value: '0', label: '0' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
];

export const formatHistoricalEndpointString = (selectedDate: string) => {
  if (selectedDate !== '') {
    const convertedDate = convertDateToCustomFormat(selectedDate);

    return `https://api.freecurrencyapi.com/v1/historical?apikey=RvEoseBzt4b46DkMYvCj0MVI7yQ33Ma5ar8tjKpJ&currencies=EUR%2CUSD%2CJPY%2CBGN%2CCZK%2CDKK%2CGBP%2CHUF%2CPLN%2CRON%2CSEK%2CCHF%2CISK%2CNOK%2CHRK%2CRUB%2CTRY%2CAUD%2CBRL%2CCAD%2CCNY%2CHKD%2CIDR%2CILS%2CINR%2CKRW%2CMXN%2CMYR%2CNZD%2CPHP%2CSGD%2CTHB%2CZAR&date_from=${convertedDate[0]}&date_to=${convertedDate[1]}`;
  } else {
    return '';
  }
};
