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
import { ICurrencyProps } from './types';
import DecimalPlacesSelect from './DecimalPlacesSelect';
import HistoricalRates from './HistoricalRates';

const ENDPOINT_LATEST_RATES_URI =
  'https://api.freecurrencyapi.com/v1/latest?apikey=CXzykYmtN94nK6QnKbPkoKFo642PswLTpgafsLeW&currencies=USD%2CEUR%2CJPY%2CBGN%2CCZK%2CDKK%2CGBP%2CHUF%2CPLN%2CRON%2CSEK%2CCHF%2CISK%2CNOK%2CHRK%2CRUB%2CTRY%2CAUD%2CBRL%2CCAD%2CCNY%2CHKD%2CIDR%2CILS%2CINR%2CKRW%2CMXN%2CMYR%2CNZD%2CPHP%2CSGD%2CTHB%2CZAR&base_currency=EUR';

const ValiutuSkaiciuokle = () => {
  const [conversion, setConversion] = useState<null | ICurrencyProps>(null);
  const [selectedDecimalPlaces, setSelectedDecimalPlaces] = useState<number>(0);
  const [selectedDate, setSelectedDate] = useState('');

  const ENDPOINT_HISTORICAL_RATES_URI = `https://api.freecurrencyapi.com/v1/historical?apikey=CXzykYmtN94nK6QnKbPkoKFo642PswLTpgafsLeW&currencies=EUR%2CUSD%2CJPY%2CBGN%2CCZK%2CDKK%2CGBP%2CHUF%2CPLN%2CRON%2CSEK%2CCHF%2CISK%2CNOK%2CHRK%2CRUB%2CTRY%2CAUD%2CBRL%2CCAD%2CCNY%2CHKD%2CIDR%2CILS%2CINR%2CKRW%2CMXN%2CMYR%2CNZD%2CPHP%2CSGD%2CTHB%2CZAR&date_from=${selectedDate[0]}&date_to=${selectedDate[1]}`;

  useEffect(() => {
    const ENDPOINT_URI = ENDPOINT_LATEST_RATES_URI;

    const fetchedCurrencies = async () => {
      const data: ICurrencyProps = await (await fetch(ENDPOINT_URI)).json();

      const orderedData: ICurrencyProps = {
        data: {
          EUR: data.data.EUR,
          ...data.data,
        },
      };

      setConversion(orderedData);
      console.log(orderedData, 'ordered data');
    };

    fetchedCurrencies();
  }, []);

  useEffect(() => {
    const ENDPOINT_URI = '';

    const fetchedCurrencies = async () => {
      const data: ICurrencyProps = await (await fetch(ENDPOINT_URI)).json();

      const orderedData: ICurrencyProps = {
        data: {
          EUR: data.data.EUR,
          ...data.data,
        },
      };

      setConversion(orderedData);
      console.log(orderedData, 'ordered data');
    };

    fetchedCurrencies();
  }, []);

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

  const handleAddCurrency = (currency) => {
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
