import React from 'react'
import { StyleSheet } from 'react-native'

import { AoraText, AoraView } from '@/ui'

const HomeScreen = () => {
  return (
    <AoraView style={styles.root}>
      <AoraText>HomeScreen</AoraText>
    </AoraView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
