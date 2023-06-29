import { useEffect, useState } from 'react';
import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input/Input';
import RadioButton from '../../components/RadioButton/RadioButton';
import { StyledIndividualiosVeiklosMokesciuSkaiciuokle } from './style';

const IndividualiosVeiklosMokesciuSkaiciuokle = () => {
  const [gautosPajamos, setGautosPajamos] = useState('');
  const [patirtosSanaudos, setPatirtosSanaudos] = useState('');
  const [additionalPension, setAdditionalPension] = useState(false);
  const [apmokestinamosPajamos, setApmokestinamosPajamos] = useState('');
  const [VSD, setVSD] = useState('');
  const [PSD, setPSD] = useState('');
  const [GPM, setGPM] = useState('');
  const [GPMPercent, setGPMPercent] = useState('5%');
  const [finalIncome, setFinalIncome] = useState('');
  const [finalTaxes, setFinalTaxes] = useState('');
  const [taxPercent, setTaxPercent] = useState('');
  const [selectedOption, setSelectedOption] = useState('Faktiškai patirtos');

  const handleGautosPajamosChange = (e: any) => {
    const inputValue = e.target.value;
    if (!isNaN(parseFloat(inputValue))) {
      setGautosPajamos(inputValue);
    } else {
      setGautosPajamos('');
    }
  };

  const handlePatirtosSanaudosChange = (e: any) => {
    const inputValue = e.target.value;

    if (selectedOption === '30% nuo pajamų') {
      const sanaudos = parseFloat(gautosPajamos) * 0.3;
      setPatirtosSanaudos(sanaudos.toString());
    } else {
      if (!isNaN(parseFloat(inputValue))) {
        setPatirtosSanaudos(e.target.value);
      } else {
        setPatirtosSanaudos('');
      }
    }
  };

  const handleAdditionalPensionChange = () => {
    setAdditionalPension((prev) => !prev);
  };

  const handleOptionChange = () => {
    if (selectedOption === 'Faktiškai patirtos') {
      setSelectedOption('30% nuo pajamų');
      const sanaudos = parseFloat(gautosPajamos) * 0.3;
      setPatirtosSanaudos(sanaudos.toFixed(2).toString());
    } else {
      setSelectedOption('Faktiškai patirtos');
    }
  };
  const calculateApmokestinamosPajamos = () => {
    const income = parseFloat(gautosPajamos) || 0;
    const expenses = parseFloat(patirtosSanaudos) || 0;
    const profit = income - expenses;
    const apmokestinamosPajamosValue = additionalPension
      ? profit * 0.8245
      : profit * 0.7975;
    setApmokestinamosPajamos(apmokestinamosPajamosValue.toFixed(2).toString());
  };

  const calculateVSDAmount = () => {
    const income = parseFloat(gautosPajamos) || 0;
    const expenses = parseFloat(patirtosSanaudos) || 0;
    const profit = income - expenses;
    const vsdInput = document.getElementById(
      'sumoketas-vsd'
    ) as HTMLInputElement;
    const vsdValue = vsdInput ? parseFloat(vsdInput.value) || 0 : 0;

    const VSDAmount =
      (additionalPension ? profit * 0.9 * 0.1552 : profit * 0.9 * 0.1252) -
      vsdValue;

    if (!isNaN(VSDAmount)) {
      setVSD(VSDAmount.toFixed(2).toString());
    } else {
      setVSD('');
    }
  };

  const calculatePSDAmount = () => {
    const income = parseFloat(gautosPajamos) || 0;
    const expenses = parseFloat(patirtosSanaudos) || 0;
    const profit = income - expenses;
    const PSDInput = document.getElementById(
      'sumoketas-psd'
    ) as HTMLInputElement;
    const psdValue = PSDInput ? parseFloat(PSDInput.value) || 0 : 0;

    const PSDAmount = profit * 0.9 * 0.0698 - psdValue;

    if (!isNaN(PSDAmount)) {
      setPSD(PSDAmount.toFixed(2).toString());
    } else {
      setPSD('');
    }
  };

  const calculateGPMAmount = () => {
    const income = parseFloat(gautosPajamos) || 0;
    const expenses = parseFloat(patirtosSanaudos) || 0;
    const profit = income - expenses;
    const GPMAmount =
      profit < 20000 ? profit * 0.9 * 0.05 : profit * 0.9 * 0.15;

    const GPMPercentage = profit < 20000 ? '5%' : '15%';
    setGPMPercent(GPMPercentage);

    if (!isNaN(GPMAmount)) {
      setGPM(GPMAmount.toFixed(2).toString());
    } else {
      setGPM('');
    }
  };

  const calculateFinalIncome = () => {
    const income = parseFloat(gautosPajamos) || 0;
    const expenses = parseFloat(patirtosSanaudos) || 0;
    const profit = income - expenses;
    const finalProfit =
      profit - parseFloat(PSD) - parseFloat(VSD) - parseFloat(GPM);

    const finalAllTaxes = profit - finalProfit;

    const finalTaxPercent = (finalAllTaxes / profit) * 100;

    setFinalIncome(finalProfit.toFixed(2).toString());
    setFinalTaxes(finalAllTaxes.toFixed(2).toString());
    setTaxPercent(finalTaxPercent.toFixed(2).toString());
  };

  useEffect(() => {
    calculateApmokestinamosPajamos();
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
      <h1>Idividualios veiklos mokesčių skaičiuoklė</h1>
      <section>
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
          options={['Faktiškai patirtos', '30% nuo pajamų']}
          value={selectedOption}
          onChange={handleOptionChange}
        />
        <Checkbox
          text={'Kaupiu pensijai papildomai'}
          onChange={handleAdditionalPensionChange}
          checked={!additionalPension}
        />
      </section>

      <section>
        <div>
          <div>Pajamos</div>
          <div>{!gautosPajamos ? '0' : gautosPajamos}</div>
        </div>

        <div>
          <div>Sąnaudos</div>
          <div>{!patirtosSanaudos ? '0' : patirtosSanaudos}</div>
        </div>

        <div>
          <div>Apmokęstinamos pajamos</div>
          <div>
            {isNaN(apmokestinamosPajamos) ? '0' : apmokestinamosPajamos}
          </div>
        </div>

        <div>VSD</div>
        <div>{VSD}</div>

        <div>PSD</div>
        <div>{PSD}</div>

        <div>GPM {GPMPercent}</div>
        <div>{GPM}</div>

        <div>Iš viso mokesčių: </div>
        <div>{finalTaxes}</div>

        <div>Mokestinė našta</div>
        <div> {isNaN(taxPercent) ? '0' : taxPercent} %</div>

        <div>Grynasis Pelnas</div>
        <div>{finalIncome}</div>
      </section>
    </StyledIndividualiosVeiklosMokesciuSkaiciuokle>
  );
};

export default IndividualiosVeiklosMokesciuSkaiciuokle;
