import { styled } from "styled-components";

export const CardContainer = styled.div<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor = "gray" }) =>
    `var(--${backgroundColor}-100)`};
  min-width: 222px;
  height: 558px;
  border-radius: 10px;
  position: relative;
  opacity: 0;
  visibility: hidden;

  transition: 0.2s ease-in visibility, 0.2s ease-in opacity,
    0.2s transform ease-in 0.2s;
  transform: translateY(100%);

  &.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  &:after {
    content: "";
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
    border-radius: 14px;
    bottom: 0;
    display: block;
    margin: 0 -10px;
    position: absolute;
    width: 242px;
    height: 209.381px;
  }
`;

export const CardTitle = styled.h2<{ color: string }>`
  color: ${({ color = "gray" }) => `var(--${color}-400)`};
  font-family: ArchivoBold, sans-serif;
  font-size: 0.875rem;
  margin: 0;
  padding: 0.92rem 0.88rem 0.85rem;
  text-transform: uppercase;
`;

export const CardBody = styled.div<{ color: string }>`
  border: ${({ color = "gray" }) => `1px solid var(--${color}-200)`};
  border-radius: 12px;
  display: block;
  margin: 9px auto 10px;
  height: 174.938px;
  width: 211.5px;
`;
