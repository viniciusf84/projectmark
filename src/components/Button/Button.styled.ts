import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ArchivoBold, sans-serif;
  font-size: 0.875rem;
  background-color: var(--primary);
  border: none;
  border-radius: 34px;
  color: var(--white);
  cursor: pointer;
  padding: 13px 21px;
  position: relative;

  transition: 0.2s ease background-color;
`;
