import React, { FC } from "react";
import styled from "styled-components";
import Link from "next/link";

type T = {
  project?: any;
};

const ProjectCardComponent: FC<T> = ({ project }) => {
  return (
    <Link href={`/projects/`}>
      <Card>
        <picture>
          <source
            media="(min-width:650px)"
            srcSet="https://picsum.photos/500/300"
          />
          <source
            media="(min-width:465px)"
            srcSet="https://picsum.photos/200/300"
          />
          <img src="https://picsum.photos/200/300" alt="Flowers" />
        </picture>

        <Content>
          <p className="heading">Video direction</p>
          <h2 className="title">Gully</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
            reprehenderit aut voluptatum odit expedita incidunt earum
          </p>
        </Content>
      </Card>
    </Link>
  );
};
const Content = styled.div``;
const Card = styled.div`
  max-width: 400px;
  margin-bottom: 1rem;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  cursor: pointer;

  img {
    max-width: 100%;
  }

  &:hover {
    .tiger {
      transform: translate(-5px, -5px);
    }
    .background:not(.tiger) {
      transform: translate(5px, 5px);
    }
    img {
      transform: scale(1.1);
    }
  }

  .type {
    text-transform: uppercase;
  }

  /* img {
    max-width: 100%;
  } */

  p {
    margin-bottom: 0.5em;
    margin-top: 0;
  }

  .title {
    margin-top: 0;
  }
`;

export default ProjectCardComponent;
