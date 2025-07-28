import type { HeaderProps } from "../types";
import { Content, LogoHeading, TextWrapper } from "./styled";

const Header = ({ title, description }: HeaderProps) => {
  return (
    <Content className="header-wrapper">
      <TextWrapper>
        <h1>{title}</h1>
        <p>{description}</p>
      </TextWrapper>
      <LogoHeading>
        <img src="/images/xochi_simbolo.png" alt="" />
      </LogoHeading>
    </Content>
  );
};

export default Header;
