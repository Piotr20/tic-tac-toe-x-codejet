export const colors: ColorPalette = {
  primary: {
    black: "#171717",
    blue: "#3D59E9",
    gray: "#EEEEEE",
    white: "#F5F5F5",
  },
  secondary: {
    darkYellow: "#938314",
    lightYellow: "#FEFF00",
    softYellow: "#FFF9B2",
    yellowGreen: "#938314",
    red: "#FC5B2A",
    green: "#3F9F1C",
  },
  base: {
    grey800: "#151515",
    grey700: "#555555",
    grey600: "#666666",
    grey500: "#999999",
    grey400: "#C1C1C1",
    grey300: "#DCDCDC",
    grey200: "#F2F2F2",
    grey100: "#FAFAFA",
    white: "#FFFFFF",
  },
  notification: {
    success800: "#104640",
    success500: "#347A5D",
    success300: "#8DD7A9",
    warning800: "#935D00",
    warning500: "#FFB700",
    warning300: "#FFEB99",
    danger800: "#780C28",
    danger500: "#D02828",
    danger300: "#F0907C",
    focus800: "#10388F",
    focus500: "#348DF7",
    focus300: "#84C6FC",
  },
};

type ColorPalette = {
  primary: ColorsPrimary;
  secondary: ColorsSecondary;
  base: ColorsBase;
  notification: ColorsNotofication;
};

type ColorsPrimary = {
  black: "#171717";
  blue: "#3D59E9";
  gray: "#EEEEEE";
  white: "#F5F5F5";
};
type ColorsSecondary = {
  darkYellow: "#938314";
  lightYellow: "#FEFF00";
  softYellow: "#FFF9B2";
  yellowGreen: "#938314";
  red: "#FC5B2A";
  green: "#3F9F1C";
};
type ColorsBase = {
  grey800: "#151515";
  grey700: "#555555";
  grey600: "#666666";
  grey500: "#999999";
  grey400: "#C1C1C1";
  grey300: "#DCDCDC";
  grey200: "#F2F2F2";
  grey100: "#FAFAFA";
  white: "#FFFFFF";
};
type ColorsNotofication = {
  success800: "#104640";
  success500: "#347A5D";
  success300: "#8DD7A9";
  warning800: "#935D00";
  warning500: "#FFB700";
  warning300: "#FFEB99";
  danger800: "#780C28";
  danger500: "#D02828";
  danger300: "#F0907C";
  focus800: "#10388F";
  focus500: "#348DF7";
  focus300: "#84C6FC";
};
