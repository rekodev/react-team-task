import styled from 'styled-components';
import { BREAKPOINTS } from '../../types/breakpoints';

export const StyledNavigationMobile = styled.nav`
  ul {
    list-style: none;
    position: absolute;
    border: 1px solid lightgray;
    top: 58px;
    /* right: 0.625rem; */
    right: 0;
    z-index: 1;
    box-shadow: -2.5px 2.5px 15px -5px lightgray;
    width: 100%;

    li {
      height: 40px;
    }

    li a {
      display: flex;
      justify-content: start;
      align-items: center;
      height: 100%;
      width: 100%;
      text-align: center;
      text-decoration: none;
      color: #000;
      padding: 0.5rem 0.75rem;
      border-bottom: 1px solid lightgray;
      background-color: #fff;

      &:hover {
        background-color: #f9f9f9;
        color: turquoise;
        transition: all 0.2s ease-in-out;
      }
    }

    @media screen and (min-width: ${BREAKPOINTS.Tablet}) {
      width: 55%;
    }
  }

  @media screen and (min-width: ${BREAKPOINTS.CustomPlusOne}) {
    display: none;
  }
`;
