// @ts-nocheck

import React, { FC } from "react";
import dynamic from "next/dynamic";
import * as globe from "react-globe";

const markerOptions: globe.MarkerOptions = {
  activeScale: 1.02,
  enableGlow: false,
  enableTooltip: true,
  enterAnimationDuration: 2000,
  enterEasingFunction: ["Linear", "None"],
  exitAnimationDuration: 1000,
  exitEasingFunction: ["Cubic", "Out"],
  getTooltipContent: (marker) => "hey",
  glowCoefficient: 0,
  glowPower: 3,
  glowRadiusScale: 2,
  offsetRadiusScale: 0,
  radiusScaleRange: [0.2, globe.defaultFocusOptions.distanceRadiusScale - 1],
  type: globe.MarkerType.Bar,
};

const ReactGlobe = dynamic(() => import("react-globe"), { ssr: false });
// const defaults = dynamic(() => import("react-globe/dist"), {
//   ssr: false,
// });

const ToolTip: FC<any> = ({ data }) => {
  return <h3>hey</h3>;
};

type T = any;

const markers: globe.Marker[] = [
  {
    id: 1,
    city: "Singapore",
    color: "red",
    coordinates: [1.3521, 103.8198],
    value: 50,
  },
  {
    id: 2,
    city: "New York",
    color: "blue",
    coordinates: [40.73061, -73.935242],
    value: 25,
  },
  {
    id: 3,
    city: "San Francisco",
    color: "orange",
    coordinates: [37.773972, -122.431297],
    value: 35,
  },
  {
    id: 4,
    city: "Beijing",
    color: "gold",
    coordinates: [39.9042, 116.4074],
    value: 135,
  },
  {
    id: 5,
    city: "London",
    color: "green",
    coordinates: [51.5074, 0.1278],
    value: 80,
  },
  {
    id: 6,
    city: "Los Angeles",
    color: "gold",
    coordinates: [29.7604, -95.3698],
    value: 54,
  },
];

const Globe: FC<T> = () => {
  return <ReactGlobe />;
};

export default Globe;
