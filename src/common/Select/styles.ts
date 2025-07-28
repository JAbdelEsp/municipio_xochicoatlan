import styled from "styled-components";

export const Dropdown = styled("select")`
  width: 245px;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #212121;
  font-size: 16px;
  background-color: #fff;
  color: #333;
  margin-bottom: 1.5rem;
  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const Paragraph = styled("p")`
  margin-bottom: 8px;
  font-size: 16px;
  color: var(--dark);
  font-family: var(--serif-font);
  font-weight: bold;
  text-transform: uppercase;
`;
