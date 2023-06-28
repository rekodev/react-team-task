import axios from 'axios';

axios
  .get('https://api.exchangerate.host/latest', {
    params: {
      base: 'EUR',
      symbols: 'EUR,GBP',
    },
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });

