import { lightPalette } from './lightPalette'

const tintColorDark = '#fff'

export const darkPalette: typeof lightPalette = {
  tint: tintColorDark,
  text: {
    primary: '#ECEDEE',
  },
  background: {
    primary: '#151718',
  },
  icon: {
    primary: '#9BA1A6',
  },
  tabIconDefault: '#9BA1A6',
  tabIconSelected: tintColorDark,
}
