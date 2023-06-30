import styled from 'styled-components';
import { BREAKPOINTS } from '../types/breakpoints';

interface IStyledBox {
  column?: boolean;
}

export const StyledUnifiedButton = styled.button`
  border: 1px solid red;
  padding: 0.5rem 0.75rem;
`;

export const StyledSectionContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5625rem;
  padding: 1rem;
`;

export const StyledBox = styled.div<IStyledBox>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  box-shadow: 0 0 15px -5px lightgray;
  border-radius: 15px;
  /* 
  > div {
    height: ${(props) => (props.column ? '50%' : '100%')};
    width: ${(props) => (props.column ? '100%' : '50%')};
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  > div:first-child {
    background-color: #f8f8f8;
    border-radius: 15px 0 0 15px;
  } */
  /* > div:last-child {
    /* background-color: rgba(240, 248, 255, 0.25) */
  /* border-radius: 0 15px 15px 0; */
  /* } */

  @media screen and (max-width: ${BREAKPOINTS.Tablet}) {
    align-items: center;
    flex-direction: column;

    /* > div {
      width: 100%;
    }

    > div:first-child {
      border-radius: 15px 15px 0 0;
    }
    > div:last-child {
      border-radius: 0 0 15px 15px;
    } */
  }
`;

export const StyledBoxLeft = styled.div<IStyledBox>`
  height: ${(props) => (props.column ? '50%' : '100%')};
  width: ${(props) => (props.column ? '100%' : '50%')};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  background-color: #f8f8f8;
  border-radius: ${(props) =>
    props.column ? '15px 15px 0 0' : '15px 0 0 15px'};

  @media screen and (max-width: ${BREAKPOINTS.Tablet}) {
    width: 100%;
    border-radius: 15px 15px 0 0;
  }
`;

export const StyledBoxRight = styled.div<IStyledBox>`
  height: ${(props) => (props.column ? '50%' : '100%')};
  width: ${(props) => (props.column ? '100%' : '50%')};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  border-radius: ${(props) =>
    props.column ? '15px 15px 0 0' : '0 15px 15px 0'};

  @media screen and (max-width: ${BREAKPOINTS.Tablet}) {
    width: 100%;
    border-radius: 0 0 15px 15px;
  }
`;
