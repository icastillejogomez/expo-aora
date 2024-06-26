import { lightPalette } from './lightPalette'

const primary400 = '#FFA300'
const primary600 = '#FF8C00'

export const darkPalette: typeof lightPalette = {
  text: {
    default: '#ECEDEE',
    neutral: '#CDCDE0',
    primary: primary600,
    primaryContrast: '#161622',
    secondary: '#687076',
    tintInactive: '#687076',
    link: '#007AFF',
  },
  primary: {
    400: primary400,
    600: primary600,
  },
  background: {
    primary: '#161622',
    tabBar: '#161622',
  },
  icon: {
    primary: '#9BA1A6',
  },
}
