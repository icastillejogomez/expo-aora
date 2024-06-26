import React from 'react'
import { Stack } from 'expo-router'

import { useThemePalette } from '@/hooks'

type Props = {}

const AuthLayout = (props: Props) => {
  const palette = useThemePalette()

  return (
    <>
      <Stack
        screenOptions={{
          contentStyle: {
            backgroundColor: palette.background.primary,
          },
        }}>
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
      </Stack>
    </>
  )
}

export default AuthLayout
