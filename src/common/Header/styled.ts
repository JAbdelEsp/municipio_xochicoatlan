import styled from "styled-components";

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
