import styled from 'styled-components';
import { BREAKPOINTS } from '../../types/breakpoints';

export const StyledPVMSkaiciuokle = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;
`;

export const StyledPVMSkaiciuokleContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5625rem;
  padding: 1rem;
`;

export const StyledPVMSkaiciuokleSubContainer = styled.div`
  width: 100%;
  display: flex;
  box-shadow: 0 0 15px -5px lightgray;
  border-radius: 15px;

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
    background-color: #f8f8f8;
    border-radius: 15px 0 0 15px;
  }
  > div:last-child {
    /* background-color: rgba(240, 248, 255, 0.25) */
    border-radius: 0 15px 15px 0;
  }

  @media screen and (max-width: ${BREAKPOINTS.LargeMobile}) {
    align-items: center;
    flex-direction: column;

    > div {
      width: 100%;
    }

    > div:first-child {
      border-radius: 15px 15px 0 0;
    }
    > div:last-child {
      border-radius: 0 0 15px 15px;
    }
  }
`;
