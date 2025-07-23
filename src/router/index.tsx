import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { Styles } from "../styles/styles";
import Tramites from "../pages/Tramites";
import Transparencia from "../pages/Transparencia";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
const Router = () => {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <Styles />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tramites" element={<Tramites />} />
        <Route path="/transparencia" element={<Transparencia />} />
      </Routes>
      <Footer />
    </Suspense>
  );
};

export default Router;
