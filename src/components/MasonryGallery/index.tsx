import { Gallery, Item, Image, TitleWrapper } from "./styles";

const MasonryGallery = () => {
  return (
    <Gallery>
      <Item className="cell--1">
        <TitleWrapper>Comunidad</TitleWrapper>
        <Image src="/images/xochi_01.jpeg" alt="" />
      </Item>
      <Item className="cell--2">
        <TitleWrapper>Comunidad</TitleWrapper>
        <Image src="/images/xochi_01.jpeg" alt="" />
      </Item>
      <Item className="cell--3">
        <TitleWrapper>Comunidad</TitleWrapper>
        <Image src="/images/xochi_01.jpeg" alt="" />
      </Item>
      <Item className="cell--4">
        <TitleWrapper>Comunidad</TitleWrapper>
        <Image src="/images/xochi_01.jpeg" alt="" />
      </Item>
      <Item className="cell--5">
        <TitleWrapper>Comunidad</TitleWrapper>
        <Image src="/images/xochi_01.jpeg" alt="" />
      </Item>
      <Item className="cell--6">
        <TitleWrapper>Comunidad</TitleWrapper>
        <Image src="/images/xochi_01.jpeg" alt="" />
      </Item>
    </Gallery>
  );
};

export default MasonryGallery;
