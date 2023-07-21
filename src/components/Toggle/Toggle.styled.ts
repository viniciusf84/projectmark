import styled from "styled-components";

export const ToggleContainer = styled.label`
  display: flex;
  align-items: center;

  cursor: pointer;
  font-size: 0.888rem;
  margin-left: 3px;
  min-width: 180px;
`;

export const ToggleButton = styled.div<{ color: string }>`
  height: 1.37406rem;
  width: 7.125rem;
  border-radius: 15px;
  background-color: ${({ color }) => `var(--${color}-200)`};
  display: inline-block;
  margin-left: 10px;
  position: relative;

  &:hover {
    outline: ${({ color }) => `1px solid var(--${color}-300)`};
    outline-offset: -1px;
  }

  &::after {
    content: "";
    background-color: ${({ color }) => `var(--${color})`};
    border-radius: 15px;
    display: block;
    height: 1.37406rem;
    position: relative;
    transition: 0.2s ease background-color, 0.3s ease-out transform;
    width: 2.625rem;
    z-index: 1;
  }
`;

export const ToggleInput = styled.input`
  display: none;

  &:checked + ${ToggleButton} {
    &:after {
      transform: translateX(200%);
    }
  }
`;
