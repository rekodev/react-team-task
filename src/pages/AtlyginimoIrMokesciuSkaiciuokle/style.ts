import styled from 'styled-components';

export const StyledAtlyginimoMokesciuSkaiciuokle = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;
  max-width: 1100px;

  input {
    &::placeholder {
      color: #000;
    }
  }
`;

export const StyledSectionContainer = styled.div`
  text-align: center;
`;

export const StyledBox = styled.div`
  display: flex;
  box-shadow: 0 0 15px -5px lightgray;
  border-radius: 15px;
`;

export const StyledBoxRight = styled.div`
  width: 100%;
  display: flex;
`;

export const StyledBoxLeft = styled.div`
  background-color: rgb(248, 248, 248);
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;
