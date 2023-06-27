import { Link } from 'react-router-dom';
import { PAGES } from '../../types/pages';
import { StyledNavigationMobile } from './style';

interface INavigationMobileProps {
  setMenuOpen: (isMenuOpen: boolean) => void;
}

const NavigationMobile = ({ setMenuOpen }: INavigationMobileProps) => {
  return (
    <StyledNavigationMobile>
      <ul>
        <li>
          <Link to={'/'} onClick={() => setMenuOpen(false)}>
            Pagrindinis
          </Link>
        </li>
        <li>
          <Link
            to={'/' + PAGES.AtlyginimoIrMokesciuSkaiciuokle}
            onClick={() => setMenuOpen(false)}
          >
            Atlyginimo ir mokėsčių skaičiuoklė
          </Link>
        </li>
        <li>
          <Link
            to={'/' + PAGES.IndividualiosVeiklosMokesciuSkaiciuokle}
            onClick={() => setMenuOpen(false)}
          >
            Individualios veiklos mokėsčių skaičiuoklė
          </Link>
        </li>
        <li>
          <Link
            to={'/' + PAGES.PVMSkaiciuokle}
            onClick={() => setMenuOpen(false)}
          >
            PVM skaičiuoklė
          </Link>
        </li>
        <li>
          <Link
            to={'/' + PAGES.ValiutuSkaiciuokle}
            onClick={() => setMenuOpen(false)}
          >
            Valiutų skaičiuoklė
          </Link>
        </li>
        <li>
          <Link
            to={'/' + PAGES.SumaZodziais}
            onClick={() => setMenuOpen(false)}
          >
            Suma žodžiais
          </Link>
        </li>
      </ul>
    </StyledNavigationMobile>
  );
};

export default NavigationMobile;
