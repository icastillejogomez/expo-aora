import React, { useCallback, useState } from 'react'
import { router } from 'expo-router'
import { StyleSheet, TouchableOpacity, Alert } from 'react-native'

import { AoraText, AoraTextField, AoraView, AoraLogo } from '@/ui'
import { useThemePalette, useUseCase } from '@/hooks'

type InputValue = {
  value: string
  errorMessage?: string | null
}

const SignUpScreen = () => {
  const palette = useThemePalette()
  const [username, setUsername] = useState<InputValue>({ value: '' })
  const [email, setEmail] = useState<InputValue>({ value: '' })
  const [password, setPassword] = useState<InputValue>({ value: '' })

  const handleInputTextChange = useCallback(
    (input: string) => {
      const setter = input === 'email' ? setEmail : input === 'username' ? setUsername : setPassword
      return (text: string) => setter({ value: text, errorMessage: null })
    },
    [setEmail, setPassword],
  )

  const handlePressLogin = useCallback(() => {
    router.replace('sign-in')
  }, [])

  const handlePressSignUp = useCallback(() => {
    Alert.alert('Sign up', 'This function is not available yet')
  }, [])

  return (
    <AoraView container style={styles.root}>
      <AoraLogo />

      <AoraView style={styles.form}>
        <AoraText style={styles.screenTitle}>Sign up</AoraText>

        <AoraTextField
          label="Nickname"
          placeholder="Type your nickname"
          value={username.value}
          onChangeText={handleInputTextChange('username')}
          error={!!email.errorMessage}
          errorMessage={email.errorMessage ?? undefined}
        />
        <AoraTextField
          label="Email"
          placeholder="johndoe@example.com"
          value={email.value}
          onChangeText={handleInputTextChange('email')}
          error={!!email.errorMessage}
          errorMessage={email.errorMessage ?? undefined}
        />
        <AoraTextField
          label="Password"
          placeholder="******"
          value={password.value}
          onChangeText={handleInputTextChange('password')}
          error={!!password.errorMessage}
          errorMessage={password.errorMessage ?? undefined}
        />

        <TouchableOpacity
          style={[styles.submitButton, { backgroundColor: palette.primary['600'] }]}
          onPress={handlePressSignUp}
          activeOpacity={0.6}>
          <AoraText align="center" color="primaryContrast" weight="600">
            Sign up
          </AoraText>
        </TouchableOpacity>
      </AoraView>

      <TouchableOpacity onPress={handlePressLogin} activeOpacity={0.6}>
        <AoraText
          variant="caption"
          color="neutral"
          weight="500"
          align="center"
          style={styles.loginCaption}>
          Already have an account?{' '}
          <AoraText variant="caption" color="primary" weight="bold">
            Log in
          </AoraText>
        </AoraText>
      </TouchableOpacity>
    </AoraView>
  )
}

export default SignUpScreen

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
  loginCaption: {
    marginTop: 20,
  },
})
