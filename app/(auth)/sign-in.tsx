import React, { useCallback, useState } from 'react'
import { router } from 'expo-router'
import { StyleSheet, TouchableOpacity, Alert } from 'react-native'

import { AoraText, AoraTextField, AoraView } from '@/ui'
import { useThemePalette, useUseCase } from '@/hooks'
import AoraLogo from '@/ui/atoms/AoraLogo/AoraLogo'
import { UserSignIn } from '@/context/users/application'

type InputValue = {
  value: string
  errorMessage?: string | null
}

const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const SignInScreen = () => {
  const signInUseCase = useUseCase<UserSignIn>('userSignIn')
  const palette = useThemePalette()
  const [email, setEmail] = useState<InputValue>({ value: '' })
  const [password, setPassword] = useState<InputValue>({ value: '' })

  const handleInputTextChange = useCallback(
    (input: string) => {
      const setter = input === 'email' ? setEmail : setPassword
      return (text: string) => setter({ value: text, errorMessage: null })
    },
    [setEmail, setPassword],
  )

  const isEmailInputValid = useCallback<() => boolean>(() => {
    if (!email.value || !emailRegex.test(email.value)) {
      setEmail((prev) => ({ ...prev, errorMessage: 'Invalid email' }))
      return false
    }

    return true
  }, [email, setEmail])

  const isPasswordInputValid = useCallback<() => boolean>(() => {
    if (!password.value) {
      setPassword((prev) => ({ ...prev, errorMessage: 'Password is required' }))
      return false
    }

    if (password.value.length < 8) {
      setPassword((prev) => ({
        ...prev,
        errorMessage: 'Password must be at least 8 characters long',
      }))
      return false
    }

    return true
  }, [password, setPassword])

  const isFormValid = useCallback<() => boolean>(() => {
    let isValid = true

    if (!isEmailInputValid()) isValid = false
    if (!isPasswordInputValid()) isValid = false

    return isValid
  }, [isEmailInputValid, isPasswordInputValid])

  const handlePressSignIn = useCallback(() => {
    if (isFormValid()) {
      signInUseCase
        .execute(email.value, password.value)
        .then(() => {
          router.replace('sign-up')
        })
        .catch((error) => {
          Alert.alert('Error signin in', error.message)
        })
    }
  }, [isFormValid, signInUseCase, email, password])

  return (
    <AoraView container style={styles.root}>
      <AoraLogo />

      <AoraView style={styles.form}>
        <AoraText style={styles.screenTitle}>Sign in</AoraText>

        <AoraTextField
          label="Email"
          value={email.value}
          onChangeText={handleInputTextChange('email')}
          error={!!email.errorMessage}
          errorMessage={email.errorMessage ?? undefined}
        />
        <AoraTextField
          label="Password"
          value={password.value}
          onChangeText={handleInputTextChange('password')}
          error={!!password.errorMessage}
          errorMessage={password.errorMessage ?? undefined}
        />

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
          onPress={handlePressSignIn}
          activeOpacity={0.6}>
          <AoraText align="center" color="primaryContrast" weight="600">
            Log in
          </AoraText>
        </TouchableOpacity>
      </AoraView>

      <AoraText variant="caption" color="neutral" weight="500" style={styles.signupCaption}>
        Don't have an account?{' '}
        <AoraText
          variant="caption"
          color="primary"
          weight="bold"
          onPress={() => router.replace('sign-up')}>
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
