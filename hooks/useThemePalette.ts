import { AoraTheme, AoraThemeMode } from '@/constants'
import { useTheme } from './useTheme'

export const useThemePalette = (mode?: AoraThemeMode): AoraTheme['palette'] => {
  const theme = useTheme(mode)
  return theme.palette
}
