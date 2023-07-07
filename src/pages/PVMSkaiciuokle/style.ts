import styled from 'styled-components';

export const StyledPVMSkaiciuokle = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;

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
`;
