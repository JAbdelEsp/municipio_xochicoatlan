import { Link } from "react-router-dom";
import styled from "styled-components";

export const Section = styled("section")`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  cursor: none;
  .item:nth-child(2n) {
    grid-column-end: span 1;
    grid-column-start: auto;
    grid-row-end: span 7;
    background-color: var(--dark-opacity-3);
  }
  @media screen and (max-width: 460px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media screen and (max-width: 740px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Item = styled("div")`
  grid-template-rows: auto;
  border-radius: 5px;
  background-color: var(--dark-opacity-3);
  padding: 1em;
  grid-row-end: span 4;
`;

export const Grid = styled(Link)`
  height: 100%;
  display: grid;
  text-decoration: none;
  &:hover img {
    transform: scale(0.98);
    filter: grayscale(0%);
  }
`;

export const MinTitle = styled("h5")`
  text-align: center;
  font-size: 0.96rem;
  margin: 0.545rem 0;
  color: var(--dark);
`;

export const PictureContent = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(100%);
    transition: transform 0.3s ease, filter 0.3s ease;
  }
`;

export const Picture = styled("div")`
  width: 70%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled("div")`
  width: 95%;
  grid-auto-columns: auto;
  grid-row: 1/6;
  margin: 0 auto;
`;

export const TitleWrapper = styled("h3")`
  font-size: 1.6rem;
  padding: 10px 0 10px 0;
  font-family: var(--sans-font);
`;

export const MinPara = styled("p")`
  font-size: 1rem;
  font-family: var(--serif-font);
  text-align: justify;
`;

export const Sentinel = styled("div")`
  height: 40px;
`;

export const EndMessage = styled("p")`
  text-align: center;
  margin-top: 1rem;
  color: #666;
`;

export const Loader = styled("div")`
  text-align: center;
  margin: 1rem 0;
  font-size: 1rem;
  color: #999;
`;
