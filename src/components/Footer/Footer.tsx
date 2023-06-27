import { StyledFooter, StyledFooterContainer } from './style';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <StyledFooterContainer>
        <p>CA_4 &copy; {currentYear} Visos teisės saugomos</p>
      </StyledFooterContainer>
    </StyledFooter>
  );
};

export default Footer;
