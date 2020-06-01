import React, { FC } from "react";
import styled from "styled-components";

// Components
import Section from "./Section";
import SectionContainer from "./SectionContainer";
import BackgroundVideo from "@/components/BackgroundVideo";

type T = any;

const Mast: FC<T> = () => {
  return (
    <MastSection className="mast">
      <SectionContainer>
        <h3 className="heading">Video director</h3>
        <h2 className="title">Stargazing</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
          reprehenderit aut voluptatum odit expedita incidunt earum
        </p>
      </SectionContainer>
      <BackgroundVideo />
    </MastSection>
  );
};

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

const MastSection = styled(Section)`
  min-height: 100vh;
`;

export default Mast;
