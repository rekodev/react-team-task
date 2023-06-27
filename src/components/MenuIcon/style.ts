import styled from 'styled-components';
import { BREAKPOINTS } from '../../types/breakpoints';

export const StyledMenuIcon = styled.i`
  position: absolute;
  right: 2rem;
  font-size: 1.25rem;

  &.fa-xmark {
    font-size: 1.425rem;
  }

  &:hover {
    cursor: pointer;
    color: gray;
    transition: color 0.2s ease-in-out;
  }

  @media screen and (min-width: ${BREAKPOINTS.CustomPlusOne}) {
    display: none;
  }
`;
