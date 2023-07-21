import { styled } from "styled-components";

export const MainContainer = styled.div`
  background-color: var(--white);
  border-radius: 21px;
  margin: 0 10px;
  height: calc(100vh - 109px);
  overflow: hidden;
`;

export const PageTitle = styled.h1`
  font-family: ArchivoBold, sans-serif;
  color: var(--gray-800);
  font-size: 1.64063rem;
  line-height: 2.1375rem;
  text-align: center;
  padding: 42px 0;
  margin: 0;
`;

export const PlanContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  max-width: 869px;
  margin: 0 auto 4.38rem;
`;

export const ColumnContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 14px;
  max-width: 1900px;
  margin: 0 auto;
`;
