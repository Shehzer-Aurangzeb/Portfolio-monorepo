export type ThemePref = "light" | "system" | "dark";

export type ThemeOption = {
  id: ThemePref;
  label: string;
  glyph: string;
};

export const HEADER_CONTENT = {
  location: {
    label: "MONTRÉAL",
    timezone: "America/Montreal",
    locale: "en-CA",
  },
  themeOptions: [
    { id: "light", label: "Light", glyph: "☀" },
    { id: "system", label: "Auto", glyph: "◐" },
    { id: "dark", label: "Dark", glyph: "☾" },
  ] satisfies ThemeOption[],
} as const;
