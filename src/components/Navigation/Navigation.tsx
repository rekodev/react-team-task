import { Link } from 'react-router-dom';
import { PAGES } from '../../types/pages';
import { StyledNavigation } from './style';

const Navigation = () => {
  return (
    <StyledNavigation>
      <ul>
        <li>
          <Link to={'/'}>Pagrindinis</Link>
        </li>
        <li>
          <Link to={'/' + PAGES.AtlyginimoIrMokesciuSkaiciuokle}>
            Atlyginimo ir mokėsčių skaičiuoklė
          </Link>
        </li>
        <li>
          <Link to={'/' + PAGES.IndividualiosVeiklosMokesciuSkaiciuokle}>
            Individualios veiklos mokėsčių skaičiuoklė
          </Link>
        </li>
        <li>
          <Link to={'/' + PAGES.PVMSkaiciuokle}>PVM skaičiuoklė</Link>
        </li>
        <li>
          <Link to={'/' + PAGES.ValiutuSkaiciuokle}>Valiutų skaičiuoklė</Link>
        </li>
        <li>
          <Link to={'/' + PAGES.SumaZodziais}>Suma žodžiais</Link>
        </li>
      </ul>
    </StyledNavigation>
  );
};

export default Navigation;
