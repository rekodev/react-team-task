import { StyledRadioContainer } from './style';
import 'bulma/css/bulma.css';

interface IRadioButtonProps {
  name: string;
  options: string[];
}

const RadioButton = ({ name, options }: IRadioButtonProps) => {
  return (
    <StyledRadioContainer>
      <div className='control'>
        {options.map((option, index) => (
          <label className='radio' key={index}>
            <input type='radio' name={name} />
            {option}
          </label>
        ))}
      </div>
    </StyledRadioContainer>
  );
};

export default RadioButton;
