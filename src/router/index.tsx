import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { Styles } from "../styles/styles";
import Tramites from "../pages/Tramites";
import Transparencia from "../pages/Transparencia";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Tesoreria from "../pages/Tesoreria";
const Router = () => {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <Styles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tramites" element={<Tramites />} />
        <Route path="/transparencia" element={<Transparencia />} />
        <Route path="/tesoreria" element={<Tesoreria />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default Router;
