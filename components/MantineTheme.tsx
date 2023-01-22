"use client";

import { MantineProvider, ColorScheme } from "@mantine/core";
import { Roboto } from "@next/font/google";
import { ReactNode, useState } from "react";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

interface MantineThemeProps {
  children: ReactNode;
}

export default function MantineTheme({ children }: MantineThemeProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  // const toggleColorScheme = (value?: ColorScheme) =>
  //   setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <MantineProvider
      theme={{ colorScheme, fontFamily: roboto.className }}
      withGlobalStyles
      withNormalizeCSS
    >
      {children}
    </MantineProvider>
  );
}
