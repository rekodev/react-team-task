import styled from 'styled-components';

export const StyledRadioContainer = styled.div`
  .control {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0.5rem;

    .radio + .radio {
      margin-left: 0em;
    }
  }
`;
