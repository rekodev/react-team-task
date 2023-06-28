import styled from 'styled-components';

export const StyledPVMSkaiciuokle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledPVMSkaiciuokleContainer = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5625rem;
`;

export const StyledPVMSkaiciuokleSubContainer = styled.div`
  height: 253px;
  width: 100%;
  display: flex;

  > div {
    height: 100%;
    width: 50%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  .select-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .select {
    width: 100%;

    select {
      width: 100%;
    }
  }

  input {
    text-align: end;

    &::placeholder {
      color: #000;
    }
  }

  > div:first-child {
    background-color: aliceblue;
  }
`;
