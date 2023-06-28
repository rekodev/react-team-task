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

  > div {
    height: 100%;
    width: 50%;
  }

  > div:first-child {
    background-color: aliceblue;
  }
`;
