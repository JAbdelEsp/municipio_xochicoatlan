import Ticker from "../../common/Ticker";
import NavBar from "../../components/NavBar";
import {
  Content,
  GlobalWrapper,
  GridItem,
  GridLayout,
  HeaderTitle,
  HeroButton,
  HeroButtonWrapper,
  HeroSection,
  Row,
  RowBg,
  RowBgChange,
  RowBgChangeImg,
  RowBgGlobal,
  RowBgImage,
  RowBgImgGrain,
  RowBgImgOverlay,
  RowBgItem,
  RowBgMainLines,
  RowBgMainLineV,
  RowBgMainWrapper,
  RowBgWrapper,
  RowContent,
  RowHeroHeader,
  RowHeroHeading,
  RowItem,
  RowWrapper,
  Section,
} from "./styles";

const Home = () => {
  return (
    <Section>
      <GlobalWrapper>
        <RowWrapper className="sticky">
          <NavBar />
          <Row>
            <RowBgWrapper>
              <RowBgItem>
                <RowBgChange>
                  <RowBgChangeImg>
                    <RowBgGlobal>
                      <RowBg>
                        <RowBgImgGrain />
                        <RowBgImgOverlay />
                        <RowBgImage
                          src="images/xochi_01.jpeg"
                          alt="Xochicoatlán Hidalgo"
                        />
                      </RowBg>
                    </RowBgGlobal>
                  </RowBgChangeImg>
                </RowBgChange>
              </RowBgItem>
            </RowBgWrapper>
            <RowItem>
              <RowHeroHeader>
                <RowHeroHeading>
                  <h1>Bienvenidos</h1>
                  <h4>H. Ayuntamiento Municipal 2024 - 2027</h4>
                </RowHeroHeading>
              </RowHeroHeader>
            </RowItem>
          </Row>
        </RowWrapper>
        <RowWrapper className="row-wrapper-alt">
          <Row>
            <RowItem>
              <RowContent className="row-content-hero">
                <Ticker />
                <HeroSection className="section-scroll">
                  <RowBgMainWrapper>
                    <HeroButtonWrapper>
                      <HeroButton href="/tramites">
                        Trámites en línea
                      </HeroButton>
                    </HeroButtonWrapper>
                    <RowBgMainLines>
                      <RowBgMainLineV className="star-line-1" />
                      <RowBgMainLineV className="star-line-2" />
                      <RowBgMainLineV className="star-line-3" />
                      <RowBgMainLineV className="star-line-4" />
                    </RowBgMainLines>
                  </RowBgMainWrapper>
                </HeroSection>
                <HeroSection>
                  <GridLayout>
                    <GridItem className="item1"></GridItem>
                    <GridItem className="item2">
                      <Content>
                        <img src="images/xochi_01.jpeg" alt="" />
                        <HeaderTitle>
                          Entrega de obra en avenida principal
                        </HeaderTitle>
                      </Content>
                    </GridItem>
                    <GridItem className="item3">
                      <Content>
                        <img src="images/xochi_01.jpeg" alt="" />
                        <HeaderTitle>
                          Entrega de obra en avenida principal
                        </HeaderTitle>
                      </Content>
                    </GridItem>
                    <GridItem className="item4">
                      <Content>
                        <img src="images/xochi_01.jpeg" alt="" />
                        <HeaderTitle>
                          Entrega de obra en avenida principal
                        </HeaderTitle>
                      </Content>
                    </GridItem>
                    <GridItem className="item5">
                      <Content>
                        <img src="images/xochi_01.jpeg" alt="" />
                        <HeaderTitle>
                          Entrega de obra en avenida principal
                        </HeaderTitle>
                      </Content>
                    </GridItem>
                    <GridItem className="item6">
                      <Content>
                        <img src="images/xochi_01.jpeg" alt="" />
                        <HeaderTitle>
                          Entrega de obra en avenida principal
                        </HeaderTitle>
                      </Content>
                    </GridItem>
                    <GridItem className="item7">
                      <Content>
                        <img src="images/xochi_01.jpeg" alt="" />
                        <HeaderTitle>
                          Entrega de obra en avenida principal
                        </HeaderTitle>
                      </Content>
                    </GridItem>
                  </GridLayout>
                </HeroSection>
              </RowContent>
            </RowItem>
          </Row>
        </RowWrapper>
      </GlobalWrapper>
    </Section>
  );
};

export default Home;
