import styled from 'styled-components';

export const StyledHomePageCard = styled.div`
  background-color: #f8f8f8;
  height: 253px;
  width: 191px;

  .card-content {
    height: 100%;
    width: 100%;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    text-align: center;
    color: #000;
  }

  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fafafa;
    box-shadow: -5px 5px 12.5px -2.5px lightgray;
    cursor: pointer;

    a {
      color: #485fc7;
      transition: color 0.2s ease-in-out;
    }
  }
`;
