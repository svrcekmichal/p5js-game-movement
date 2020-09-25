export interface Color {
  light: string,
  dark: string
}

interface ColorPalette {
  red: Color
  green: Color
  blue: Color
  orange: Color
}

export const palette: ColorPalette = {
  red: { light: "#deacac", dark: "#e84b4b" },
  green: { light: '#b8e3b4', dark: '#149a06'},
  blue: { light: '#99c0db', dark: '#127fcb'},
  orange: { light: '#d9c6b3', dark: '#e09b53'},
}