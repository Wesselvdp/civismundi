import * as React from "react";
import { storiesOf } from "@storybook/react";

// Components
import Mast from "components/sections/Mast";

storiesOf("Section", module).add("Mast", () => {
  return (
    <>
      <Mast />
    </>
  );
});
