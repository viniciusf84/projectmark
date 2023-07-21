import { styled } from "styled-components";

export const PageHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 42px 0 23px;
  height: 109px;

  .logo {
    height: 40px;
  }

  button {
    margin-top: 16px;
  }
`;

export const StepListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 252px;
  margin-left: 65px;
`;
