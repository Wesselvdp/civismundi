import React, { FC } from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

type T = any;

const Head: FC<T> = () => {
  return (
    <div>
      <Navigation />
    </div>
  );
};

const AnnouncementBar = styled.div`
  background-color: #fff;
  color: #000;
  text-transform: uppercase;
  padding: 15px;
  font-weight: bold;
`;

export default Head;
