import React from 'react'
import { StyleSheet } from 'react-native'

import { AoraText, AoraView } from '@/ui'

const SignInScreen = () => {
  return (
    <AoraView container style={styles.root}>
      <AoraText>SignIn</AoraText>
    </AoraView>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
