import { styled } from "styled-components";

export const CardContainer = styled.div<{ backgroundColor: string }>`
  background-color: ${({ backgroundColor = "gray" }) =>
    `var(--${backgroundColor}-100)`};
  border-radius: 14px 14px 0px 0px;
  margin-bottom: 2px;
  min-width: 222px;
  height: 558px;
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
    margin: 0;
    position: absolute;
    width: 222px;
    height: 209.381px;
  }
`;

export const CardTitle = styled.h2<{ color: string }>`
  color: ${({ color = "gray" }) => `var(--${color}-400)`};
  font-family: ArchivoBold, sans-serif;
  font-size: 0.875rem;
  height: 0.9815rem;
  margin: 0;
  padding: 14.44px 0 13.61px 14px;
  text-transform: uppercase;
`;

export const CardBody = styled.div<{ color: string }>`
  border: ${({ color = "gray" }) => `1px solid var(--${color}-200)`};
  border-radius: 12px;
  display: block;
  margin: 9.42px 5.25px 10px;
  height: 172.938px;
  width: 209.5px;
`;
