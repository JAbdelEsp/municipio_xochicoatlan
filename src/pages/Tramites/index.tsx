import Table from "../../components/Table";
import {
  Container,
  ContainerWrapper,
  Content,
  HeaderWrapper,
  ImageWrapper,
  Item,
  Main,
  Overlay,
  TextWrapper,
  TitleText,
  TitleWrapperText,
} from "./styles";
const Tramites = () => {
  return (
    <Main>
      <Container>
        <Content className="full-width">
          <HeaderWrapper>
            <Overlay />
            <ImageWrapper>
              <img src="/images/xochi_01.jpeg" alt="" />
              <TextWrapper>
                <TitleText>
                  Realiza tus trámites <br /> sin filas
                </TitleText>
              </TextWrapper>
            </ImageWrapper>
          </HeaderWrapper>
        </Content>
        <Content>
          <Table />
        </Content>
        <Content>
          <TitleWrapperText>Trámites más comunes</TitleWrapperText>
          <ContainerWrapper>
            <Item>
              <img src="images/xochi_01.jpeg" alt="" />
            </Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
            <Item></Item>
          </ContainerWrapper>
        </Content>
      </Container>
    </Main>
  );
};

export default Tramites;
