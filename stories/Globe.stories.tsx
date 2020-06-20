import * as React from "react";
import { storiesOf } from "@storybook/react";

// Components
// import Mast from "components/sections/Mast";
import Globe from "components/Globe";
import CustomLayerGlobe from "components/CustomLayerGlobe";

storiesOf("Globe", module).add("Labels", () => {
  return (
    <>
      <Globe />
    </>
  );
});

storiesOf("Globe", module).add("custom", () => {
  return (
    <>
      <CustomLayerGlobe />
    </>
  );
});
