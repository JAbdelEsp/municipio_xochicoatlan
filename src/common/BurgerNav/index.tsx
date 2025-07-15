import { HamburgerLines, Line, MenuItems } from "./styles";

const BurgerNav = () => {
  return (
    <>
      <HamburgerLines>
        <input className="checkbox" type="checkbox" name="" id="" />
        <Line className="line1" />
        <Line className="line2" />
        <Line className="line3" />
      </HamburgerLines>
      <MenuItems></MenuItems>
    </>
  );
};

export default BurgerNav;
