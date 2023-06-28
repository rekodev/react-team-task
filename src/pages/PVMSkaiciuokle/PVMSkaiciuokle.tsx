import Input from '../../components/Input';
import {
  StyledPVMSkaiciuokle,
  StyledPVMSkaiciuokleContainer,
  StyledPVMSkaiciuokleSubContainer,
} from './style';

import 'bulma/css/bulma.css';

const PVMSkaiciuokle = () => {
  return (
    <StyledPVMSkaiciuokle>
      <StyledPVMSkaiciuokleContainer>
        <h1>PVM Skaičiuoklė</h1>
        <StyledPVMSkaiciuokleSubContainer>
          <div className='left'>
            <div className='select-wrapper'>
              <p>PVM Tarifas</p>
              <div className='select'>
                <select name='' id='pvm-tarifas'>
                  <option selected value='0.21'>
                    21%
                  </option>
                  <option value='0.09'>9%</option>
                  <option value='0.05'>5%</option>
                </select>
              </div>
            </div>

            <Input
              label
              labelText='Suma be PVM'
              id='suma-be-pvm'
              placeholder='0'
              type='text'
            />
          </div>
          <div className='right'>
            <Input
              label
              labelText='PVM suma'
              id='pvm-suma'
              placeholder='0'
              type='text'
              disabled
            />
            <Input
              id='bendra-suma-su-pvm'
              label
              labelText='Bendra suma (su PVM)'
              placeholder='0'
              type='text'
            />
          </div>
        </StyledPVMSkaiciuokleSubContainer>
      </StyledPVMSkaiciuokleContainer>
    </StyledPVMSkaiciuokle>
  );
};

export default PVMSkaiciuokle;
