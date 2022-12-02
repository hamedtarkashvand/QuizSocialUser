import React, { useMemo, createContext, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material/";

import i18n from "../i18n";

interface IcolorModeContext {
  toggleColorMode: () => void;
  mode: "dark" | "light";
}

interface IColorModeContextProviderProps {
  children: React.ReactNode;
}

export const ColorModeContext = createContext<IcolorModeContext>({
  toggleColorMode: () => {},
  mode: "dark",
});

const ColorModeContextProvider = ({
  children,
}: IColorModeContextProviderProps) => {
  const [mode, setMode] = useState<"dark" | "light">("dark");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
      mode,
    }),
    [mode]
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        direction: i18n.dir(),
        typography: {
          fontFamily: `"IRANYekan", "Helvetica", "Arial", sans-serif`,
          fontSize: 14,
          fontWeightLight: 300,
          fontWeightRegular: 400,
          fontWeightMedium: 500,
        },
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <CssBaseline />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeContextProvider;
