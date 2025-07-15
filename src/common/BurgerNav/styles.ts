import styled from "styled-components";

export const HamburgerLines = styled("div")`
  display: block;
  height: 15px;
  width: 42px;
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .checkbox {
    position: absolute;
    display: block;
    height: 42px;
    width: 42px;
    top: 20px;
    left: 20px;
    z-index: 5;
    opacity: 0;
    cursor: pointer;
  }

  input[type="checkbox"]:checked ~ .menu-items {
    transform: translateX(0);
  }

  input[type="checkbox"]:checked ~ .line1 {
    width: 20px !important;
    transform: rotate(45deg);
  }

  input[type="checkbox"]:checked ~ .line2 {
    transform: scaleY(0);
  }

  input[type="checkbox"]:checked ~ .line3 {
    width: 20px !important;
    transform: rotate(-45deg);
  }

  .line {
    display: block;
    height: 4px;
    width: 100%;
    margin: 0 auto;
    border-radius: 10px;
    background: var(--white);
  }

  .line1 {
    width: 70%;
    margin: 0 auto;
    transform-origin: 0% 0%;
    transition: transform 0.4s ease-in-out;
  }

  .line2 {
    transition: transform 0.2s ease-in-out;
  }

  .line3 {
    width: 70%;
    margin: 0 auto;
    transform-origin: 0% 100%;
    transition: transform 0.4s ease-in-out;
  }
`;

export const Line = styled("span")`
  display: block;
  height: 1px;
  width: 100%;
  border-radius: 10px;
  background: var(--white);
  cursor: pointer;
`;

export const MenuItems = styled("div")``;
