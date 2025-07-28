import styled from "styled-components";
import { Link } from "react-router-dom";
export const Section = styled("section")`
  width: 100%;
  height: 100%;
  min-height: 100svh;
  .sticky {
    position: sticky;
    top: 0;
  }
  .row-content-sticky {
    padding: 0;
    grid-column-gap: 0;
    grid-row-gap: 0;
    background-color: var(--colors-global--tertiary-color);
    justify-content: flex-start;
  }
  .row-content-hero {
    // min-height: 100svh !important;
  }
  .row-wrapper-alt {
    grid-template-rows: minmax(33.3333%, 1fr) !important;
  }
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 460px) {
    .sticky {
      position: relative;
    }
  }
  @media screen and (max-width: 740px) {
    .sticky {
      position: relative;
    }
  }
`;

export const Overlay = styled("div")`
  width: 100%;
  height: 100vh;
`;
export const GlobalWrapper = styled("div")`
  flex-flow: wrap;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  height: 100%;
  display: flex;
`;
export const RowWrapper = styled("div")`
  grid-column-gap: 0rem;
  grid-row-gap: 0rem;
  width: 50%;
  height: 100%;
  min-height: 100svh;
  display: grid;
  background-color: white;
  @media screen and (max-width: 460px) {
    width: 100%;
  }
  @media screen and (max-width: 740px) {
    width: 100%;
  }
`;

export const Row = styled("div")`
  width: 100%;
  height: 100%;
  position: relative;
  grid-area: span 3 / span 3 / span 3 / span 3;
`;

export const RowBgWrapper = styled("div")`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0%;
  overflow: hidden;
  grid-area: span 3 / span 3 / span 3 / span 3;
`;

export const RowBgItem = styled("div")`
  z-index: 1;
  width: 110%;
  height: 110%;
  margin-top: -5%;
  margin-left: -10%;
  position: absolute;
  inset: 0%;
  overflow: hidden;
`;

export const RowBgChange = styled("div")`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0%;
`;

export const RowBgChangeImg = styled("div")`
  z-index: 1;
  width: 100%;
  height: 100%;
  display: block;
  position: relative;
`;

export const RowBgGlobal = styled("div")`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0%;
  overflow: hidden;
`;

export const RowBg = styled("div")`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0%;
`;

export const RowBgImgGrain = styled("div")`
  z-index: 3;
  opacity: 0.04;
  background-image: url(https://cdn.prod.website-files.com/674e039d59553ffe0e203d64/6771a361d82d856d660429c5_grain-slow.gif);
  background-position: 0 0;
  background-size: auto;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0%;
`;

export const RowBgImgOverlay = styled("div")`
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0%;
`;

export const RowBgImage = styled("img")`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0%;
`;

export const RowItem = styled("div")`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: relative;
`;

export const RowHeroHeader = styled("div")`
  bottom: 40px;
  z-index: 1;
  padding: 1rem 1rem 4.209rem;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`;

export const RowHeroHeading = styled("div")`
  max-width: 23.612rem;
  color: var(--white);
  width: 100%;
  position: relative;
  h1 {
    margin-top: 0;
    margin-bottom: 0;
    font-family: var(--serif-font);
    text-shadow: 3px 6px 8px rgba(0, 0, 0, 0.7);
    font-size: 3.157rem;
    letter-spacing: -0.0222em;
    font-weight: 700;
    line-height: 1.06;
    text-transform: uppercase;
  }
  h4 {
    margin-top: 0;
    margin-bottom: 0;
    font-family: var(--serif-font);
    font-size: 0.857rem;
    letter-spacing: -0.0422em;
    font-weight: 700;
    line-height: 1.06;
    text-transform: uppercase;
  }
`;

export const ScrollRowWrapper = styled("div")`
  padding: 1rem;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  display: flex;
  position: absolute;
  inset: auto auto 0% 0%;
`;

export const ScrollRowText = styled("div")`
  z-index: 1;
  grid-column-gap: 0.422rem;
  grid-row-gap: 0.422rem;
  font-family: var(--font-family--fourth-font);
  color: #212121;
  font-size: 0.75rem;
  letter-spacing: 0.0238em;
  text-transform: uppercase;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  line-height: 1;
  display: flex;
  position: relative;
`;

