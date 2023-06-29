import { useEffect, useState } from 'react';

import { StyledValiutuSkaiciuokle } from './style';

import { DataObject } from './types';

import Input from '../../components/Input';

const ValiutuSkaiciuokle = () => {
  const [conversion, setConversion] = useState<null | DataObject>(null);
  const [activeInput, setActiveInput] = useState({
    id: '',
    value: 0,
    rawValue: '',
  });

  const ENDPOINT_URI = `https://api.freecurrencyapi.com/v1/latest?apikey=CXzykYmtN94nK6QnKbPkoKFo642PswLTpgafsLeW&currencies=USD%2CEUR%2CJPY%2CBGN%2CCZK%2CDKK%2CGBP%2CHUF%2CPLN%2CRON%2CSEK%2CCHF%2CISK%2CNOK%2CHRK%2CRUB%2CTRY%2CAUD%2CBRL%2CCAD%2CCNY%2CHKD%2CIDR%2CILS%2CINR%2CKRW%2CMXN%2CMYR%2CNZD%2CPHP%2CSGD%2CTHB%2CZAR&base_currency=EUR`;

  const formatValue = (value) => {
    const fixedValue = value.toFixed(5);
    return fixedValue.includes('.')
      ? parseFloat(fixedValue).toString()
      : fixedValue;
  };

  useEffect(() => {
    const fetchedCurrencies = async () => {
      const data: DataObject = await (await fetch(ENDPOINT_URI)).json();

      setConversion(data);
    };
    fetchedCurrencies();
  }, [ENDPOINT_URI]);

  return (
    <StyledValiutuSkaiciuokle>
  
      <h1>VALIUTŲ SKAIČIUOKLĖ</h1>
      {conversion && conversion.data ? (
        <ul>
          {Object.entries(conversion.data).map(([currency, value]) => (
            <Input
              id={currency}
              type='text'
              label
              labelText={currency}
              value={
                currency === activeInput.id
                  ? activeInput.rawValue
                  : formatValue(activeInput.value * value)
              }
              onChange={(e) =>
                setActiveInput({
                  id: currency,
                  value: e.target.value ? parseFloat(e.target.value) : 0,
                  rawValue: e.target.value,
                })
              }
            />
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </StyledValiutuSkaiciuokle>
  );
};

export default ValiutuSkaiciuokle;
