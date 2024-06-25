const primary400 = '#0a7ea4'
const primary600 = '#0A7EA4'

const lightPaletteText = {
  default: '#11181C',
  neutral: '#687076',
  primary: primary600,
  secondary: '#687076',
  tintInactive: '#6A6A6A',
  link: '#007AFF',
}

export type AoraTextColor = keyof typeof lightPaletteText

export const lightPalette = {
  text: lightPaletteText,
  primary: {
    400: primary400,
    600: primary600,
  },
  background: {
    primary: '#fff',
    tabBar: '#fff',
  },
  icon: {
    primary: '#687076',
  },
}
