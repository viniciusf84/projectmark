import { styled } from "styled-components";
import { ButtonContainer } from "../Button/Button.styled";

export const PageHeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 42px 0 23px;
  height: 109px;

  .logo {
    width: 38px;
    height: 38px;
    margin-top: 35px;

    img {
      width: 100%;
      height: auto;
    }
  }

  ${ButtonContainer} {
    margin: 34px 0 0 0;
    width: 74px;
    height: 41px;
  }
`;

export const StepListContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 254px;
  margin: 21px 0 0 66px;
  gap: 42.5px;
`;
