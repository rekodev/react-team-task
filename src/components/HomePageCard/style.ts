import styled from 'styled-components';

export const StyledHomePageCard = styled.div`
  background-color: #f8f8f8;
  height: 253px;
  width: 191px;

  a {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.5rem;
    text-decoration: none;
    padding: 0 1.5rem;
    color: #000;
    transition: all 0.2s ease-in-out;

    &:hover {
      color: turquoise;
      background-color: #fafafa;
      box-shadow: -5px 5px 12.5px -2.5px lightgray;
    }
  }
`;
