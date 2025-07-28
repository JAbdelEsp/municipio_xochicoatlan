import styled from "styled-components";

export const Cursor = styled("div").withConfig({
  shouldForwardProp: (prop) => !["x", "y", "visible"].includes(prop),
})<{
  x: number;
  y: number;
  visible: boolean;
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  pointer-events: none;
  background-color: rgba(0, 0, 0, 0.85);
  border-radius: 50%;
  transform: translate(${({ x, y }) => `${x}px, ${y}px`});
  transition: transform 0.05s ease, opacity 0.6s;
  z-index: 9999;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
`;
