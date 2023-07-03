import { useEffect, useState } from 'react';
import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input/Input';
import RadioButton from '../../components/RadioButton/RadioButton';
import {
  StyledBox,
  StyledBoxLeft,
  StyledBoxRight,
  StyledSectionContainer,
} from '../../styles/UtilityStyles';
import {
  StyledIndividualiosVeiklosMokesciuSkaiciuokle,
  StyledResultsRow,
} from './style';

const IndividualiosVeiklosMokesciuSkaiciuokle = () => {
  const [gautosPajamos, setGautosPajamos] = useState('');
  const [patirtosSanaudos, setPatirtosSanaudos] = useState('');
  const [additionalPension, setAdditionalPension] = useState(true);
  const [apmokestinamosPajamos, setApmokestinamosPajamos] = useState('');
  const [VSD, setVSD] = useState('');
  const [PSD, setPSD] = useState('');
  const [GPM, setGPM] = useState('');
  const [VSDPercent, setVSDPercent] = useState('12.52%');
  const [GPMPercent, setGPMPercent] = useState('5%');
  const [finalIncome, setFinalIncome] = useState('');
  const [finalTaxes, setFinalTaxes] = useState('');
  const [taxPercent, setTaxPercent] = useState('');

  const options = ['Faktiškai patirtos', '30% nuo pajamų'];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleGautosPajamosChange = (e: any) => {
    const inputValue = e.target.value;
    setGautosPajamos(!isNaN(parseFloat(inputValue)) ? inputValue : '');
  };

  const calculatePatirtosSanaudos = () => {
    if (selectedOption === options[1]) {
      const sanaudos = parseFloat(gautosPajamos) * 0.3;
      setPatirtosSanaudos(
        isNaN(sanaudos) ? '' : sanaudos.toFixed(2).toString()
      );
    }
  };

  const handlePatirtosSanaudosChange = (e: any) => {
    const inputValue = e.target.value;
    selectedOption === options[1]
      ? calculatePatirtosSanaudos()
      : !isNaN(parseFloat(inputValue))
      ? setPatirtosSanaudos(inputValue)
      : setPatirtosSanaudos('');
  };

  const handleAdditionalPensionChange = () => {
    setAdditionalPension((prev) => !prev);
    setVSDPercent(VSDPercent === '12.52%' ? '15.52%' : '12.52%');
  };

  const handleOptionChange = () => {
    selectedOption === options[0]
      ? (setSelectedOption(options[1]),
        setPatirtosSanaudos(
          (parseFloat(gautosPajamos) * 0.3).toFixed(2).toString()
        ))
      : setSelectedOption(options[0]);
  };

  const calculateProfit = () => {
    const income = parseFloat(gautosPajamos) || 0;
    const expenses = parseFloat(patirtosSanaudos) || 0;
    const profit = income - expenses;
    return profit;
  };

  const calculateApmokestinamosPajamos = () => {
    const apmokestinamosPajamosValue = calculateProfit() * 0.9;
    setApmokestinamosPajamos(apmokestinamosPajamosValue.toFixed(2).toString());
  };

  const calculateVSDAmount = () => {
    const vsdInput = document.getElementById(
      'sumoketas-vsd'
    ) as HTMLInputElement;
    const vsdValue = vsdInput ? parseFloat(vsdInput.value) || 0 : 0;

    const VSDAmount =
      (!additionalPension
        ? calculateProfit() * 0.9 * 0.1552
        : calculateProfit() * 0.9 * 0.1252) - vsdValue;
    setVSD(!isNaN(VSDAmount) ? VSDAmount.toFixed(2).toString() : '');
  };

  const calculatePSDAmount = () => {
    const PSDInput = document.getElementById(
      'sumoketas-psd'
    ) as HTMLInputElement;
    const psdValue = PSDInput ? parseFloat(PSDInput.value) || 0 : 0;

    const PSDAmount = calculateProfit() * 0.9 * 0.0698 - psdValue;
    setPSD(!isNaN(PSDAmount) ? PSDAmount.toFixed(2).toString() : '');
  };

  const calculateGPMAmount = () => {
    const profit = calculateProfit();
    const GPMAmount =
      calculateProfit() <= 20000 ? profit * 0.9 * 0.05 : profit * 0.9 * 0.15;
    const GPMPercentage = profit <= 20000 ? '5%' : '15%';

    setGPMPercent(GPMPercentage);
    setGPM(!isNaN(GPMAmount) ? GPMAmount.toFixed(2).toString() : '0.00');
  };

  const calculateFinalIncome = () => {
    const profit = calculateProfit();
    const finalProfit =
      profit - parseFloat(PSD) - parseFloat(VSD) - parseFloat(GPM);
    const finalAllTaxes = profit - finalProfit;

    let finalTaxPercent =
      profit >= 0
        ? (finalAllTaxes / profit) * 100
        : (Math.abs(finalAllTaxes) / profit) * 100;

    setFinalIncome(finalProfit.toFixed(2).toString());
    setFinalTaxes(finalAllTaxes.toFixed(2).toString());
    setTaxPercent(
      !isNaN(finalTaxPercent) ? finalTaxPercent.toFixed(2).toString() : '0.00'
    );
  };

  useEffect(() => {
    calculateApmokestinamosPajamos();
    calculatePatirtosSanaudos();
    calculateVSDAmount();
    calculatePSDAmount();
    calculateGPMAmount();
    calculateFinalIncome();
  }, [
    gautosPajamos,
    patirtosSanaudos,
    additionalPension,
    VSD,
    PSD,
    GPM,
    selectedOption,
  ]);

  return (
    <StyledIndividualiosVeiklosMokesciuSkaiciuokle>
      <StyledSectionContainer>
        <h1>Individualios veiklos mokesčių skaičiuoklė</h1>
        <StyledBox>
          <StyledBoxLeft className='box-left'>
            <Input
              label={true}
              labelText='Gautos pajamos'
              id='gautos-pajamos'
              type='text'
              value={gautosPajamos}
              onChange={handleGautosPajamosChange}
            />
            <Input
              label={true}
              labelText='Patirtos sąnaudos'
              id='patirtos-sanaudos'
              type='text'
              value={patirtosSanaudos}
              onChange={handlePatirtosSanaudosChange}
            />

            <Input
              label={true}
              labelText='Sumokėtas VSD'
              id='sumoketas-vsd'
              type='text'
              onChange={calculateVSDAmount}
            />

            <Input
              label={true}
              labelText='Sumokėtas PSD'
              id='sumoketas-psd'
              type='text'
              onChange={calculatePSDAmount}
            />

            <RadioButton
              label='Sąnaudų skaičiavimas'
              name='yourGroupName'
              options={options}
              value={selectedOption}
              onChange={handleOptionChange}
            />
            <Checkbox
              text={'Kaupiu pensijai papildomai'}
              onChange={handleAdditionalPensionChange}
              checked={!additionalPension}
            />
          </StyledBoxLeft>

          <StyledBoxRight className='box-right'>
            <StyledResultsRow>
              <div>Pajamos</div>
              <div>{!gautosPajamos ? '0.00' : gautosPajamos} €</div>
            </StyledResultsRow>

            <StyledResultsRow>
              <div>Sąnaudos</div>
              <div>{!patirtosSanaudos ? '0.00' : patirtosSanaudos} €</div>
            </StyledResultsRow>

            <StyledResultsRow>
              <div>Apmokęstinamos pajamos</div>
              <div>
                {!apmokestinamosPajamos ? '0.00' : apmokestinamosPajamos} €
              </div>
            </StyledResultsRow>

            <StyledResultsRow>
              <div>VSD {VSDPercent}</div>
              <div>{VSD} €</div>
            </StyledResultsRow>

            <StyledResultsRow>
              <div>PSD 6.98%</div>
              <div>{PSD} €</div>
            </StyledResultsRow>

            <StyledResultsRow>
              <div>GPM {GPMPercent}</div>
              <div>{GPM} €</div>
            </StyledResultsRow>
            <hr />
            <StyledResultsRow>
              <div>Iš viso mokesčių: </div>
              <div>{finalTaxes} €</div>
            </StyledResultsRow>

            <StyledResultsRow>
              <div>Mokestinė našta</div>
              <div> {!taxPercent ? '0,00' : taxPercent} %</div>
            </StyledResultsRow>

            <StyledResultsRow>
              <div>Grynasis Pelnas</div>
              <div>{finalIncome} €</div>
            </StyledResultsRow>
          </StyledBoxRight>
        </StyledBox>
      </StyledSectionContainer>
    </StyledIndividualiosVeiklosMokesciuSkaiciuokle>
  );
};

export default IndividualiosVeiklosMokesciuSkaiciuokle;
