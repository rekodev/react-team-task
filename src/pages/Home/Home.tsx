import HomePageCard from '../../components/HomePageCard';
import { PAGES } from '../../types/pages';
import { StyledHome, StyledHomeContainer } from './style';

const Home = () => {
  return (
    <StyledHome>
      <StyledHomeContainer>
        <HomePageCard
          text='Atlyginimo ir mokesčIų skaičiuoklė'
          path={PAGES.AtlyginimoIrMokesciuSkaiciuokle}
        />
        <HomePageCard
          text='Individualios veiklos mokesčių skaičiuoklė'
          path={PAGES.IndividualiosVeiklosMokesciuSkaiciuokle}
        />
        <HomePageCard text='PVM skaičiuoklė' path={PAGES.PVMSkaiciuokle} />
        <HomePageCard
          text='Valiutų skaičiuoklė'
          path={PAGES.ValiutuSkaiciuokle}
        />
        <HomePageCard text='Suma žodžiais' path={PAGES.SumaZodziais} />
      </StyledHomeContainer>
    </StyledHome>
  );
};

export default Home;
