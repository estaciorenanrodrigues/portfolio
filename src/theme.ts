import { createTheme } from "@mui/material/styles";
import { designTokens as tokens } from "./designTokens";

export const makeTheme = (mode: "light" | "dark") =>
  createTheme({
    spacing: tokens.spacingUnit,
    palette: {
      mode,
      primary: {
        main: mode === "dark" ? "#9bceac" : "#286443",
        contrastText: mode === "dark" ? "#111820" : "#ffffff",
      },
      background: {
        default: mode === "dark" ? "#111820" : "#f5f5ef",
        paper: mode === "dark" ? "#19232c" : "#ffffff",
      },
      text: {
        primary: mode === "dark" ? "#f1f2ec" : "#18241e",
        secondary: mode === "dark" ? "#acb7bc" : "#54625a",
      },
      divider: mode === "dark" ? "#2d3941" : "#d9dfd8",
    },
    typography: {
      fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif',
      h1: {
        fontSize: tokens.typography.hero,
        fontWeight: 750,
        letterSpacing: "-0.065em",
        lineHeight: 1.04,
      },
      h2: {
        fontSize: tokens.typography.section,
        fontWeight: 700,
        letterSpacing: "-0.045em",
        lineHeight: 1.12,
      },
      h3: { fontWeight: 650, letterSpacing: "-0.025em" },
      button: { textTransform: "none", fontWeight: 600 },
      body1: { lineHeight: 1.8 },
    },
    shape: { borderRadius: tokens.radius.card },
    components: {
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: { borderRadius: tokens.radius.control, padding: "12px 20px" },
        },
      },
      MuiCard: { styleOverrides: { root: { backgroundImage: "none" } } },
      MuiTypography: {
        styleOverrides: {
          root: {
            "&.eyebrow": {
              fontSize: tokens.typography.eyebrow,
              fontWeight: 650,
              letterSpacing: "0.15em",
            },
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          ":root": {
            "--color-interactive": mode === "dark" ? "#9bceac" : "#286443",
            "--color-focus": mode === "dark" ? "#9bceac" : "#286443",
            "--color-selection-background": "#9bceac",
            "--color-selection-text": "#111820",
            "--radius-small": `${tokens.radius.small}px`,
            "--radius-control": `${tokens.radius.control}px`,
            "--radius-card": `${tokens.radius.card}px`,
            "--motion-duration": `${tokens.motion.duration}ms`,
            "--motion-distance": `${tokens.motion.distance}px`,
            "--font-navigation": tokens.typography.navigation,
            "--header-height": `${tokens.layout.header}px`,
            "--header-mobile-height": `${tokens.layout.headerMobile}px`,
            "--section-space": `${tokens.layout.section}px`,
            "--section-mobile-space": `${tokens.layout.sectionMobile}px`,
            "--section-gap": `${tokens.layout.sectionGap}px`,
            "--grid-gap": `${tokens.layout.gridGap}px`,
          },
          html: { scrollBehavior: "smooth" },
          "::selection": { background: "#9bceac", color: "#111820" },
        },
      },
    },
  });
