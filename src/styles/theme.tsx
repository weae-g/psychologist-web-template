import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface ThemeProps {
  children: ReactNode;
}

const theme = {
  colors: {
    primary: "",
    secondary: "",
  },
};

const Theme = ({ children }: ThemeProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
