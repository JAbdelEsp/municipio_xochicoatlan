import NavBar from "../../components/NavBar";
import {
  GlobalWrapper,
  Overlay,
  Row,
  RowBg,
  RowBgChange,
  RowBgChangeImg,
  RowBgGlobal,
  RowBgImage,
  RowBgImgGrain,
  RowBgImgOverlay,
  RowBgItem,
  RowBgWrapper,
  RowWrapper,
  Section,
} from "./styles";

const Home = () => {
  return (
    <Section>
      <GlobalWrapper>
        <RowWrapper className="sticky bg">
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
                          src="public/images/xochi_01.jpeg"
                          alt="Xochicoatlán Hidalgo"
                        />
                      </RowBg>
                    </RowBgGlobal>
                  </RowBgChangeImg>
                </RowBgChange>
              </RowBgItem>
            </RowBgWrapper>
          </Row>
        </RowWrapper>
        <RowWrapper></RowWrapper>
      </GlobalWrapper>
    </Section>
  );
};

export default Home;
