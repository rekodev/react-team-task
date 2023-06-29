export const numberToWordsLT = (num: string) => {
  const units = [
    'nulis',
    'vienas',
    'du',
    'trys',
    'keturi',
    'penki',
    'šeši',
    'septyni',
    'aštuoni',
    'devyni',
  ];
  const tens = [
    '',
    'dešimt',
    'dvidešimt',
    'trisdešimt',
    'keturiasdešimt',
    'penkiasdešimt',
    'šešiasdešimt',
    'septyniasdešimt',
    'aštuoniasdešimt',
    'devyniasdešimt',
  ];
  const teens = [
    'dešimt',
    'vienuolika',
    'dvylika',
    'trylika',
    'keturiolika',
    'penkiolika',
    'šešiolika',
    'septyniolika',
    'aštuoniolika',
    'devyniolika',
  ];
  const hundreds = [
    '',
    'šimtas',
    'du šimtai',
    'trys šimtai',
    'keturi šimtai',
    'penki šimtai',
    'šeši šimtai',
    'septyni šimtai',
    'aštuoni šimtai',
    'devyni šimtai',
  ];

  let integerPart = Math.floor(Number(num));
  let decimalPart = Number(num) - integerPart;
  decimalPart = Math.round(decimalPart * 100);
  let words = '';

  if (integerPart === 0) {
    words += 'nulis eurų, ';
  } else {
    if (integerPart >= 100) {
      words += hundreds[Math.floor(integerPart / 100)] + ' ';
      integerPart %= 100;
    }
    if (integerPart >= 20) {
      words += tens[Math.floor(integerPart / 10)] + ' ';
      integerPart %= 10;
    }
    if (integerPart >= 10) {
      words += teens[integerPart - 10] + ' ';
      integerPart = 0;
    }
    if (integerPart > 0) {
      words += units[integerPart] + ' ';
    }
    if (integerPart === 1 || (integerPart > 20 && integerPart % 10 === 1)) {
      words += 'euras, ';
    } else if (
      (integerPart > 1 && integerPart < 10) ||
      (integerPart > 20 && integerPart % 10 > 1 && integerPart % 10 < 10)
    ) {
      words += 'eurai, ';
    } else {
      words += 'eurų, ';
    }
  }

  if (decimalPart > 0) {
    if (decimalPart < 10) {
      words += units[decimalPart] + ' ';
    } else if (decimalPart < 20) {
      words += teens[decimalPart - 10] + ' ';
    } else {
      words += tens[Math.floor(decimalPart / 10)];
      if (decimalPart % 10 > 0) {
        words += ' ' + units[decimalPart % 10];
      }
      words += ' ';
    }

    if (decimalPart === 1 || (decimalPart > 20 && decimalPart % 10 === 1)) {
      words += 'centas';
    } else if (
      (decimalPart > 1 && decimalPart < 10) ||
      (decimalPart > 20 && decimalPart % 10 > 1 && decimalPart % 10 < 10)
    ) {
      words += 'centai';
    } else {
      words += 'centų';
    }
  } else {
    words += 'nulis centų';
  }

  return words;
};
