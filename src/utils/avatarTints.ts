/**
 * Returns the avatar-circle background colour for dark/light theme.
 * Since categories are removed, we use a single default color scheme.
 */
export const avBg = (cat: string | undefined, dark: boolean): string =>
  dark ? "#222628" : "#E8EAED";

/**
 * Returns the avatar-circle text colour for dark/light theme.
 */
export const avTxt = (cat: string | undefined, dark: boolean): string =>
  dark ? "#9DA2B0" : "#4A4E5A";
