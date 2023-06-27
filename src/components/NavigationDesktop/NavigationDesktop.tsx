import { Link } from 'react-router-dom';
import { StyledNavigationDesktop } from './style';
import { PAGES } from '../../types/pages';

const NavigationDesktop = () => {
  return (
    <StyledNavigationDesktop>
      <ul>
        <li>
          <Link to={'/'}>Pagrindinis</Link>
        </li>
        <li>-</li>
        <li>
          <Link to={'/' + PAGES.AtlyginimoIrMokesciuSkaiciuokle}>
            Atlyginimo ir mokėsčių skaičiuoklė
          </Link>
        </li>
        <li>-</li>
        <li>
          <Link to={'/' + PAGES.IndividualiosVeiklosMokesciuSkaiciuokle}>
            Individualios veiklos mokėsčių skaičiuoklė
          </Link>
        </li>
        <li>-</li>
        <li>
          <Link to={'/' + PAGES.PVMSkaiciuokle}>PVM skaičiuoklė</Link>
        </li>
        <li>-</li>
        <li>
          <Link to={'/' + PAGES.ValiutuSkaiciuokle}>Valiutų skaičiuoklė</Link>
        </li>
        <li>-</li>
        <li>
          <Link to={'/' + PAGES.SumaZodziais}>Suma žodžiais</Link>
        </li>
      </ul>
    </StyledNavigationDesktop>
  );
};

export default NavigationDesktop;
