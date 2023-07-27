import { styled } from "styled-components";

export const MainContainer = styled.div`
  background-color: var(--white);
  border-radius: 21px;
  margin: 0 10px;
  overflow: hidden;
`;

export const PageTitle = styled.h1`
  font-family: ArchivoBold, sans-serif;
  color: var(--gray-800);
  font-size: 1.64063rem;
  font-weight: normal;
  line-height: 2.1375rem;
  text-align: center;
  padding: 43px 0 42px;
  margin: 0 0 0 -0.5px;
  /* position: relative;
  top: -1px;
  left: 0px; */
`;

export const PlanContainer = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  max-width: 870px;
  margin: 0 auto 4.38rem;
`;

export const ColumnContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 14px;
  max-width: 1900px;
  margin: 0 auto;
`;
