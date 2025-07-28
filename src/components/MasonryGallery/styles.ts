import styled from "styled-components";

export const Gallery = styled("div")`
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-template-rows: repeat(7, 1fr);
  row-gap: 1rem;
  column-gap: 1rem;
  .cell--1 {
    grid-column: 1 / 6;
    grid-row: 2 / 6;
  }

  .cell--2 {
    grid-column: 6 / 9;
    grid-row: 1 / 7;
  }

  .cell--3 {
    grid-column: 9 / 12;
    grid-row: 2 / 4;
  }

  .cell--4 {
    grid-column: 12 / -1;
    grid-row: 1 / 4;
  }

  .cell--5 {
    grid-column: 9 / 12;
    grid-row: 4 / 6;
  }

  .cell--6 {
    grid-column: 12 / -1;
    grid-row: 4 / 7;
  }
`;

export const Item = styled("div")`
  border-radius: 16px;
  overflow: hidden;
  break-inside: avoid;
  position: relative;
  &:hover {
    h4 {
      display: none;
    }
    transform: scale(1.02);
    transition: transform 0.3s ease;
  }
`;

export const Image = styled("img")`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  border-radius: 16px;
  filter: grayscale(100%);
  transition: transform 0.3s ease, filter 0.3s ease;
  &:hover {
    transform: scale(1.05);
    filter: grayscale(0%);
  }
`;

export const TitleWrapper = styled("h4")`
  font-size: 1.4rem;
  text-align: left;
  color: var(--dark);
  font-family: var(--serif-font);
  margin: 0;
  text-transform: capitalize;
  font-weight: bold;
  padding: 0.5rem;
  background-color: rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }
`;
