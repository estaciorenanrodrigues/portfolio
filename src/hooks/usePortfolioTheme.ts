import { useEffect, useMemo, useState } from "react";
import { makeTheme } from "../theme";
function initialMode(): "dark" | "light" {
  try {
    return localStorage.getItem("portfolio-theme") === "light"
      ? "light"
      : "dark";
  } catch {
    return "dark";
  }
}

export default function usePortfolioTheme() {
  const [mode, setMode] = useState(initialMode);
  const theme = useMemo(() => makeTheme(mode), [mode]);
  useEffect(() => {
    try {
      localStorage.setItem("portfolio-theme", mode);
    } catch {
      /* Storage can be disabled. */
    }
    document.documentElement.style.colorScheme = mode;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme.palette.background.default);
  }, [mode, theme]);

  return {
    mode,
    theme,
    toggleTheme: () =>
      setMode((current) => (current === "dark" ? "light" : "dark")),
  };
}
