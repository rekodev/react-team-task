import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ICurrencyProps {
  query: {
    from: string;
    to: string;
    amount: number;
  };
  info: {
    rate: number;
  };
  date: string;
  result: number;
}

const CurrencyContainer = () => {
  const [currencyConverter, setCurrencyConverter] = useState<
    null | ICurrencyProps[]
  >([]);

  useEffect(() => {
    axios
      .get('https://api.exchangerate.host/convert?from=EUR&to=USD', {
        params: {
          base: 'EUR',
          symbols: 'EUR,USD',
        },
      })
      .then((res) => {
        return res.data;
      })
      .then((data) => setCurrencyConverter([data]))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {currencyConverter?.map((currency, index) => (
        <>
          <div key={index}>
            {' '}
            <li>{currency.query.from}</li>
            <li>{currency.query.amount}</li>
            <li>{currency.query.to}</li>
            <li>{currency.result}</li>
          </div>{' '}
        </>
      ))}
    </div>
  );
};

export default CurrencyContainer;
