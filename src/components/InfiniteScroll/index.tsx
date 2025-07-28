import { useEffect, useRef, useState } from "react";
import {
  EndMessage,
  Grid,
  Item,
  Loader,
  MinTitle,
  Picture,
  PictureContent,
  Section,
  Sentinel,
} from "./styles";
import CustomCursor from "../../common/CustomCursor";

const InfiniteScroll = () => {
  const [items, setItems] = useState<string[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(false);

  // Cargar datos simulados
  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      await new Promise((res) => setTimeout(res, 800)); // Simula tiempo de carga
      const newItems = Array.from(
        { length: 10 },
        (_, i) => `Ítem ${(page - 1) * 10 + i + 1}`
      );
      setItems((prev) => [...prev, ...newItems]);
      setLoading(false);
      if (page >= 5) setHasMore(false);
    };

    fetchItems();
  }, [page]);

  // Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && hasMore && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 }
    );

    const current = sentinelRef.current;
    if (current) observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [hasMore, loading]);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX - 10, y: e.clientY - 10 });
    };

    window.addEventListener("mousemove", handleMove);
    window.scrollTo(0, 0);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  function limitString(content: string, max = 100) {
    return content.length > max ? content.slice(0, max) + "..." : content;
  }

  return (
    <>
      <CustomCursor x={cursorPos.x} y={cursorPos.y} visible={cursorVisible} />
      <Section
        onMouseEnter={() => setCursorVisible(true)}
        onMouseLeave={() => setCursorVisible(false)}
      >
        <Item className="item">
          <Grid to="/tramites">
            <PictureContent>
              <Picture>
                <img src="images/xochi_01.jpeg" alt="Xochicoatlan Hidalgo" />
              </Picture>
            </PictureContent>
            <MinTitle>
              {limitString(
                "El Presidente Municipal hace la entrega oficial de la obra en Xochicoatlan."
              )}
            </MinTitle>
          </Grid>
        </Item>
        <Item className="item">
          <Grid to="/tramites">
            <PictureContent>
              <Picture>
                <img src="images/xochi_01.jpeg" alt="Xochicoatlan Hidalgo" />
              </Picture>
            </PictureContent>
            <MinTitle>
              {limitString(
                "El Presidente Municipal hace la entrega oficial de la obra en Xochicoatlan."
              )}
            </MinTitle>
          </Grid>
        </Item>
        <Item className="item">
          <Grid to="/tramites">
            <PictureContent>
              <Picture>
                <img src="images/xochi_01.jpeg" alt="Xochicoatlan Hidalgo" />
              </Picture>
            </PictureContent>
            <MinTitle>
              {limitString(
                "El Presidente Municipal hace la entrega oficial de la obra en Xochicoatlan."
              )}
            </MinTitle>
          </Grid>
        </Item>
        {loading && <Loader>Cargando...</Loader>}
        {hasMore ? (
          <Sentinel ref={sentinelRef} />
        ) : (
          <EndMessage>No hay más elementos</EndMessage>
        )}
      </Section>
    </>
  );
};

export default InfiniteScroll;
