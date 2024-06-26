import React, { useCallback } from 'react'
import { router } from 'expo-router'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { AoraText, AoraView } from '@/ui'
import { useThemePalette } from '@/hooks'

const SignInScreen = () => {
  const palette = useThemePalette()

  const handlePressSignUp = useCallback(() => {
    router.replace('sign-up')
  }, [])

  return (
    <AoraView container style={styles.root}>
      <AoraText>Log in</AoraText>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: palette.primary['600'] }]}
        onPress={() => router.push('home')}
        activeOpacity={0.6}>
        <AoraText align="center" color="primaryContrast" weight="600">
          Log in
        </AoraText>
      </TouchableOpacity>

      <AoraText variant="caption" color="neutral" weight="500" style={styles.signupCaption}>
        Don't have an account?{' '}
        <AoraText variant="caption" color="primary" weight="bold" onPress={handlePressSignUp}>
          Sign up
        </AoraText>
      </AoraText>
    </AoraView>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupCaption: {
    marginTop: 20,
  },
  button: {
    alignSelf: 'stretch',
    marginTop: 30,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
})
