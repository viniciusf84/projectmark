import styled from "styled-components";

export const StepContainer = styled.div`
  cursor: pointer;
  margin: 0;
  text-align: center;
  padding: 0;
  margin: 0;
  position: relative;
  transition: 0.2s ease background-color;
`;

export const StepNumber = styled.span<{ active: boolean }>`
  background-color: ${(props) =>
    props.active ? "var(--gray-800)" : "var(--white)"};
  border: ${(props) => (props.active ? "none" : "1px solid var(--gray-111)")};
  border-radius: 17.5px;
  color: ${(props) => (props.active ? "var(--white)" : "var(--gray-700)")};
  font-family: Archivo, sans-serif;
  font-size: 1.09375rem;
  font-weight: 400;
  margin: 0 auto 3px;
  /* margin: ${(props) => (props.active ? "0 auto 3px;" : "0 auto 2.6px;")}; */
  height: ${(props) => (props.active ? "50px" : "48px")};
  width: ${(props) => (props.active ? "50px" : "48px")};
  letter-spacing: 0.35px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StepLabel = styled.p`
  font-family: ArchivoNarrow, sans-serif;
  font-size: 0.65625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
  line-height: normal;
  text-align: center;
`;
