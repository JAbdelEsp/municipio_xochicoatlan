import { useEffect, useState } from "react";
import { Content, Main, TitleWrapper } from "./styles";
import Header from "../../common/Header";
import Select from "../../common/Select";
import DataTable from "../../components/Table";

const Tesoreria = () => {
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
      <Header title="Tesorería" description="" />
      <Content className="content-wrapper">
        <Select />
        <DataTable />
      </Content>
      <Content className="gallery-wrapper">
        <TitleWrapper>
          <h1>Conoce nuestras comunidades</h1>
        </TitleWrapper>
      </Content>
    </Main>
  );
};

export default Tesoreria;
