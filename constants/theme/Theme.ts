import { LightTheme } from './LightTheme'
import { DarkTheme } from './DarkTheme'

export type AoraThemeMode = keyof typeof aoraTheme

export const aoraTheme = {
  light: LightTheme,
  dark: DarkTheme,
} as const

export type AoraTheme = (typeof aoraTheme)['light']
