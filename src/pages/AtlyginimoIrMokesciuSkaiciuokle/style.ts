import styled from 'styled-components';

export const StyledAtlyginimoMokesciuSkaiciuokle = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;

  .box-right {
    align-items: initial;
    gap: 1.2rem;
  }

  .box-left {
    align-items: initial;
  }

  .control {
    align-items: flex-start;
    padding-left: 0;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: start;

  label {
    display: flex;
    gap: 0.375rem;
    align-items: center;
  }
  #additionalPensionRate {
    justify-content: center;
    padding-bottom: calc(0.5em - 1px);
    padding-left: 0.5em;
    padding-right: 0.5em;
    padding-top: calc(0.5em - 1px);
    text-align: center;
    border-color: #dbdbdb;
    border-width: 1px;
    color: #363636;
    cursor: pointer;

    border-radius: 4px;
  }
`;

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #4a4a4a;
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5;
    border-top: 1px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0.375rem;
  }

  p:last-child {
    border-bottom: 1px solid lightgray;
  }
`;
