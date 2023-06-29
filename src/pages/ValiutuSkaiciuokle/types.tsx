export interface IDataObject {
  [currencyCode: string]: number;
}

export interface ICurrencyProps {
  data: IDataObject;
}
