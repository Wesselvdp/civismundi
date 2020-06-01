import { addDecorator, configure } from "@storybook/react";
import Theme from "../theme";
import { ThemeProvider } from "styled-components";

// automatically import all files ending in *.stories.tsx

addDecorator((story) => <ThemeProvider theme={Theme}>{story()}</ThemeProvider>);

configure(require.context("../stories", true, /\.stories\.tsx?$/), module);
