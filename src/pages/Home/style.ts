import styled from 'styled-components';
import { BREAKPOINTS } from '../../types/breakpoints';

export const StyledHome = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const StyledHomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media screen and (min-width: ${BREAKPOINTS.LargeMobile}) {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  @media screen and (min-width: ${BREAKPOINTS.Tablet}) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  }

  @media screen and (min-width: ${BREAKPOINTS.Desktop}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 3rem;
  }

  @media screen and (min-width: ${BREAKPOINTS.TV}) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 3.25rem;
  }
`;
