import {
  StyledPVMSkaiciuokle,
  StyledPVMSkaiciuokleContainer,
  StyledPVMSkaiciuokleSubContainer,
} from './style';

const PVMSkaiciuokle = () => {
  return (
    <StyledPVMSkaiciuokle>
      <StyledPVMSkaiciuokleContainer>
        <h1>PVM Skaičiuoklė</h1>
        <StyledPVMSkaiciuokleSubContainer>
          <div className='left'>{/* <input type="text" /> */}</div>
          <div className='right'></div>
        </StyledPVMSkaiciuokleSubContainer>
      </StyledPVMSkaiciuokleContainer>
    </StyledPVMSkaiciuokle>
  );
};

export default PVMSkaiciuokle;
