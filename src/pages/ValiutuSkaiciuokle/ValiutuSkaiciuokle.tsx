import { useCallback, useEffect, useState } from 'react';
import { StyledValiutuSkaiciuokle } from './style';

import {
  StyledBox,
  StyledBoxRight,
  StyledSectionContainer,
} from '../../styles/UtilityStyles';

import CurrencySelect from './CurrencySelect';
import FullScreenLoader from '../../components/FullScreenLoader';
import { ICurrencyProps, IDataObject } from './types';
import DecimalPlacesSelect from './DecimalPlacesSelect';
import HistoricalRates from './HistoricalRates';

import H1 from '../../components/Heading';

import CurrenciesList from './CurrenciesList';
import { formatHistoricalEndpointString } from './helpers';

const ENDPOINT_URI =
  'https://api.freecurrencyapi.com/v1/latest?apikey=RvEoseBzt4b46DkMYvCj0MVI7yQ33Ma5ar8tjKpJ&currencies=USD%2CEUR%2CJPY%2CBGN%2CCZK%2CDKK%2CGBP%2CHUF%2CPLN%2CRON%2CSEK%2CCHF%2CISK%2CNOK%2CHRK%2CRUB%2CTRY%2CAUD%2CBRL%2CCAD%2CCNY%2CHKD%2CIDR%2CILS%2CINR%2CKRW%2CMXN%2CMYR%2CNZD%2CPHP%2CSGD%2CTHB%2CZAR&base_currency=EUR';

const ValiutuSkaiciuokle = () => {
  const [conversion, setConversion] = useState<null | ICurrencyProps>(null);
  const [selectedDecimalPlaces, setSelectedDecimalPlaces] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState('');

  const convertData = useCallback(
    (data: ICurrencyProps, chosenDate: string) => {
      if (chosenDate) {
        return data.data[chosenDate] as unknown as IDataObject;
      } else {
        return data.data as IDataObject;
      }
    },
    []
  );

  const fetchedCurrencies = useCallback(
    async (chosenDate: string) => {
      const ENDPOINT_HISTORICAL_RATES_URI =
        formatHistoricalEndpointString(chosenDate);
      const data: ICurrencyProps =
        chosenDate === ''
          ? await (await fetch(ENDPOINT_URI)).json()
          : await (await fetch(ENDPOINT_HISTORICAL_RATES_URI)).json();

      const convertedData = convertData(data, chosenDate);

      console.log(convertedData, 'inside valiutuskaiciuokle');
      const orderedData: ICurrencyProps = {
        data: {
          EUR: convertedData?.EUR,
          ...convertedData,
        },
      };

      setConversion(orderedData);

      // instead of setting state  the hook should return orderedData
    },
    [convertData]
  );

  const handleSetDate = (date: string) => {
    console.log(date);
    setSelectedDate(date);
    fetchedCurrencies(date);
  };

  useEffect(() => {
    if (!conversion) {
      // set conversion state with the data received from the hook
      fetchedCurrencies(selectedDate);
      return;
    }
  }, [conversion, convertData, fetchedCurrencies, selectedDate]);

  const handleAddCurrency = (currency: any) => {
    setConversion((prevConversion) => {
      if (prevConversion && prevConversion.data) {
        return {
          data: {
            ...prevConversion.data,
            [currency]: 0,
          },
        };
      }
      return prevConversion;
    });
  };
  const handleRemoveCurrency = (currency: string) => {
    setConversion((prevConversion) => {
      if (prevConversion && prevConversion.data) {
        const { [currency]: _, ...remainingCurrencies } = prevConversion.data;
        return {
          data: remainingCurrencies,
        };
      }
      return prevConversion;
    });
  };

  return (
    <StyledValiutuSkaiciuokle>
      <StyledSectionContainer>
        <H1 text='Valiutų Skaičiuoklė' />
        <StyledBox>
          <StyledBoxRight>
            <HistoricalRates onDateSelect={handleSetDate} />
            <CurrencySelect onAddCurrency={handleAddCurrency} />
            <DecimalPlacesSelect onChange={setSelectedDecimalPlaces} />
          </StyledBoxRight>
          <StyledBoxRight>
            {conversion && conversion.data ? (
              <CurrenciesList
                conversionData={conversion.data}
                onRemove={handleRemoveCurrency}
                decimalPlaces={selectedDecimalPlaces}
              />
            ) : (
              <FullScreenLoader />
            )}
          </StyledBoxRight>
        </StyledBox>
      </StyledSectionContainer>
    </StyledValiutuSkaiciuokle>
  );
};

export default ValiutuSkaiciuokle;
