import { useEffect, useState } from 'react';
import { ICurrencyProps } from './types';

const useCurrencyConversion = () => {
  const [conversion, setConversion] = useState<null | ICurrencyProps>(null);

  useEffect(() => {
    const ENDPOINT_URI = `https://api.freecurrencyapi.com/v1/latest?apikey=RvEoseBzt4b46DkMYvCj0MVI7yQ33Ma5ar8tjKpJ&currencies=USD%2CEUR%2CJPY%2CBGN%2CCZK%2CDKK%2CGBP%2CHUF%2CPLN%2CRON%2CSEK%2CCHF%2CISK%2CNOK%2CHRK%2CRUB%2CTRY%2CAUD%2CBRL%2CCAD%2CCNY%2CHKD%2CIDR%2CILS%2CINR%2CKRW%2CMXN%2CMYR%2CNZD%2CPHP%2CSGD%2CTHB%2CZAR&base_currency=EUR`;

    const fetchedCurrencies = async () => {
      const data: ICurrencyProps = await (await fetch(ENDPOINT_URI)).json();

      const orderedData: ICurrencyProps = {
        data: {
          EUR: data.data.EUR,
          ...data.data,
        },
      };

      setConversion(orderedData);
    };
    fetchedCurrencies();
  }, []);

  return conversion;
};

export default useCurrencyConversion;
