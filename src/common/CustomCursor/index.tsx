import { useEffect, useState } from "react";
import { Cursor } from "./styles";

type Props = {
  x: number;
  y: number;
  visible: boolean;
};

const CustomCursor = ({ x, y, visible }: Props) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX - 40, y: e.clientY - 40 });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <Cursor x={x} y={y} visible={visible} />;
};

export default CustomCursor;
