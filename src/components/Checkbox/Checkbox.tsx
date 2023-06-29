import 'bulma/css/bulma.css';

import { StyledCheckboxContainer } from './style';

interface ICheckboxProps {
  text: string;
  onChange: (e: any) => void;
  checked: boolean;
}

const Checkbox = ({ text, onChange, checked }: ICheckboxProps) => {
  return (
    <StyledCheckboxContainer>
      <label className='checkbox'>
        <input type='checkbox' onChange={onChange} checked={checked} />
        {text}
      </label>
    </StyledCheckboxContainer>
  );
};

export default Checkbox;
