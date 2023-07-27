// styles
import { BoxContainer } from "./Box.styled";

// assets
import IconBox from "./IconBox";

interface BoxProps {
  children: string | JSX.Element | JSX.Element[] | null;
  isSelected: boolean;
  onClick: () => void;
}

const Box: React.FC<BoxProps> = ({ children, isSelected = false, onClick }) => {
  return (
    <BoxContainer className={isSelected ? "selected" : ""} onClick={onClick}>
      <div className="children">{children}</div>
      <div className="icon-wrapper">
        <IconBox />
      </div>
    </BoxContainer>
  );
};

export default Box;
