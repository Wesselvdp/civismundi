import React, { FC } from "react";
import styled from "styled-components";

import { Project } from "@interfaces";

// Components
import Section from "./Section";

import Carousel from "components/carousel/Carousel";

type T = {
  projects: Project[];
};

const Mast: FC<T> = ({ projects }) => {
  return (
    <MastSection className="mast">
      <Carousel items={projects} />
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
