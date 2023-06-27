import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import { PAGES } from './types/pages';
import AtlyginimoIrMokesciuSkaiciuokle from './pages/AtlyginimoIrMokesciuSkaiciuokle';
import IndividualiosVeiklosMokesciuSkaiciuokle from './pages/IndividualiosVeiklosMokesciuSkaiciuokle';
import PVMSkaiciuokle from './pages/PVMSkaiciuokle';
import SumaZodziais from './pages/SumaZodziais';
import ValiutuSkaiciuokle from './pages/ValiutuSkaiciuokle';

const RoutesComponent: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path={'/' + PAGES.AtlyginimoIrMokesciuSkaiciuokle}
            element={<AtlyginimoIrMokesciuSkaiciuokle />}
          />
          <Route
            path={'/' + PAGES.IndividualiosVeiklosMokesciuSkaiciuokle}
            element={<IndividualiosVeiklosMokesciuSkaiciuokle />}
          />
          <Route
            path={'/' + PAGES.PVMSkaiciuokle}
            element={<PVMSkaiciuokle />}
          />
          <Route path={'/' + PAGES.SumaZodziais} element={<SumaZodziais />} />
          <Route
            path={'/' + PAGES.ValiutuSkaiciuokle}
            element={<ValiutuSkaiciuokle />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
