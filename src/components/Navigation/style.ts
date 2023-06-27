import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 2rem;
  }

  ul li a {
    text-decoration: none;
    color: #000;

    &:hover {
      color: turquoise;
    }
  }
`;
