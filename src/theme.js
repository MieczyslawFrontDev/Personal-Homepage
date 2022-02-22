const colorNames = {
  white: "#FFFFFF",
  black: "#000000",
  scienceBlue: "#0066CC",
  bluemine: "#18587A",
  dodgerBlue: "#1E90FF",
  shipCove: "#788BBA",
  anakiwa: "#9DE5FF",
  tropicalBlue: "#C3DDF9",
  ironTransparent: "rgba(209, 213, 218, 0.3)",
  whiteLilac: "#F8F7FC",
  porcelain: "#EFF2F3",
  mercury: "#E5E5E5",
  slateGray: "#708090",
  doveGray: "#6D6C6C",
  tundora: "#4A4244",
  mineShaft: "#252525",
  mineShaftLighter: "#313131",
};

export const lightTheme = {
  colors: {
    primary: colorNames.scienceBlue,
    textPrimary: colorNames.slateGray,
    textSecondary: colorNames.mineShaft,
    background: colorNames.whiteLilac,
    headers: colorNames.mineShaft,
    buttonLink: {
      background: colorNames.scienceBlue,
      text: colorNames.white,
    },
    tile: {
        background: colorNames.white,
        border: colorNames.bluemine,
    },
    themeSwitch: {
       background: colorNames.mercury,
       icon: colorNames.white,
    },
  },
};

export const darkTheme = {
  colors: {
    primary: colorNames.dodgerBlue,
    textPrimary: colorNames.white,
    textSecondary: colorNames.white,
    background: colorNames.mineShaft,
    headers: colorNames.white,
    buttonLink: {
      background: colorNames.dodgerBlue,
      text: colorNames.white,
    },
    tile: {
        background: colorNames.mineShaftLighter,
        border: colorNames.bluemine,
    },
    themeSwitch: {
        background: colorNames.doveGray,
        icon: colorNames.mineShaft,
     },
  },
};
