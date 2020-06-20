// @ts-nocheck

import { FC, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import BackgroundVideo from "components/BackgroundVideo";
import { renderToString } from "react-dom/server";
import styled from "styled-components";

const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

const labelsTopOrientation = new Set([
  "Apollo 12",
  "Luna 2",
  "Luna 20",
  "Luna 21",
  "Luna 24",
  "LCROSS Probe",
]); // avoid label collisions

type T = any;
type Type = {
  d: Object;
};
const Thumbnail: FC<Type> = ({ d }) => {
  return (
    <StyledThumbnail>
      <BackgroundVideo />
    </StyledThumbnail>
  );
};

const GlobeComponent: FC<T> = () => {
  const [landingSites, setLandingSites] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/moon-landing-sites/moon_landings.json"
    )
      .then((r) => r.json())
      .then(setLandingSites);
  }, []);

  return (
    <Globe
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      // backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
      showGraticules={true}
      labelsData={landingSites}
      labelText="label"
      labelSize={1.7}
      labelDotRadius={1.4}
      labelLabel={(d) => renderToString(<Thumbnail d={d} />)}
      onLabelClick={(d) => window.open(d.url, "_blank")}
    />
  );
};

const StyledThumbnail = styled.div`
  width: 16em;
  height: 9em;
  position: relative;
`;

export default GlobeComponent;
