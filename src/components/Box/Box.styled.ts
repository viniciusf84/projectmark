import styled from "styled-components";

export const BoxContainer = styled.div`
  border: 1px solid var(--gray-200);
  border-radius: 10px;
  cursor: pointer;
  margin: 0;
  padding: 1rem 0.88rem 1.06rem;
  position: relative;
  height: 15px;
  transition: 0.2s ease background-color;
  width: 208px;

  .triangle {
    opacity: 0;
    position: absolute;
    bottom: 0;
  }

  .triangle-container {
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 6px solid var(--white);
    z-index: 10;
    bottom: -5px;
    left: calc(50% - 8px);
  }

  .triangle-inner {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 7px solid var(--primary);
    z-index: 1;
    bottom: -7px;
    left: calc(50% - 10px);
  }

  &.selected {
    outline: 2px solid var(--primary);
    outline-offset: -2px;

    .triangle {
      opacity: 1;
      transition: 0.2s ease border, 0.2s ease opacity;
    }
  }

  &:hover {
    background-color: var(--background);

    .triangle-container {
      border-top: 6px solid var(--background);
    }
  }
`;
