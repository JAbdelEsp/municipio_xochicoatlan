import styled, { keyframes } from "styled-components";

export const Main = styled("div")<{ isSticky?: boolean }>`
  width: 100%;
  height: 100%;
  min-height: 100svh;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  .header-wrapper {
    animation: ${(props) => (props.isSticky ? fadeInDown : fadeOutUp)} 0.5s
      forwards;
    ${(props) =>
      props.isSticky
        ? `
          position: sticky;
          top: 0;
          z-index: 10;
          background-color: var(--white);
          transform: translateY(0);
          opacity: 1;
        `
        : `
          position: inherit;
          transform: translateY(-20px);
          opacity: 0.5;
        `}
    grid-row: 1 / 2;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .content-wrapper {
    grid-row: 2 / 3;
    row-gap: 0rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    table {
      thead {
        th {
          font-size: 1rem;
          font-weight: 600;
          color: var(--white);
          font-family: var(--serif-font);
          background-color: var(--main-color-1);
        }
      }
      tbody {
        td {
          font-size: 1.2rem;
          color: var(--dark);
          font-family: var(--serif-font);
          padding: 2rem;
        }
      }
    }
    .select-wrapper {
      display: block;
      width: 100%;
      margin-top: 4rem;
      margin-left: 315px;
      text-align: left;
    }
  }
  .gallery-wrapper {
    height: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOutUp = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-40px);
  }
`;

export const Content = styled("div")`
  width: 100%;
  height: auto;
  grid-column: 1 / -1;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  .content-wrapper {
    grid-row: 2 / 3;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
`;

export const TextWrapper = styled("div")`
  h1 {
    font-size: 4.5rem;
    text-align: center;
    color: var(--dark);
    font-family: var(--serif-font);
    padding-top: 10rem;
  }
  p {
    font-size: 1.6rem;
    text-align: center;
    color: var(--gray);
    margin-top: 1rem;
  }
`;

export const LogoHeading = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  img {
    width: 100px; /* Adjust as needed */
    height: auto; /* Maintain aspect ratio */
  }
`;

export const ContentWrapper = styled("div")`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(9, 1fr);
  gap: 1rem;
  width: 100%;
  height: 100%;
  .col-1 {
    grid-column: 1 / 3;
    grid-row: 1 / 9;
    background-color: var(--main-color-1);
    border-radius: 10px;
  }
  .col-2 {
    grid-column: 3 / 4;
    grid-row: 1 / 5;
    background-color: var(--main-color-2);
    border-radius: 10px;
  }
  .col-3 {
    grid-column: 3 / 4;
    grid-row: 5 / 9;
    background-color: var(--main-color-2);
    border-radius: 10px;
  }
  .col-4 {
    grid-column: 4 / 5;
    grid-row: 1 / 9;
    background-color: var(--main-color-1);
    border-radius: 10px;
  }
`;

export const Item = styled("div")``;

export const TitleWrapper = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3rem;
  h1 {
    font-size: 3rem;
    color: var(--dark);
    font-family: var(--serif-font);
    margin-bottom: 20px;
    text-transform: capitalize;
  }
`;
