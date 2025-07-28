import { useState } from "react";
import { Link } from "react-router-dom";
import {
  BurgerContain,
  HideSocial,
  NavBurger,
  NavBurgerBottom,
  NavBurgerMid,
  NavBurgerTop,
  NavigationMain,
  NavigationWrapper,
  NavLink,
  NavLinkDescription,
  NavLinksWrapper,
  NavLinkTitle,
  NavMenu,
  SocialWrapperLeft,
} from "./styles";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavigationWrapper>
      <NavMenu
        open={isOpen}
        className={isOpen ? "navigation-menu show" : "navigation-menu"}
      >
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
      </NavMenu>
      <NavigationMain>
        <HideSocial>
          <SocialWrapperLeft>
            <Link to="">
              <img
                src="https://static.cdnlogo.com/logos/f/9/facebook.svg"
                loading="lazy"
                width="20"
                alt=""
                className="animation-image"
                style={{
                  transform:
                    "translate3d(-0.001px, 0.001px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  transformStyle: "preserve-3d",
                }}
              />
            </Link>
          </SocialWrapperLeft>
        </HideSocial>
        <Link to="/">
          <img src="images/logo-xochi.png" alt="" />
        </Link>
        <BurgerContain>
          <NavBurger onClick={() => setIsOpen(!isOpen)}>
            <NavBurgerTop open={isOpen} />
            <NavBurgerMid open={isOpen} />
            <NavBurgerBottom open={isOpen} />
          </NavBurger>
        </BurgerContain>
      </NavigationMain>
    </NavigationWrapper>
  );
};

export default Nav;
