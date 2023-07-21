// mocks
import { mockedSteps } from "../../utils";

// components
import Button from "../../components/Button";
import Step from "../Step";

// assets
import ProjectMarkLogo from "../../assets/projectmark.svg";

// styles
import { PageHeaderContainer, StepListContainer } from "./PageHeader.styled";

function PageHeader() {
  const displaySteps = () => {
    return mockedSteps.map((step) => (
      <Step label={step.label} active={step.active} stepNumber={step.step} />
    ));
  };

  return (
    <PageHeaderContainer>
      <div className="logo">
        <img src={ProjectMarkLogo} alt="Project Mark" />
      </div>

      <StepListContainer>{displaySteps()}</StepListContainer>

      <Button label="Next" onClick={() => {}} />
    </PageHeaderContainer>
  );
}

export default PageHeader;
