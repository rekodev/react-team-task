import { useEffect, useState } from 'react';
import {
  StyledButton,
  StyledFlag,
  StyledInputContainer,
  StyledLabel,
  StyledLabelFlagContainer,
  StyledValiutuSkaiciuokle,
} from './style';
import Input from '../../components/Input';
import {
  StyledBox,
  StyledBoxRight,
  StyledSectionContainer,
} from '../../styles/UtilityStyles';
// import useCurrencyConversion from './useCurrencyConversion';
import CurrencySelect from './CurrencySelect';
import FullScreenLoader from '../../components/FullScreenLoader';
import { ICurrencyProps, IDataObject } from './types';
import DecimalPlacesSelect from './DecimalPlacesSelect';
import HistoricalRates from './HistoricalRates';
import { convertDateToCustomFormat } from '../../utilities/dateFormatting';

const ENDPOINT_LATEST_RATES_URI =
  'https://api.freecurrencyapi.com/v1/latest?apikey=CXzykYmtN94nK6QnKbPkoKFo642PswLTpgafsLeW&currencies=USD%2CEUR%2CJPY%2CBGN%2CCZK%2CDKK%2CGBP%2CHUF%2CPLN%2CRON%2CSEK%2CCHF%2CISK%2CNOK%2CHRK%2CRUB%2CTRY%2CAUD%2CBRL%2CCAD%2CCNY%2CHKD%2CIDR%2CILS%2CINR%2CKRW%2CMXN%2CMYR%2CNZD%2CPHP%2CSGD%2CTHB%2CZAR&base_currency=EUR';

const ValiutuSkaiciuokle = () => {
  const [conversion, setConversion] = useState<null | ICurrencyProps>(null);
  const [selectedDecimalPlaces, setSelectedDecimalPlaces] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState('');

  let ENDPOINT_HISTORICAL_RATES_URI: string;

  useEffect(() => {
    const ENDPOINT_URI = ENDPOINT_LATEST_RATES_URI;

    if (selectedDate !== '') {
      console.log(convertDateToCustomFormat(selectedDate));

      const convertedDate = convertDateToCustomFormat(selectedDate);

      ENDPOINT_HISTORICAL_RATES_URI = `https://api.freecurrencyapi.com/v1/historical?apikey=CXzykYmtN94nK6QnKbPkoKFo642PswLTpgafsLeW&currencies=EUR%2CUSD%2CJPY%2CBGN%2CCZK%2CDKK%2CGBP%2CHUF%2CPLN%2CRON%2CSEK%2CCHF%2CISK%2CNOK%2CHRK%2CRUB%2CTRY%2CAUD%2CBRL%2CCAD%2CCNY%2CHKD%2CIDR%2CILS%2CINR%2CKRW%2CMXN%2CMYR%2CNZD%2CPHP%2CSGD%2CTHB%2CZAR&date_from=${convertedDate[0]}&date_to=${convertedDate[1]}`;
    }

    if (selectedDate === '') {
      console.log('date is empty');
    }

    const fetchedCurrencies = async () => {
      const data: ICurrencyProps =
        selectedDate === ''
          ? await (await fetch(ENDPOINT_URI)).json()
          : await (await fetch(ENDPOINT_HISTORICAL_RATES_URI)).json();

      if (
        typeof data.data === 'object' &&
        Object.keys(data.data).length === 1
      ) {
        const nestedObject = Object.values(data.data)[0];
        if (typeof nestedObject === 'object' && !Array.isArray(nestedObject)) {
          data.data = nestedObject as IDataObject;
        }
      }

      const orderedData: any = {
        data: {
          EUR: data.data.EUR,
          ...data.data,
        },
      };

      console.log(ENDPOINT_HISTORICAL_RATES_URI);

      setConversion(orderedData);
    };

    fetchedCurrencies();
  }, [selectedDate]);

  if (conversion) {
    console.log(conversion, 'Conversion');
  }

  const [activeInput, setActiveInput] = useState({
    id: '',
    value: 0,
    rawValue: '',
  });

  const formatValue = (value: number) => {
    const fixedValue = value.toFixed(selectedDecimalPlaces);
    return fixedValue.includes('.')
      ? parseFloat(fixedValue).toString()
      : fixedValue;
  };

  const getFlagURL = (currency: string) => {
    return `https://wise.com/public-resources/assets/flags/rectangle/${currency.toLowerCase()}.png`;
  };

  const handleRemoveCurrency = (currency: string) => {
    // Update the state to remove the currency
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

  useEffect(() => {
    // Store selected currencies in local storage
    if (conversion && conversion.data) {
      localStorage.setItem(
        'selectedCurrencies',
        JSON.stringify(Object.keys(conversion.data))
      );
    }
  }, [conversion]);

  useEffect(() => {
    // Retrieve selected currencies from local storage on component mount
    const storedCurrencies = localStorage.getItem('selectedCurrencies');
    if (storedCurrencies) {
      const currencies = JSON.parse(storedCurrencies);
      setConversion((prevConversion) => {
        if (prevConversion && prevConversion.data) {
          const selectedCurrencies = Object.keys(prevConversion.data).filter(
            (currency) => currencies.includes(currency)
          );
          const selectedData = Object.fromEntries(
            Object.entries(prevConversion.data).filter(([currency]) =>
              selectedCurrencies.includes(currency)
            )
          );
          return {
            data: selectedData,
          };
        }
        return prevConversion;
      });
    }
  }, []);

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

  return (
    <StyledValiutuSkaiciuokle>
      <StyledSectionContainer>
        <h1>Valiutų Skaičiuoklė</h1>
        <StyledBox>
          <StyledBoxRight>
            <HistoricalRates onDateSelect={setSelectedDate} />
            <CurrencySelect onAddCurrency={handleAddCurrency} />
            <DecimalPlacesSelect onChange={setSelectedDecimalPlaces} />
          </StyledBoxRight>
          <StyledBoxRight>
            {conversion && conversion.data ? (
              <ul>
                {Object.entries(conversion.data).map(([currency, value]) => {
                  const flagURL = getFlagURL(currency);
                  return (
                    <li key={currency}>
                      <StyledInputContainer>
                        <StyledButton
                          onClick={() => handleRemoveCurrency(currency)}
                        >
                          <i className='fa-solid fa-minus'></i>
                        </StyledButton>
                        <Input
                          id={currency}
                          label
                          labelText=''
                          type='text'
                          value={
                            currency === activeInput.id
                              ? activeInput.rawValue
                              : formatValue(activeInput.value * value)
                          }
                          onChange={(e) =>
                            setActiveInput({
                              id: currency,
                              value: e.target.value
                                ? parseFloat(e.target.value)
                                : 0,
                              rawValue: e.target.value,
                            })
                          }
                        />
                        <StyledLabelFlagContainer>
                          <StyledLabel htmlFor={currency}>
                            {currency}
                          </StyledLabel>
                          <StyledFlag src={flagURL} alt={`${currency} flag`} />
                        </StyledLabelFlagContainer>
                      </StyledInputContainer>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <FullScreenLoader />
            )}
          </StyledBoxRight>
        </StyledBox>
        <p>
          Ši aplikacija naudoja naujausią valiutos kursą. <br />
          Įveskite norimą sumą į laukelį ir ji bus konvertuojama. <br />
          Jei norimos valiutos nėra pradiniame sąraše, pridėkite pasirinkdami iš
          išsiskleidžiančio sąrašo.
        </p>
      </StyledSectionContainer>
    </StyledValiutuSkaiciuokle>
  );
};

export default ValiutuSkaiciuokle;
