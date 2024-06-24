const tintColorLight = '#0a7ea4'

const lightPaletteText = {
  primary: '#11181C',
}

export type AoraTextColor = keyof typeof lightPaletteText

export const lightPalette = {
  tint: tintColorLight,
  text: lightPaletteText,
  background: {
    primary: '#fff',
  },
  icon: {
    primary: '#687076',
  },
  tabIconDefault: '#687076',
  tabIconSelected: tintColorLight,
}
