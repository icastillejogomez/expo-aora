import React, { useCallback } from 'react'
import { router } from 'expo-router'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { AoraText, AoraView } from '@/ui'

const SignUpScreen = () => {
  const handlePressLogin = useCallback(() => {
    router.replace('sign-in')
  }, [])

  return (
    <AoraView container style={styles.root}>
      <AoraText>SignUp</AoraText>
      <TouchableOpacity onPress={handlePressLogin} activeOpacity={0.6}>
        <AoraText variant="caption" color="neutral" weight="500" style={styles.loginCaption}>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginCaption: {
    marginTop: 20,
  },
})
