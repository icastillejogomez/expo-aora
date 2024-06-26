import { useCallback, useEffect, useState } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import * as Font from 'expo-font'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'

import { AoraView } from '@/ui'
import { useThemePalette } from '@/hooks'

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()

type ReadyState = {
  fontsLoaded: boolean
}

const initialReadyState: ReadyState = {
  fontsLoaded: false,
}

function isAppReady(readyState: ReadyState): boolean {
  return readyState.fontsLoaded
}

export default function RootLayout() {
  const palette = useThemePalette()
  const [readyState, setReadyState] = useState<ReadyState>(initialReadyState)

  const loadFonts = useCallback(async () => {
    await Font.loadAsync({
      'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
    })
    await new Promise((resolve) => setTimeout(resolve, 1000 * 2))
  }, [])

  const hideSplashScreen = useCallback(async () => {
    await SplashScreen.hideAsync()
  }, [])

  useEffect(() => {
    loadFonts().finally(() => {
      setReadyState((prev) => ({ ...prev, fontsLoaded: true }))
    })
  }, [loadFonts])

  if (!isAppReady(readyState)) {
    return null
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: palette.background.primary }}>
      <AoraView container onLayout={hideSplashScreen}>
        <Stack
          screenOptions={{
            title: 'Aora',
            headerShown: false,
            contentStyle: {
              backgroundColor: palette.background.primary,
            },
          }}>
          <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
        <StatusBar style="auto" />
      </AoraView>
    </SafeAreaView>
  )
}
