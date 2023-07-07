export interface IDataObject {
  [currencyCode: string]: number;
}

export interface ICurrencyProps {
  data: IDataObject;
}

export interface ICurrenciesListProps {
  decimalPlaces: number;
  conversionData: IDataObject;
  onRemove: (args: string) => void;
}

export interface ICurrencySelectProps {
  onAddCurrency: (args: string) => void;
}

export interface IDecimalPlacesSelectProps {
  onChange?: (value: number) => void;
}

export interface IHistoricalRatesProps {
  onDateSelect: (date: string) => void;
}
