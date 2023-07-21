import styled from "styled-components";

export const StepContainer = styled.div`
  cursor: pointer;
  margin: 0;
  text-align: center;
  padding: 0;
  margin: -1px 0;
  position: relative;
  transition: 0.2s ease background-color;
`;

export const StepNumber = styled.span<{ active: boolean }>`
  background-color: ${(props) =>
    props.active ? "var(--gray-800)" : "var(--white)"};
  border-color: ${(props) =>
    props.active ? "var(--gray-800)" : "var(--gray-111)"};
  border-style: solid;
  border-width: 1px;
  border-radius: 17.5px;
  color: ${(props) => (props.active ? "var(--white)" : "var(--gray-700)")};
  font-weight: 400;
  font-size: 1.09375rem;
  margin: 0 auto 3px;
  height: 48px;
  width: 48px;
  letter-spacing: 0.35px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StepLabel = styled.p`
  font-family: ArchivoNarrow, sans-serif;
  font-size: 0.65625rem;
  margin: 0;
  line-height: normal;
`;
