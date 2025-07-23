import styled from "styled-components";

export const Main = styled("div")`
  width: 100%;
  height: 100%;
  min-height: 100svh;
  .full-width {
    grid-column: 1/3;
    grid-row: 1/3;
    align-content: center;
  }
`;
export const Container = styled("div")`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(10, 1fr);
`;
export const Content = styled("div")`
  width: 100%;
  gap: 10px;
  &:nth-child(1) {
    width: 100%;
    grid-column: 1/3;
    grid-row: 1/17;
    justify-self: center;
  }
  &:nth-child(2) {
    width: 60%;
    grid-column: 1/3;
    grid-row: 17/23;
    justify-self: center;
    margin-top: 6rem;
  }
  &:nth-child(3) {
    width: 100%;
    grid-column: 1/3;
    grid-row: 23/38;
    justify-self: center;
    margin-top: 6rem;
  }
  .table {
    border-radius: 10px;
    .MuiDataGrid-columnHeader {
      background-color: var(--main-color-1) !important;
      color: var(--white);
      font-family: var(--sans-font);
    }
  }
`;
export const HeaderWrapper = styled("div")`
  width: 100%;
`;
export const ImageWrapper = styled("div")`
  width: 100%;
  height: 100%;
  grid-row: 1/3;
  img {
    width: 100%;
    height: 480px;
    object-fit: cover;
  }
`;
export const TextWrapper = styled("div")`
  width: 100%;
  text-align: left;
  padding: 1rem;
  position: absolute;
  top: 8rem;
  font-size: 2.4rem;
  font-family: var(--serif-font);
  color: var(--white);
  text-shadow: 3px 6px 4px rgba(0, 0, 0, 0.7);
  letter-spacing: 0.1rem;
`;
export const TitleText = styled("h1")`
  color: var(--white);
  text-shadow: 3px 6px 4px rgba(0, 0, 0, 0.7);: 
`;

export const TitleWrapperText = styled("h1")`
  color: var(--dark);
  font-family: var(--sans-font);
  font-size: 2.4rem;
`;

export const Overlay = styled("div")`
  width: 100%;
  height: 480px;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  background-color: var(--text-shadow-45);
`;

export const ContainerWrapper = styled("div")`
  width: 100%;
  height: 590px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(13, 2fr);
  gap: 30px;
  margin-top: 2rem;
`;
export const Item = styled("div")`
  width: 100%;
  background-color: var(--gray);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--sans-font);
  font-size: 1.2rem;
  color: var(--white);
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  &:nth-child(1) {
    grid-row: 1/13;
    grid-column: 1/2;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 10px;
    }
  }
  &:nth-child(2) {
    grid-row: 3/11;
    grid-column: 2/3;
    row-gap: 90px;
  }
  &:nth-child(3) {
    grid-row: 1/7;
    grid-column: 3/4;
    row-gap: 90px;
  }
  &:nth-child(4) {
    grid-row: 7/13;
    grid-column: 3/4;
    row-gap: 90px;
  }
  &:nth-child(5) {
    grid-row: 1/10;
    grid-column: 4/5;
    row-gap: 90px;
  }
  &:nth-child(6) {
    grid-row: 10/13;
    grid-column: 4/4;
    row-gap: 90px;
  }
`;
