// Shared foundations for Material UI and the CSS layout.
export const designTokens = {
  spacingUnit: 8,
  radius: { small: 6, control: 8, card: 12 },
  motion: { duration: 200, distance: 5 },
  typography: {
    hero: "clamp(3.25rem, 6.7vw, 6rem)",
    section: "clamp(2.4rem, 3.6vw, 3.2rem)",
    eyebrow: "0.6875rem",
    navigation: "0.875rem",
  },
  layout: {
    header: 88,
    headerMobile: 72,
    section: 100,
    sectionMobile: 64,
    sectionGap: 40,
    gridGap: 24,
  },
} as const;
