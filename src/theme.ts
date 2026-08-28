import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#eef0f6",
      100: "#ced2e1",
      200: "#adb5cc",
      300: "#8c97bb",
      400: "#6b79a9",
      500: "#536090",
      600: "#404a6f",
      700: "#2e354f",
      800: "#1c202f",
      900: "#090b11",
    },
  },
});

export default theme;
