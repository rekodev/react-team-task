import styled from 'styled-components';

export const StyledValiutuSkaiciuokle = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const StyledCurrencySelectList = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const StyledFlag = styled.img`
  width: 1.25rem;
  margin: 0.1rem;
`;

export const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;

  input {
    width: 200px;
  }
`;

export const StyledLabel = styled.label`
  margin-right: 0.25rem;
  margin-left: 1rem;
  /* border: 1px solid green; */
  width: 40px;
`;

export const StyledLabelFlagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.5rem;
  /* border: 1px solid red; */
`;

export const StyledButton = styled.button`
  margin-top: 0.5rem;
  border: none;
  cursor: pointer;
  background-color: transparent;
  margin-right: 1rem;

  i {
    color: #999999;
    font-size: 20px;

    &:hover {
      color: #02d1b2;
    }
  }
`;
