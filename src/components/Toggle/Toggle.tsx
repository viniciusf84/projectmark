import React from "react";

// styles
import { ToggleContainer, ToggleInput, ToggleButton } from "./Toggle.styled";

interface ToggleProps {
  checked: boolean;
  color: string;
  handleChange: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ checked, handleChange, color }) => {
  return (
    <ToggleContainer>
      <ToggleInput type="checkbox" checked={checked} onChange={handleChange} />
      <ToggleButton color={color} />
    </ToggleContainer>
  );
};

export default Toggle;
