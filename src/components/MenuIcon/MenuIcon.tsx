import { StyledMenuIcon } from './style';

interface IMenuIconProps {
  className: string;
  onClick: () => void;
}

const MenuIcon: React.FC<IMenuIconProps> = ({ className, onClick }) => {
  return <StyledMenuIcon onClick={onClick} className={className} />;
};

export default MenuIcon;
