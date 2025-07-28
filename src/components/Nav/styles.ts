import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavigationWrapper = styled("div")`
  z-index: 999;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  position: sticky;
  top: 0;
  .animation-image {
    transition: transform 0.3s ease-in-out;
    width: 62px;
  }
  @media screen and (max-width: 780px) {
    .navigation-menu {
      width: 100% !important;
    }
  }
`;

export const NavigationMain = styled("div")`
  z-index: 999;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  background-color: #ffffffe6;
  flex-direction: row;
  grid-template-rows: auto;
  grid-template-columns: 1fr 0.5fr 1fr;
  grid-auto-columns: 1fr;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5%;
  display: grid;
  position: fixed;
  inset: 0% 0% auto;
  img {
    width: 320px;
  }
  @media screen and (max-width: 640px) {
    img {
      width: 240px;
    }
  }
`;

export const HideSocial = styled("div")``;

export const SocialWrapperLeft = styled("div")`
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
`;

export const BurgerContain = styled("div")`
  grid-area: span 1 / span 1 / span 1 / span 1;
  justify-self: end;
`;

export const NavBurger = styled("div")`
  width: 1.777rem;
  height: 1.777rem;
  grid-column-gap: 6px;
  grid-row-gap: 6px;
  cursor: pointer;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const NavBurgerTop = styled("div")<{ open: boolean }>`
  width: 1.777rem;
  height: 2px;
  background-color: ${({ open }) => (open ? "var(--dark)" : "var(--dark)")};
  transform: ${({ open }) =>
    open
      ? "translate3d(0px, 7px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(135deg) skew(0deg, 0deg); transform-style: preserve-3d;"
      : ""};
  transition: all 400ms cubic-bezier(0.84, 0.06, 0.52, 1.8);
  animation-delay: 100ms;
`;

export const NavBurgerMid = styled("div")<{ open: boolean }>`
  width: 2.369rem;
  height: 2px;
  background-color: ${({ open }) => (open ? "var(--dark)" : "var(--dark)")};
  opacity: ${({ open }) => (open ? "0" : "1")};
  transition: all 400ms cubic-bezier(0.84, 0.06, 0.52, 1.8);
`;

export const NavBurgerBottom = styled("div")<{ open: boolean }>`
  width: 1.777rem;
  height: 2px;
  background-color: var(--dark);
  transition: all 400ms cubic-bezier(0.84, 0.06, 0.52, 1.8);
  background-color: ${({ open }) => (open ? "var(--dark)" : "var(--dark)")};
  transform: ${({ open }) =>
    open
      ? "translate3d(0px, -7px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-135deg) skew(0deg, 0deg); transform-style: preserve-3d;"
      : ""};
  animation-delay: 100ms;
`;

export const NavMenu = styled("div")<{ open: boolean }>`
  padding-top: 6.809rem;
  border-right: 1px solid #2121211a;
  background-color: rgba(255, 253, 255, 0.8);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  flex-flow: column;
  justify-content: space-between;
  align-items: stretch;
  height: 0%;
  width: 50%;
  position: absolute;
  top: 0;
  right: 0%;
  overflow: auto;
  transition: all 650ms cubic-bezier(0.02, 0.06, 0.3, 1.56);
  transition-delay: 100ms;
`;

export const NavLinksWrapper = styled("div")`
  flex-flow: column;
  display: flex;
`;

export const NavLink = styled(Link)`
  padding: 1rem;
  grid-column-gap: 0.563rem;
  grid-row-gap: 0.563rem;
  border-top: 1px solid #2121211a;
  color: #212121;
  text-transform: uppercase;
  justify-content: space-between;
  align-items: center;
  display: flex;
  text-decoration: none;
  &:hover {
    background-color: var(--main-color-1);
    color: var(--white);
  }
`;

export const NavLinkTitle = styled("div")`
  font-family: var(--font-family--primary-font);
  font-size: 3.157rem;
  letter-spacing: -0.0422em;
  font-weight: 900;
  line-height: 1;
  @media screen and (max-width: 780px) {
    font-size: calc(1em + 1vw);
  }
`;

export const NavLinkDescription = styled("div")`
  font-family: var(--font-family--fourth-font);
  color: var(--white);
  font-size: 0.75rem;
  text-align: right;
  flex: 1;
  font-weight: 500;
`;

export const NavFooter = styled("div")`
  padding: 1.333rem 1rem 1rem;
  grid-column-gap: 1.333rem;
  grid-row-gap: 1.333rem;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  display: grid;
  position: relative;
`;

export const NavFooterBlock = styled("div")`
  grid-column-gap: 1.333rem;
  grid-row-gap: 1.333rem;
  font-family: var(--font-family--fourth-font);
  font-size: 0.75rem;
  letter-spacing: 0.0238em;
  text-transform: uppercase;
  flex-flow: column;
  justify-content: space-between;
  align-items: flex-start;
  font-weight: 500;
  display: flex;
`;
