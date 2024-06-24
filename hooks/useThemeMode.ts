import { useColorScheme } from 'react-native'

export const useThemeMode = (): 'light' | 'dark' => {
  const theme = useColorScheme()

  return theme === 'dark' ? 'dark' : 'light'
}
