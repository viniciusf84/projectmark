import React, { useState } from "react";

// styles
import { CardContainer, CardTitle, CardBody } from "./Card.styled";
import Toggle from "../Toggle";

interface CustomCardProps {
  color: string;
  title: string;
  className: string;
}

const Card: React.FC<CustomCardProps> = ({ color, title, className }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prevState) => !prevState);
  };
  return (
    <CardContainer backgroundColor={color} className={className}>
      <CardTitle color={color}>{title}</CardTitle>

      <Toggle checked={checked} handleChange={handleChange} color={color} />

      <CardBody color={color}> </CardBody>
    </CardContainer>
  );
};

export default Card;
