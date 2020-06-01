import React, { FC } from "react";
import styled from "styled-components";

// Components
import Section from "./Section";
import BackgroundVideo from "@/components/BackgroundVideo";

type T = any;

const Mast: FC<T> = () => {
  return (
    <Section style={{ background: "#eee" }}>
      <Title>Mast</Title>
      <BackgroundVideo />
    </Section>
  );
};

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

export default Mast;
