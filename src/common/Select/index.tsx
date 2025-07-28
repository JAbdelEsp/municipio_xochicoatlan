import { Dropdown, Paragraph } from "./styles";

const Select = () => {
  return (
    <div className="select-wrapper">
      <Paragraph>buscar por área</Paragraph>
      <Dropdown>
        <option value="">Selecciona área...</option>
        <option value="">Secretaría General Municipal</option>
        <option value="">Tesorería</option>
      </Dropdown>
    </div>
  );
};

export default Select;
