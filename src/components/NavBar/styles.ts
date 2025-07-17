import styled from "styled-components";

export const Nav = styled("div")`
  z-index: 99;
  width: 100%;
  max-width: none;
  display: block;
  position: absolute;
  top: 0%;
  left: 0%;
  right: 0%;

  .show {
    transform: translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
    transform-style: preserve-3d;
    opacity: 1;
    display: flex;
  }
`;

export const NavMenu = styled("div")<{ open: boolean }>`
  padding-top: 4.209rem;
  border-right: 1px solid #2121211a;
  background-color: var(--white);
  flex-flow: column;
  justify-content: space-between;
  align-items: stretch;
  height: 100%;
  min-height: 100svh;
  display: none;
  position: absolute;
  top: 0;
  left: 0%;
  right: 0%;
  overflow: auto;
  transform: ${({ open }) =>
    open
      ? "translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);"
      : ""};
  transform-style: ${({ open }) => (open ? "preserve3d" : "")};
  opacity: ${({ open }) => (open ? "1" : "")};
  display: ${({ open }) => (open ? "flex" : "")};
`;

export const NavLinksWrapper = styled("div")`
  flex-flow: column;
  display: flex;
`;

export const NavLink = styled("div")`
  padding: 1rem;
  grid-column-gap: 0.563rem;
  grid-row-gap: 0.563rem;
  border-top: 1px solid #2121211a;
  color: #212121;
  text-transform: uppercase;
  justify-content: space-between;
  align-items: center;
  display: flex;
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

export const RowText = styled("div")`
  max-width: 17.713rem;
`;

export const NavFooterText = styled("div")``;

export const NavSocialsWrapper = styled("div")`
  grid-column-gap: 0.563rem;
  grid-row-gap: 0.563rem;
  justify-content: flex-end;
  align-items: flex-end;
  display: flex;
`;

export const NavSocialsLink = styled("a")`
  width: 1.777rem;
  height: 1.777rem;
  border: 1px solid #2121210d;
  background-color: #2121210d;
  border-radius: 100vw;
  flex: none;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const NavSocialLinkIcon = styled("div")`
  width: 0.75rem;
  height: 0.75rem;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const NavWrapper = styled("div")`
  z-index: 10;
  height: 4.209rem;
  padding: 1rem;
  background-color: var(--colors-project--transparent);
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
  position: relative;
`;

export const NavContainer = styled("div")`
  z-index: 1;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  display: flex;
  position: relative;
`;

export const NavLeft = styled("div")`
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  display: flex;
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
  height: 1px;
  background-color: var(--dark);
  transform: ${({ open }) =>
    open
      ? "translate3d(0px, 7px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(135deg) skew(0deg, 0deg); transform-style: preserve-3d;"
      : ""};
`;

export const NavBurgerMid = styled("div")<{ open: boolean }>`
  width: 2.369rem;
  height: 1px;
  background-color: var(--dark);
  opacity: ${({ open }) => (open ? "0" : "1")};
`;

export const NavBurgerBottom = styled("div")<{ open: boolean }>`
  width: 1.777rem;
  height: 1px;
  background-color: var(--dark);
  transform: ${({ open }) =>
    open
      ? "translate3d(0px, -7px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-135deg) skew(0deg, 0deg); transform-style: preserve-3d;"
      : ""};
`;

export const HeaderBreadCrum = styled("div")`
  z-index: 1;
  grid-column-gap: 0.563rem;
  grid-row-gap: 0.563rem;
  flex-flow: wrap;
  align-items: center;
  display: flex;
  position: relative;
`;

export const LogoLink = styled("div")`
  color: #212121;
  text-transform: uppercase;
  transition: letter-spacing 0.2s ease-out, color 0.2s ease-out;
  position: relative;
  overflow: hidden;
`;
