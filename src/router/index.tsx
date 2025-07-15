import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { Styles } from "../styles/styles";
const Router = () => {
  return (
    <Suspense fallback={<p>Cargando...</p>}>
      <Styles />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
