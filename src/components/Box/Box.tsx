// styles
import { BoxContainer } from "./Box.styled";

interface BoxProps {
  children: string | JSX.Element | JSX.Element[] | null;
  isSelected: boolean;
  onClick: () => void;
}

const Box: React.FC<BoxProps> = ({ children, isSelected = false, onClick }) => {
  return (
    <BoxContainer className={isSelected ? "selected" : ""} onClick={onClick}>
      {children}

      <div className="triangle triangle-container"></div>
      <div className="triangle triangle-inner"></div>
    </BoxContainer>
  );
};

export default Box;
