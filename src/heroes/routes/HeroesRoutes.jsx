import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from '../../design'
import { DcPage, HeroPage, InicioPage, MarvelPage } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="inicio" element={<InicioPage />} />
        <Route path="marvel" element={<MarvelPage />} />
        <Route path="dc" element={<DcPage />} />
        <Route path="heroe" element={<HeroPage />} />
        <Route path="/*" element={<Navigate to="/inicio" />} />
      </Routes>
    </>
  );
};
