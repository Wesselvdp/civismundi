import React, { FC } from "react";
import styled from "styled-components";
import { Project } from "@/types/interfaces";

import PostCard from "./PostCard";

type T = {
  projects: [];
};

const ProductGrid: FC<T> = ({ projects: items }) => {
  return (
    <Grid>
      {/* {items.map((x: Project) => (
        <Item key={x.id}>
          <PostCard project={x} />
        </Item>
      ))} */}
      <Item>
        <PostCard project={{}} />
      </Item>
      <Item>
        <PostCard project={{}} />
      </Item>
      <Item>
        <PostCard project={{}} />
      </Item>
      <Item>
        <PostCard project={{}} />
      </Item>
    </Grid>
  );
};

export default ProductGrid;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  padding: 4%;
  flex-grow: 0;
  flex-basis: 25%;
`;