export const ScrollRowIcon = styled("div")``;

export const RowContent = styled("div")`
  z-index: 3;
  grid-column-gap: 2.369rem;
  grid-row-gap: 2.369rem;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`;

export const HeroSection = styled("section")`
  width: 100%;
  height: 100vh;
  min-height: 100svh;
  position: relative;
`;

export const HeroTextWrapper = styled("div")`
  z-index: 3;
  width: 100%;
  position: relative;
`;

export const RowTextWrapper = styled("div")`
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  display: flex;
  position: relative;
`;

export const RowTextMax = styled("div")`
  width: 100%;
`;

export const RowText = styled("div")`
  width: 100%;
  position: relative;
`;

export const RowHeading = styled("h2")`
  font-family: var(--font-family--secondary-font);
  font-size: 1.333rem;
  letter-spacing: -0.0317em;
  font-weight: 700;
  line-height: 1.2;
`;

export const RowBgMainWrapper = styled("div")`
  width: 100%;
  height: 100%;
  position: absolute;
  inset: 0%;
  overflow: hidden;
`;

export const HeroButtonWrapper = styled("div")`
  z-index: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  inset: 0%;
  overflow: hidden;
`;

export const HeroImageGrid = styled("div")`
  z-index: 2;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  width: 100%;
  height: 100%;
  display: grid;
  position: absolute;
  inset: 0%;
  overflow: hidden;
`;

export const HeroImageGridItem = styled("div")``;

export const HoverImageMask = styled("div")`
  z-index: -3;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: none;
  position: absolute;
  inset: 0%;
`;

export const HeroButton = styled(Link)`
  z-index: 5;
  padding: 1.777rem 3.157rem;
  border: 0.317rem solid #f4f4f4;
  background-color: #f4f4f4;
  box-shadow: 0 4px 6px -4px #2121211a, 0 10px 15px -3px #2121211a;
  transform: scale3d(1none, 1none, 1none);
  font-family: var(--font-family--primary-font);
  color: #212121;
  font-size: 1.157rem;
  text-align: center;
  letter-spacing: -0.0422em;
  text-transform: uppercase;
  cursor: pointer;
  transform-style: preserve-3d;
  border-radius: 100vw;
  justify-content: center;
  align-items: center;
  margin: auto;
  font-weight: 900;
  line-height: 1;
  display: flex;
  position: relative;
`;

export const RowBgMainLines = styled("div")`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const RowBgMainLineV = styled("div")`
  width: 1px;
  background-image: linear-gradient(
    180deg,
    var(--transparent),
    #2121211a 50%,
    var(--transparent)
  );
  height: 100%;
  position: absolute;
`;

export const ButtonWrapper = styled("nav")`
  grid-column-gap: 0.317rem;
  grid-row-gap: 0.317rem;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
`;

export const ButtonLink = styled("a")`
  grid-column-gap: 0.563rem;
  grid-row-gap: 0.563rem;
  font-family: var(--font-family--fourth-font);
  font-size: 0.75rem;
  text-align: center;
  letter-spacing: 0.0238em;
  text-transform: uppercase;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  line-height: 1;
  transition: letter-spacing 0.2s ease-out;
  display: flex;
`;

export const ButtonIconWrapper = styled("div")`
  width: 0.75rem;
  height: 0.75rem;
  background-color: #a6a6a6;
  flex: none;
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;

export const ButtonIconCircle = styled("div")`
  background-color: #f4f4f4;
  border-radius: 100vw;
  flex: none;
  width: 100%;
  height: 100%;
`;

export const LinkWrapper = styled("div")`
  grid-column-gap: 0.317rem;
  grid-row-gap: 0.317rem;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const GridLayout = styled("div")`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: repeat(17, 1fr);
  gap: 10px;
`;

export const GridItem = styled("div")`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
`;

export const Content = styled("div")`
  position: relative;
  grid-row: 1/4;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const HeaderTitle = styled("h1")`
  position: absolute;
  bottom: 0;
  color: var(--white);
  padding: 0.729rem 0.345rem;
`;
