import React from "react";

// styles
import { CheckboxContainer, CheckboxInput, CheckMark } from "./Checkbox.styled";

interface CustomCheckboxProps {
  label: string;
  checked: boolean;
  handleChange: () => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  label,
  checked,
  handleChange,
}) => {
  return (
    <CheckboxContainer>
      <CheckboxInput
        type="checkbox"
        checked={checked}
        onChange={handleChange}
      />
      <CheckMark checked={checked} />
      <span className="label-span">{label}</span>
    </CheckboxContainer>
  );
};

export default CustomCheckbox;
