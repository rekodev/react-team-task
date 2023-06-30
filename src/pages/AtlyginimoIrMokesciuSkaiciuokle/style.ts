import styled from 'styled-components';
import { BREAKPOINTS } from '../../types/breakpoints';
interface IStyledBox {
  column?: boolean;
}

export const StyledAtlyginimoMokesciuSkaiciuokle = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;

  .box-right {
    align-items: initial;
    gap: 1.2rem;
  }

  .box-left {
    align-items: initial;
  }

  .control {
    align-items: flex-start;
    padding-left: 0;
  }
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

  @media screen and (max-width: ${BREAKPOINTS.LargeMobile}) {
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

  @media screen and (max-width: ${BREAKPOINTS.LargeMobile}) {
    width: 100%;
    border-radius: 0 0 15px 15px;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #4a4a4a;
    font-size: 1em;
    font-weight: 400;
    line-height: 1.5;
  }
`;
