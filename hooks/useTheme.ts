import { AoraTheme, AoraThemeMode, aoraTheme } from '@/constants'
import { useThemeMode } from './useThemeMode'

export function useTheme(mode?: AoraThemeMode): AoraTheme {
  const themeMode = useThemeMode()
  return aoraTheme[mode ?? themeMode]
}
