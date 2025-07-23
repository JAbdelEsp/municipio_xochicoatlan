import type { ButtonProps } from "../types";

const Button = ({ children, onClick, disabled = false }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        padding: "10px 20px",
        backgroundColor: disabled ? "#ccc" : "var(--main-color-2)",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        fontFamily: "var(--sans-font)",
        fontWeight: "bold",
        cursor: disabled ? "not-allowed" : "pointer",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
