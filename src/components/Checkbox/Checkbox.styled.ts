import styled from "styled-components";

export const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;

  cursor: pointer;
  color: var(--gray-800);
  font-size: 0.875rem;
  min-width: 181px;
  letter-spacing: 0.0175rem;
`;

export const CheckboxInput = styled.input`
  display: none;
`;

export const CheckMark = styled.div<{ checked: boolean }>`
  width: 13px;
  height: 13px;
  border: ${(props) =>
    props.checked ? "2px solid var(--primary)" : "2px solid var(--gray-300)"};
  border-radius: 5px;
  background-color: ${(props) =>
    props.checked ? "var(--primary)" : "var(--white)"};
  display: inline-block;
  margin-right: 14px;
  position: relative;
  transition: 0.2s ease background-color;

  &:hover {
    background-color: ${(props) =>
      props.checked ? "var(--blue)" : "var(--gray-200)"};
  }

  &::after {
    content: "";
    width: 8px;
    height: 4px;
    border-top: 2px solid var(--white);
    border-right: 2px solid var(--white);
    transform: ${(props) => (props.checked ? "rotate(130deg)" : "rotate(0)")};
    position: absolute;
    top: 2px;
    left: 1.5px;
    opacity: ${(props) => (props.checked ? 1 : 0)};
  }
`;
