import { useEffect, useState } from "react";
import type { ScrollTextProps } from "../types";

function ScrollText({ text }: ScrollTextProps) {
  const [fontSize, setFontSize] = useState(2);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const nuevoTamaño = Math.min(2 + scrollY / 100, 8);
      setFontSize(nuevoTamaño);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <h1
      style={{
        padding: "2.5rem",
        color: "var(--dark)",
        fontFamily: "var(--sans-font)",
        fontSize: `${fontSize}rem`,
        textAlign: "center",
        transition: "font-size 0.9s all",
      }}
    >
      {text}
    </h1>
  );
}

export default ScrollText;
