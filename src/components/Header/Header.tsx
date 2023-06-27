import Navigation from '../Navigation';
import { StyledHeader, StyledHeaderContainer } from './style';

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <Navigation />
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
