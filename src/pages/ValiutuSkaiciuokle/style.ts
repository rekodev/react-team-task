import styled from 'styled-components';

export const StyledValiutuSkaiciuokle = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const StyledCurrencySelectList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 300px;

  h5 {
    text-align: left;
    margin-bottom: 5px;
    margin-top: 0;
  }
  select {
    width: 302px;
    height: 40px;
    box-shadow: inset 0 0.0625em 0.125em rgba(10, 10, 10, 0.05);
    border-color: #dbdbdb;
    border-radius: 4px;
    font-size: 14px;
    padding: 10px;
  }
  option svg {
    padding-right: 20px;
  }
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

  width: 40px;
`;

export const StyledLabelFlagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-top: 0.5rem;
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

export const StyledHistoricalInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;

  input {
    width: 300px;
  }
`;
