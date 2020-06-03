import * as React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../src/components/ui/Button";

storiesOf("Button", module).add("with text", () => {
  return (
    <>
      <Button buttonStyle="solid" color="primary">
        Solid Primary
      </Button>
      <Button buttonStyle="solid" color="secondary">
        Solid Secondary
      </Button>
      <Button buttonStyle="outlined" color="primary">
        Outlined
      </Button>
    </>
  );
});
