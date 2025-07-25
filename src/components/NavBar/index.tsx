import { useState } from "react";
import {
  HeaderBreadCrum,
  LogoHeading,
  LogoLink,
  Nav,
  NavBurger,
  NavBurgerBottom,
  NavBurgerMid,
  NavBurgerTop,
  NavContainer,
  NavFooter,
  NavFooterBlock,
  NavFooterText,
  NavLeft,
  NavLink,
  NavLinkDescription,
  NavLinksWrapper,
  NavLinkTitle,
  NavMenu,
  NavSocialLinkIcon,
  NavSocialsLink,
  NavSocialsWrapper,
  NavWrapper,
  RowText,
} from "./styles";
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <NavMenu open={isOpen} className={isOpen ? "show" : ""}>
        <NavLinksWrapper>
          <NavLink to="/">
            <NavLinkTitle>Inicio</NavLinkTitle>
            <NavLinkDescription>
              Bienvenidos al Portal de Xochicoatlán
            </NavLinkDescription>
          </NavLink>
          <NavLink to="/gobierno">
            <NavLinkTitle>Gobierno 2024 - 2027</NavLinkTitle>
            <NavLinkDescription>Conoce a tu gobierno</NavLinkDescription>
          </NavLink>
          <NavLink to="/planeacion">
            <NavLinkTitle>Planeación</NavLinkTitle>
            <NavLinkDescription>Visitar área</NavLinkDescription>
          </NavLink>
          <NavLink to="/transparencia">
            <NavLinkTitle>Transparencia</NavLinkTitle>
            <NavLinkDescription>Visitar área</NavLinkDescription>
          </NavLink>
          <NavLink to="/tramites">
            <NavLinkTitle>Trámites y Servicios</NavLinkTitle>
            <NavLinkDescription>
              Portal de trámites y servicios en línea
            </NavLinkDescription>
          </NavLink>
          <NavLink to="/tesoreria">
            <NavLinkTitle>Tesorería</NavLinkTitle>
            <NavLinkDescription>Visita área</NavLinkDescription>
          </NavLink>
          <NavLink to="/noticias">
            <NavLinkTitle>Noticias</NavLinkTitle>
            <NavLinkDescription>Visita área</NavLinkDescription>
          </NavLink>
          <NavLink to="municipio">
            <NavLinkTitle>Tu Municipio</NavLinkTitle>
            <NavLinkDescription>Visita área</NavLinkDescription>
          </NavLink>
        </NavLinksWrapper>
        <NavFooter>
          <NavFooterBlock>
            <RowText>
              <NavFooterText>Xochi</NavFooterText>
            </RowText>
          </NavFooterBlock>
          <NavSocialsWrapper>
            <NavSocialsLink>
              <NavSocialLinkIcon></NavSocialLinkIcon>
            </NavSocialsLink>
          </NavSocialsWrapper>
        </NavFooter>
      </NavMenu>
      <NavWrapper>
        <NavContainer>
          <NavLeft>
            <NavBurger onClick={() => setIsOpen(!isOpen)}>
              <NavBurgerTop open={isOpen} />
              <NavBurgerMid open={isOpen} />
              <NavBurgerBottom open={isOpen} />
            </NavBurger>
            <HeaderBreadCrum>
              <LogoLink>
                <LogoHeading>
                  <img src="/images/logo-xochi.png" alt="" />
                </LogoHeading>
              </LogoLink>
            </HeaderBreadCrum>
          </NavLeft>
        </NavContainer>
      </NavWrapper>
    </Nav>
  );
};

export default NavBar;
