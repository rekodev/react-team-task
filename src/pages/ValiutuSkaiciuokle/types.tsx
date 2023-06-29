export interface CurrencyData {
  [currencyCode: string]: number;
}

export interface DataObject {
  data: CurrencyData;
}
