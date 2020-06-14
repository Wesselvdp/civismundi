import React, { FC } from "react";
import styled from "styled-components";

import { Project } from "@interfaces";

// Components
import Section from "./Section";
import Globe from "components/Globe";
import Carousel from "components/carousel/Carousel";

type T = {
  projects: Project[];
};

const Mast: FC<T> = ({ projects }) => {
  return (
    <MastSection className="mast">
      {/* <Carousel items={projects} /> */}
      <div style={{ width: "100vw", height: "100vh" }}>
        <Globe />
      </div>
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
