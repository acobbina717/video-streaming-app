"use client";

import { MantineProvider, ColorScheme } from "@mantine/core";
import { Roboto_Slab } from "@next/font/google";
import { ReactNode, useState } from "react";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
});

interface MantineThemeProps {
  children: ReactNode;
}

export default function MantineTheme({ children }: MantineThemeProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("dark");
  // const toggleColorScheme = (value?: ColorScheme) =>
  //   setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <MantineProvider
      theme={{ colorScheme, fontFamily: robotoSlab.className }}
      withGlobalStyles
    >
      {children}
    </MantineProvider>
  );
}
