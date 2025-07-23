import {
  Container,
  CopyRight,
  HorizontalDivider,
  LogoHeading,
  MainFooter,
  NavHeading,
} from "./styles";
const Footer = () => {
  return (
    <MainFooter>
      <Container>
        <LogoHeading>
          <img src="/images/xochi_simbolo.png" alt="" />
        </LogoHeading>
      </Container>
      <Container>
        <NavHeading>
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/transparencia">Transparencia</a>
            </li>
            <li>
              <a href="/obras">Obras Públicas</a>
            </li>
            <li>
              <a href="/predial">Predial</a>
            </li>
          </ul>
        </NavHeading>
      </Container>
      <Container>
        <HorizontalDivider />
      </Container>
      <Container>
        <CopyRight>
          <p>
            © {new Date().getFullYear()} H. Ayuntamiento Xochicoatlán, Hidalgo
          </p>
        </CopyRight>
      </Container>
    </MainFooter>
  );
};

export default Footer;
