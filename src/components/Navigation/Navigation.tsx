import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PAGES } from '../../types/pages';
import { StyledNavigation } from './style';

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <StyledNavigation
      className='navbar'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand'>
        <Link className='navbar-item' to='/'>
          <img src='../public/logo-no-background.svg' width='112' height='28' />
        </Link>

        <a
          onClick={() => {
            setIsActive(!isActive);
          }}
          role='button'
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>

      <div
        id='navbarBasicExample'
        className={`navbar-menu ${isActive ? 'is-active' : ''}`}
      >
        <div className='navbar-start'></div>

        <div className='navbar-end'>
          <Link
            className='navbar-item'
            to={'/' + PAGES.AtlyginimoIrMokesciuSkaiciuokle}
          >
            Atlyginimo ir mokėsčių skaičiuoklė
          </Link>

          <Link
            className='navbar-item'
            to={'/' + PAGES.IndividualiosVeiklosMokesciuSkaiciuokle}
          >
            Individualios veiklos mokėsčių skaičiuoklė
          </Link>

          <Link className='navbar-item' to={'/' + PAGES.PVMSkaiciuokle}>
            PVM skaičiuoklė
          </Link>

          <Link className='navbar-item' to={'/' + PAGES.ValiutuSkaiciuokle}>
            Valiutų skaičiuoklė
          </Link>

          <Link className='navbar-item' to={'/' + PAGES.SumaZodziais}>
            Suma žodžiais
          </Link>
        </div>
      </div>
    </StyledNavigation>
  );
};

export default Navigation;
