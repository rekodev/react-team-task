// Variables

const largeUnits = [
  { singular: 'tūkstantis', few: 'tūkstančiai', many: 'tūkstančių' },
  { singular: 'milijonas', few: 'milijonai', many: 'milijonų' },
  { singular: 'milijardas', few: 'milijardai', many: 'milijardų' },
];

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

const getLargeUnitWord = (
  value: number,
  unit: { singular: string; few: string; many: string }
) => {
  if (value % 10 === 1 && value % 100 !== 11) {
    return unit.singular;
  } else if (
    value % 10 >= 2 &&
    value % 10 <= 9 &&
    !(value % 100 >= 11 && value % 100 <= 19)
  ) {
    return unit.few;
  } else {
    return unit.many;
  }
};

// Functions

export const numberToWordsLT = (num: string, recursion = false) => {
  let [integerPartString, decimalPartString] = num.split('.');
  let integerPart = Math.floor(Number(integerPartString));
  let decimalPart = decimalPartString
    ? parseInt(decimalPartString.substring(0, 2), 10)
    : 0;

  if (integerPart >= 1e12) {
    return 'Suma per didelė';
  }

  let words = '';

  if (integerPart >= 1000) {
    for (let i = largeUnits.length - 1; i >= 0; i--) {
      let base = Math.pow(1000, i + 1);
      if (integerPart >= base) {
        let value = Math.floor(integerPart / base);
        integerPart %= base;
        words +=
          numberToWordsLT(String(value), true) +
          ' ' +
          getLargeUnitWord(value, largeUnits[i]) +
          ' ';
      }
    }
  }

  if (integerPart > 0 || words !== '') {
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
    let value = integerPart;
    if (integerPart > 0) {
      words += units[integerPart] + ' ';
    }

    if (!recursion) {
      if (value === 1 || (value > 20 && value % 10 === 1)) {
        words += 'euras, ';
      } else if (
        (value > 1 && value < 10) ||
        (value > 20 && value % 10 > 1 && value % 10 < 10)
      ) {
        words += 'eurai, ';
      } else {
        words += 'eurų, ';
      }
    }
  } else if (!recursion) {
    words += 'nulis eurų, ';
  }

  // Decimal part handling begins
  if (!recursion) {
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
  }

  return words.trim();
};
