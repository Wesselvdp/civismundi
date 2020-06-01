import React, { FC } from "react";
import styled from "styled-components";

type T = any;

const SectionContainer: FC<T> = ({ children }) => {
  return <Container>{children}</Container>;
};
const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin-left: auto;
  margin-right: auto;
  /* border: 1px solid red; */
`;

export default SectionContainer;
