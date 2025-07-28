import type { FullWidthPicProps } from "../types";

const FullWidthPic = ({ src, alt }: FullWidthPicProps) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      />
    </div>
  );
};

export default FullWidthPic;
