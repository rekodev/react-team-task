import { StyledRadioContainer } from './style';
import 'bulma/css/bulma.css';

interface IRadioButtonProps {
  name: string;
  options: string[];
  label: string;
  value?: string;
  onChange: (e: any) => void;
}

const RadioButton = ({
  name,
  options,
  label,
  value,
  onChange,
}: IRadioButtonProps) => {
  return (
    <StyledRadioContainer>
      <label htmlFor=''>{label}</label>
      <div className='control'>
        {options.map((option, index) => (
          <label className='radio' key={index}>
            <input type='radio' name={name} value={value} onChange={onChange} />
            {option}
          </label>
        ))}
      </div>
    </StyledRadioContainer>
  );
};

export default RadioButton;
