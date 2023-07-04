export const formatValue = (value: number, selectedDecimalPlaces: number) => {
  const fixedValue = value.toFixed(selectedDecimalPlaces);
  return fixedValue.includes('.')
    ? parseFloat(fixedValue).toString()
    : fixedValue;
};

export const getFlagURL = (currency: string) =>
  `https://wise.com/public-resources/assets/flags/rectangle/${currency.toLowerCase()}.png`;

export const DecimalPlacesOptions = [0, 1, 2, 3, 4, 5];

export const DecimalPlaceOptions = [
  { value: '0', label: '0' },
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
];
