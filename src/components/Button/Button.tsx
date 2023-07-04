import React, { useCallback } from 'react';
import { StyledButton } from './style';

interface IButtonProps {
  handleClick: (args: unknown) => void;
  children: React.ReactNode;
}

const Button = ({ handleClick, children }: IButtonProps) => {
  const onHandleClick = useCallback(
    (args: unknown) => {
      if (handleClick) {
        handleClick(args);
      }
    },
    [handleClick]
  );
  return <StyledButton onClick={onHandleClick}>{children}</StyledButton>;
};

export default Button;
