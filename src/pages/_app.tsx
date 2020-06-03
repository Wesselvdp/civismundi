import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "src/theme";

import Layout from "components/structure/Layout";
import { project } from "@interfaces";
import "../styles/main.scss";
import "@brainhubeu/react-carousel/lib/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
