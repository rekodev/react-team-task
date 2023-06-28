import 'bulma/css/bulma.css';

import { StyledCheckboxContainer } from './style';

interface ICheckboxProps {
  text: string;
}

const Checkbox = ({ text }: ICheckboxProps) => {
  return (
    <StyledCheckboxContainer>
      <label className='checkbox'>
        <input type='checkbox' />
        {text}
      </label>
    </StyledCheckboxContainer>
  );
};

export default Checkbox;
