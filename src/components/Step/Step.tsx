// styles
import { StepContainer, StepNumber, StepLabel } from "./Step.styled";

interface StepProps {
  label: string;
  stepNumber: number;
  active: boolean;
}

const Step: React.FC<StepProps> = ({ label, stepNumber, active }) => {
  return (
    <StepContainer>
      <StepNumber active={active}>{stepNumber}</StepNumber>

      <StepLabel>{label}</StepLabel>
    </StepContainer>
  );
};

export default Step;
