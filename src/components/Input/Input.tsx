import 'bulma/css/bulma.css';
import { StyledInput } from './style';

interface IInputProps {
  label?: boolean;
  labelText?: string;
  id: string;
  placeholder?: string;
  type:
    | 'number'
    | 'text'
    | 'email'
    | 'color'
    | 'date'
    | 'hidden'
    | 'button'
    | 'checkbox'
    | 'file'
    | 'password'
    | 'radio'
    | 'tel'
    | 'text'
    | 'time'
    | 'url'
    | 'week'
    | 'submit'
    | 'search'
    | 'reset'
    | 'range'
    | 'datetime-local'
    | 'month'
    | 'image'
    | 'date';
  disabled?: boolean;
  value?: string | number | readonly string[] | undefined;
  onChange?: (e: any) => void;
}

const Input = ({
  placeholder,
  type,
  disabled,
  label,
  labelText,
  id,
  value,
  onChange,
}: IInputProps) => {
  return (
    <StyledInput>
      {label ? <label htmlFor={id}>{labelText}</label> : ''}
      <input
        id={id}
        type={type}
        placeholder={placeholder ? placeholder : ''}
        className='input'
        disabled={disabled ? true : false}
        value={value}
        onChange={onChange}
        data-testid='grossSalary'
      />
    </StyledInput>
  );
};

export default Input;
