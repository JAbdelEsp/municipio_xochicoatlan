import styled from "styled-components";

export const Section = styled("section")`
  width: 100%;
  height: 100%;
  min-height: 100svh;
  .sticky {
    position: sticky;
    top: 0;
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
  grid-template-rows: minmax(33.3333%, 1fr) minmax(33.3333%, 1fr) minmax(
      33.3333%,
      1fr
    );
  grid-template-columns: minmax(33.3333%, 1fr) minmax(33.3333%, 1fr) minmax(
      33.3333%,
      1fr
    );
  grid-auto-rows: minmax(33.3333%, 1fr);
  grid-auto-columns: minmax(33.3333%, 1fr);
  width: 50%;
  height: 100%;
  min-height: 100svh;
  display: grid;
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
