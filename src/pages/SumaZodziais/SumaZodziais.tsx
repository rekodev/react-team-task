import React, { useState } from 'react';
import Input from '../../components/Input';
import {
  StyledBox,
  StyledBoxLeft,
  StyledBoxRight,
  StyledSectionContainer,
} from '../../styles/UtilityStyles';
import { StyledSumaZodziais } from './style';
import { numberToWordsLT } from '../../utilities/sumaZodziaisFunction';

const SumaZodziais = () => {
  const [value, setValue] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Only numbers and dots are allowed
    if (/^(\d+\.?\d*)?$/.test(event.target.value)) {
      setValue(event.target.value);
    }
  };

  return (
    <StyledSumaZodziais>
      <StyledSectionContainer>
        <h1>Suma žodžiais</h1>
        <StyledBox column>
          <StyledBoxLeft column>
            <Input
              id='suma'
              type='text'
              labelText='Suma'
              label
              onChange={handleChange}
            />
          </StyledBoxLeft>
          <StyledBoxRight column>
            <p>{numberToWordsLT(value)}</p>
          </StyledBoxRight>
        </StyledBox>
      </StyledSectionContainer>
    </StyledSumaZodziais>
  );
};

export default SumaZodziais;
