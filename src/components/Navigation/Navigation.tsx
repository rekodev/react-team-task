import MenuIcon from '../MenuIcon';
import NavigationDesktop from '../NavigationDesktop';
import NavigationMobile from '../NavigationMobile';
import { useState } from 'react';

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuIconClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* <NavigationMobile /> */}
      {isMenuOpen && <NavigationMobile setMenuOpen={setMenuOpen} />}
      <MenuIcon
        onClick={handleMenuIconClick}
        className={`fa-solid fa-${!isMenuOpen ? 'bars' : 'xmark'}`}
      />
      <NavigationDesktop />
    </>
  );
};

export default Navigation;
