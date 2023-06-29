import styled from 'styled-components';

export const StyledCheckboxContainer = styled.div`
  display: flex;
  flex-direction: center;
  align-items: center;
  label {
    color: black;

    &:hover {
      color: #3a87ad;
    }
  }
  input {
    margin: 0.75rem;
  }
`;
