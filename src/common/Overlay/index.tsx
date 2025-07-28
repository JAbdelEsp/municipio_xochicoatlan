import type { OverlayProps } from "../types";
import { BlackOverlay } from "./styles";

const Overlay = ({ children }: OverlayProps) => {
  return <BlackOverlay className="overlay">{children}</BlackOverlay>;
};

export default Overlay;
