import { useState } from 'react';
import Input from '../../components/Input';
import { StyledPVMSkaiciuokle } from './style';

import 'bulma/css/bulma.css';
import Select from '../../components/Select';
import {
  StyledBox,
  StyledBoxLeft,
  StyledBoxRight,
  StyledSectionContainer,
} from '../../styles/UtilityStyles';

const PVMSkaiciuokle = () => {
  const [pvmTarifas, setPvmTarifas] = useState(0.21);
  const [sumaBePvm, setSumaBePvm] = useState('0.00');
  const [pvmSuma, setPvmSuma] = useState('0.00');
  const [bendraSumaSuPvm, setBendraSumaSuPvm] = useState('0.00');
  const [lastModified, setLastModified] = useState<string | null>(null);

  const handlePVMTarifasChange = (e: any) => {
    const value = parseFloat(e.target.value);

    setPvmTarifas(value);

    if (lastModified === 'suma-be-pvm') {
      setBendraSumaSuPvm(
        (parseFloat(sumaBePvm === '' ? '0' : sumaBePvm) * (1 + value))
          .toFixed(2)
          .toString()
      );
      setPvmSuma(
        (parseFloat(sumaBePvm === '' ? '0' : sumaBePvm) * value)
          .toFixed(2)
          .toString()
      );
    } else if (lastModified === 'bendra-suma-su-pvm') {
      setSumaBePvm(
        (
          parseFloat(bendraSumaSuPvm === '' ? '0' : bendraSumaSuPvm) *
          (1 / (1 + value))
        )
          .toFixed(2)
          .toString()
      );
      setPvmSuma(
        (parseFloat(bendraSumaSuPvm === '' ? '0' : bendraSumaSuPvm) * value)
          .toFixed(2)
          .toString()
      );
    }
  };

  const handleSumaBePVMChange = (e: any) => {
    e.preventDefault();

    let value = e.target.value;

    if (/^(\d+\.?\d*)?$/.test(value)) {
      // Regex to match number or decimal
      setSumaBePvm(value);
      setBendraSumaSuPvm(
        (parseFloat(value === '' ? 0 : value) * (1 + pvmTarifas))
          .toFixed(2)
          .toString()
      );
      setPvmSuma(
        (parseFloat(value === '' ? 0 : value) * pvmTarifas)
          .toFixed(2)
          .toString()
      );

      setLastModified('suma-be-pvm');
    }
  };

  const handleBendraSumaSuPVMChange = (e: any) => {
    let value = e.target.value;
    console.log(value);

    if (/^(\d+\.?\d*)?$/.test(value)) {
      setBendraSumaSuPvm(value);
      setSumaBePvm(
        (parseFloat(value === '' ? 0 : value) * (1 / (1 + pvmTarifas)))
          .toFixed(2)
          .toString()
      );
      setPvmSuma(
        (parseFloat(value === '' ? 0 : value) * (1 - 1 / (1 + pvmTarifas)))
          .toFixed(2)
          .toString()
      );

      setLastModified('bendra-suma-su-pvm');
    }
  };

  const selectOptions = [
    { value: '0.21', label: '21%' },
    { value: '0.09', label: '9%' },
    { value: '0.05', label: '5%' },
  ];

  return (
    <StyledPVMSkaiciuokle>
      <StyledSectionContainer>
        <h1>PVM Skaičiuoklė</h1>
        <StyledBox>
          <StyledBoxLeft>
            <div className='select-wrapper'>
              <p>PVM Tarifas</p>
              <div className='select'>
                <Select
                  id='pvm-tarifas'
                  options={selectOptions}
                  onChange={handlePVMTarifasChange}
                />
              </div>
            </div>

            <Input
              label
              labelText='Suma be PVM'
              id='suma-be-pvm'
              type='text'
              value={sumaBePvm}
              onChange={handleSumaBePVMChange}
            />
          </StyledBoxLeft>
          <StyledBoxRight>
            <Input
              label
              labelText='PVM suma'
              id='pvm-suma'
              type='text'
              disabled
              value={pvmSuma}
            />
            <Input
              id='bendra-suma-su-pvm'
              label
              labelText='Bendra suma (su PVM)'
              type='text'
              onChange={handleBendraSumaSuPVMChange}
              value={bendraSumaSuPvm}
            />
          </StyledBoxRight>
        </StyledBox>
      </StyledSectionContainer>
    </StyledPVMSkaiciuokle>
  );
};

export default PVMSkaiciuokle;
