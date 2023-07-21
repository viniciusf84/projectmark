import { useCallback, useState } from "react";

// components
import Box from "../../components/Box";
import CustomCheckbox from "../../components/Checkbox";
import { mockedColumns, mockedPlans } from "../../utils";
import Card from "../../components/Card";
import {
  MainContainer,
  ColumnContainer,
  PageTitle,
  PlanContainer,
} from "./Main.styled";
import PageHeader from "../../components/PageHeader/PageHeader";

interface PlanProps {
  id: number;
  title: string;
  items: number[];
}

function Main() {
  const [selectedColumn, setSelectedColumn] = useState<PlanProps | null>(null);

  const handleSelectPlan = (plan: PlanProps) => {
    setSelectedColumn((prevState) => (prevState?.id === plan.id ? null : plan));
  };

  const displayPlans = () => {
    return mockedPlans.map((plan) => {
      const checked = selectedColumn?.id === plan.id;

      return (
        <Box
          key={plan.id}
          isSelected={checked}
          onClick={() => handleSelectPlan(plan)}
        >
          <CustomCheckbox
            label={plan.title}
            checked={checked}
            handleChange={() => handleSelectPlan(plan)}
          />
        </Box>
      );
    });
  };

  const displayColumns = useCallback(() => {
    return mockedColumns.map((column) => {
      return (
        <Card
          key={column.id}
          className={
            !selectedColumn || selectedColumn.items.indexOf(column.id) === -1
              ? ""
              : "show"
          }
          title={column.title}
          color={column.color}
        />
      );
    });
  }, [selectedColumn]);

  return (
    <>
      <PageHeader />

      <MainContainer>
        <PageTitle>
          Please select the type of sales pipeline that best fits to your
          company
        </PageTitle>

        {/* PLANS */}
        <PlanContainer>{displayPlans()}</PlanContainer>
        {/* \ PLANS */}

        {/* COLUMNS */}
        <ColumnContainer>{displayColumns()}</ColumnContainer>
        {/* \ COLUMNS */}
      </MainContainer>
    </>
  );
}

export default Main;
