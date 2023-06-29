import { StyledCurrencySelectList } from './style';
import Select from '../../components/Select';
import useCurrencyConversion from './useCurrencyConversion';
import { StyledBox } from '../../styles/UtilityStyles';

const CurrencySelect = () => {
  const conversion = useCurrencyConversion();
  return (
    <StyledCurrencySelectList>
      <StyledBox>
        <h3>Pridėti valiutą</h3>
        {conversion && conversion.data ? (
          <Select
            id='1'
            options={Object.entries(conversion.data).map(([currency]) => ({
              value: currency,
              label: currency,
            }))}
          />
        ) : (
          <div>Loading...</div>
        )}
      </StyledBox>
    </StyledCurrencySelectList>
  );
};

export default CurrencySelect;
