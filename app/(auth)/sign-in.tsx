import React, { useCallback } from 'react'
import { router } from 'expo-router'
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import { AoraText, AoraView } from '@/ui'
import { useThemePalette } from '@/hooks'
import AoraLogo from '@/ui/atoms/AoraLogo/AoraLogo'

const SignInScreen = () => {
  const palette = useThemePalette()

  const handlePressSignUp = useCallback(() => {
    router.replace('sign-up')
  }, [])

  return (
    <AoraView container style={styles.root}>
      <AoraLogo />

      <AoraView style={styles.form}>
        <AoraText style={styles.screenTitle}>Sign in</AoraText>

        <AoraView>
          <AoraText variant="default" color="default" weight="500" style={styles.inputLabel}>
            Email
          </AoraText>
          <TextInput placeholder="Email" keyboardType="email-address" style={styles.input} />
        </AoraView>

        <AoraView>
          <AoraText variant="default" color="default" weight="500" style={styles.inputLabel}>
            Password
          </AoraText>
          <TextInput placeholder="Email" keyboardType="visible-password" style={styles.input} />
        </AoraView>

        <TouchableOpacity>
          <AoraText
            variant="caption"
            color="default"
            weight="400"
            style={styles.forgotPasswordCaption}>
            Forgot your password?
          </AoraText>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.submitButton, { backgroundColor: palette.primary['600'] }]}
          onPress={() => router.replace('home')}
          activeOpacity={0.6}>
          <AoraText align="center" color="primaryContrast" weight="600">
            Log in
          </AoraText>
        </TouchableOpacity>
      </AoraView>

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
    marginTop: 40,
    marginHorizontal: 24,
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: '600',
  },
  form: {
    marginTop: 40,
    rowGap: 24,
  },
  inputLabel: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
    backgroundColor: '#232533',
    color: '#fff',
  },
  forgotPasswordCaption: {
    alignSelf: 'flex-end',
  },
  submitButton: {
    alignSelf: 'stretch',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  signupCaption: {
    marginTop: 20,
    textAlign: 'center',
  },
})
