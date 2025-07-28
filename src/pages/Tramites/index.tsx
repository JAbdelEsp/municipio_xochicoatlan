import { useEffect, useState } from "react";
import Select from "../../common/Select";
import MasonryGallery from "../../components/MasonryGallery";
import DataTable from "../../components/Table";
import { Content, Main, TitleWrapper } from "./styles";
import Header from "../../common/Header";
const Tramites = () => {
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY < 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Main className="main" isSticky={isSticky}>
      <Header
        title="Portal de Trámites y Servicios"
        description="Información sobre los trámites disponibles."
      />
      <Content className="content-wrapper">
        <Select />
        <DataTable />
      </Content>
      <Content className="gallery-wrapper">
        <TitleWrapper>
          <h1>Conoce nuestras comunidades</h1>
        </TitleWrapper>
        <MasonryGallery />
      </Content>
    </Main>
  );
};

export default Tramites;
