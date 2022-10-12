import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ReactNode } from "react";

const MaterialThemeProvider = ({ children }: { children: ReactNode }) => {
  const theme = createTheme({
    typography: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
    },
  });
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MaterialThemeProvider;
