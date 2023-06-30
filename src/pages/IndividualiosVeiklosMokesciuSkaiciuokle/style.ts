import styled from 'styled-components';

export const StyledIndividualiosVeiklosMokesciuSkaiciuokle = styled.div`
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

export const StyledResultsRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;

  &:hover {
    background-color: #f8f8f8;
  }
`;
