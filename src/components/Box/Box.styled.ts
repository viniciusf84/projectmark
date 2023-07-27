import styled from "styled-components";
import { CheckboxContainer } from "../Checkbox/Checkbox.styled";

export const BoxContainer = styled.div`
  position: relative;

  .children {
    position: relative;
    border: 1px solid var(--gray-200);
    border-radius: 10.5px;
    cursor: pointer;
    margin: 0;
    padding: 0;
    transition: 0.2s ease background-color;
    height: 47px;
    width: 208px;
    z-index: 100;
  }

  .icon-wrapper {
    opacity: 0;
    position: absolute;
    bottom: -9.5px;
    left: 0;
    z-index: 0;
  }

  &.selected {
    .children {
      border-color: transparent;
    }

    .icon-wrapper {
      opacity: 1;
      transition: 0.2s ease border, 0.2s ease opacity;
    }
  }

  &:not(.selected) {
    &:hover {
      .children {
        background-color: var(--background);
      }
    }
  }

  ${CheckboxContainer} {
    margin: 15px 0 0 14px;
  }
`;
