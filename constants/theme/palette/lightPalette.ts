const lightPaletteText = {
  primary: '#11181C',
  tintInactive: '#6A6A6A',
}

export type AoraTextColor = keyof typeof lightPaletteText

export const lightPalette = {
  text: lightPaletteText,
  primary: {
    400: '#0a7ea4',
    600: '#0a7ea4',
  },
  background: {
    primary: '#fff',
    tabBar: '#fff',
  },
  icon: {
    primary: '#687076',
  },
}
