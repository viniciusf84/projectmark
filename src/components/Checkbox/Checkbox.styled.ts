import styled from "styled-components";

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;

  cursor: pointer;
  font-size: 0.875rem;
  letter-spacing: 0.0175rem;

  .label-span {
    color: var(--gray-800);
    position: relative;
    top: -1.5px;
    left: -1px;
  }
`;

export const CheckboxInput = styled.input`
  display: none;
`;

export const CheckMark = styled.div<{ checked: boolean }>`
  width: 13.5px;
  height: 12.75px;
  border: ${(props) =>
    props.checked ? "2px solid var(--primary)" : "2px solid var(--gray-300)"};
  border-radius: 5.25px;
  background-color: ${(props) =>
    props.checked ? "var(--primary)" : "var(--white)"};
  display: inline-block;
  margin-right: 13.5px;
  position: relative;
  left: -1px;
  transition: 0.2s ease background-color;

  &:hover {
    background-color: ${(props) =>
      props.checked ? "var(--blue)" : "var(--gray-200)"};
  }

  &::after {
    content: "";
    width: 9px;
    height: 10px;
    background-image: url("src/assets/icon_check.svg");
    position: absolute;
    top: 2px;
    left: 2px;
    opacity: ${(props) => (props.checked ? 1 : 0)};
  }
`;
