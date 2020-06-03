import React, { FC } from "react";
import { Project } from "@interfaces";
import styled from "styled-components";

type T = {
  data: Project;
};
import BackgroundVideo from "components/BackgroundVideo";

const CarouselSlide: FC<T> = ({ data }) => {
  return (
    <Slide>
      <div>
        <h3 className="heading">Video director</h3>
        <h2 className="title">{data.title}</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
          reprehenderit aut voluptatum odit expedita incidunt earum
        </p>
      </div>
      <BackgroundVideo />
    </Slide>
  );
};

const Slide = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export default CarouselSlide;
