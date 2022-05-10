import React from "react";
import { Button, Typography } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import { string } from "yup";

interface PaletteColor {
  light?: string;
  main: string;
}

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

export default function form() {
  return (
    <ThemeProvider theme={theme}>
      <Typography color="primary">Hello</Typography>
    </ThemeProvider>
  );
}
