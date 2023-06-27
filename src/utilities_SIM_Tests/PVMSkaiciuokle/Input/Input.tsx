import React, { useState } from 'react';
import { calculateSumTotal } from '../PVMFormuliuSkaiciuokle';
import { ICalculateSumTotalFn } from '../types';

const TaxCalculator = ({ calculateSumTotal }: ICalculateSumTotalFn) => {
  const [taxRateOption, setTaxRateOption] = useState(21);
  const [sumNoTax, setSumNoTax] = useState(0);
  const [sumTotal, setSumTotal] = useState(0);

  const handleInputChange = (e) => {
    e.preventDefault();
    const value = e.target.value;

    if (e.target.name === 'taxRateOption') {
      setTaxRateOption(+value);
    } else if (e.target.name === 'sumNoTax') {
      setSumNoTax(+value);
    }
  };

  const handleCalculate = () => {
    calculateSumTotal(taxRateOption, sumNoTax, setSumTotal);
  };
  return (
    <div className='Wrapper'>
      <div className='SelectContainer'>
        <label>
          Tax Rate:
          <select
            name='taxRateOption'
            value={taxRateOption}
            onChange={handleInputChange}
          >
            <option value={21}>21%</option>
            <option value={9}>9%</option>
            <option value={5}>5%</option>
          </select>
        </label>
        <br />
      </div>
      <div className='InputContainer'>
        {' '}
        <label>
          Sum (No Tax):
          <input
            type='text'
            name='sumNoTax'
            value={sumNoTax}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Sum (Total):
          <input type='text' value={sumTotal} readOnly />
        </label>
        <br />
        <button onClick={handleCalculate}>Calculate</button>
      </div>
    </div>
  );
};

export default TaxCalculator;
