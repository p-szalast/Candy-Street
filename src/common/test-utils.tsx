import React, { ReactElement, ReactNode } from "react";
import { render, RenderOptions } from "@testing-library/react";

import { theme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };

//other way:
//name e.g.: renderWithProviders() to avoid the same name as default but from another source

// const renderWithProviders= (
//   ui: ReactElement,
//   options?: Omit<RenderOptions, "wrapper">
// ) => render(ui, { wrapper: AllTheProviders, ...options });
