import styled from "styled-components";

export const MainFooter = styled("footer")`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 1fr);
  width: 100%;
  background-color: var(--main-color-blue);
  padding: 20px 0;
  position: relative;
  z-index: 9;
`;

export const Container = styled("div")`
  width: 100%;
  grid-rows: 1/3;
  place-items: center;
  align-items: center;
  p {
    color: var(--white);
    font-family: var(--sans-font);
    font-size: 0.9rem;
    text-align: center;
    margin: 0;
  }
`;

export const LogoHeading = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100px; /* Adjust as needed */
    height: auto; /* Maintain aspect ratio */
  }
`;

export const NavHeading = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  ul {
    list-style: none;
    display: flex;
    gap: 20px;
    padding: 0;
    margin: 0;
    li {
      a {
        color: var(--white);
        text-decoration: none;
        font-family: var(--sans-font);
        font-weight: 800;
        font-size: 0.9rem;
        &:hover {
          text-decoration: underline;
        }
      }
      &:not(:last-child) {
        margin-right: 20px;
      }
      &:last-child {
        margin-right: 0;
        text-transform: uppercase;
      }
    }
  }
`;

export const HorizontalDivider = styled("hr")`
  width: 80%;
  border: 0;
  height: 1px;
  background-color: var(--white);
  opacity: 30%;
  margin: 20px auto;
`;

export const CopyRight = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  p {
    color: var(--white);
    font-family: var(--sans-font);
    font-size: 0.8rem;
    text-align: center;
    margin: 0;
  }
`;
