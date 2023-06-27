import styled from 'styled-components';
import { BREAKPOINTS } from '../../types/breakpoints';

export const StyledNavigationDesktop = styled.nav`
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    list-style: none;
  }

  ul li a {
    color: #000;
    text-decoration: none;

    &:hover {
      color: turquoise;
      transition: all 0.2s ease-in-out;
    }
  }

  @media screen and (max-width: ${BREAKPOINTS.Custom}) {
    display: none;
  }
`;
