import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import theme from "@/theme";

import Layout from "@components/structure/Layout";

import "../styles/main.scss";

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
