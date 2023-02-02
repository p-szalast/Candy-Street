import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../../common/styles/theme";
import MainHeader from "./MainHeader";

test("renders main heading", () => {
  render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <MainHeader />
      </BrowserRouter>
    </ThemeProvider>
  );
  const mainHeading = screen.getByText(/candy street/i);
  expect(mainHeading).toBeInTheDocument();
});
