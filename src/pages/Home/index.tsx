import ScrollDown from "../../common/ScrollDown";
import Ticker from "../../common/Ticker";
import InfiniteScroll from "../../components/InfiniteScroll";
import {
  GlobalWrapper,
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
          <Row>
            <RowBgWrapper>
              <RowBgItem>
                <RowBgChange>
                  <RowBgChangeImg>
                    <RowBgGlobal>
                      <RowBg>
                        <RowBgImgGrain />
                        <RowBgImgOverlay />
                        {/* <RowBgImage
                          src="images/xochi_01.jpeg"
                          alt="Xochicoatlán Hidalgo"
                        /> */}
                        <video
                          src="/videos/hidalgo_magico.mp4"
                          key={1}
                          autoPlay={true}
                          muted={false}
                          loop={true}
                        ></video>
                      </RowBg>
                    </RowBgGlobal>
                  </RowBgChangeImg>
                </RowBgChange>
              </RowBgItem>
            </RowBgWrapper>
            <RowItem>
              <RowHeroHeader>
                <RowHeroHeading>
                  <h1 className="animate__animated animate__backInLeft">
                    Bienvenidos
                  </h1>
                  <h4 className="animate__animated animate__backInRight">
                    H. Ayuntamiento Municipal 2024 - 2027
                  </h4>
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
                      <HeroButton
                        to="/tramites"
                        className="animate__animated animate__heartBeat"
                      >
                        Trámites en línea
                      </HeroButton>
                    </HeroButtonWrapper>
                    <ScrollDown />

                    <RowBgMainLines>
                      <RowBgMainLineV className="star-line-1" />
                      <RowBgMainLineV className="star-line-2" />
                      <RowBgMainLineV className="star-line-3" />
                      <RowBgMainLineV className="star-line-4" />
                    </RowBgMainLines>
                  </RowBgMainWrapper>
                </HeroSection>
                <InfiniteScroll />
              </RowContent>
            </RowItem>
          </Row>
        </RowWrapper>
      </GlobalWrapper>
    </Section>
  );
};

export default Home;
