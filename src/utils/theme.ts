import { createTheme, DEFAULT_THEME, MantineColorsTuple, mergeMantineTheme, rem } from "@mantine/core";

const brand: MantineColorsTuple = [
  "#ebfefc",
  "#d8fcf8",
  "#abfaf2",
  "#7ff9eb",
  "#60f7e5",
  "#52f7e3",
  "#49f6e1",
  "#3cdbc7",
  "#2dc3b1",
  "#05a998",
];

const themeOveride = createTheme({
  spacing: { xs: rem(15), sm: rem(20), md: rem(25), lg: rem(30), xl: rem(40) },
  focusRing: "never",
  colors: {
    brand,
  },
  primaryColor: "brand",
});

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOveride);
