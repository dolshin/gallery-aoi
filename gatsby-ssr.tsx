import React from "react";
import { PageProps } from "gatsby";
import Layout from "./src/components/layouts/Layout";
import { DefaultTheme, ThemeProvider } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    main: "#849dcf",
    secondary: "#5984db",
  },
};

export const wrapRootElement = ({ element }: { element: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{element}</ThemeProvider>;
};

export const wrapPageElement = ({
  element,
  props,
}: {
  element: React.ReactNode;
  props: PageProps;
}) => {
  return <Layout {...props}>{element}</Layout>;
};
