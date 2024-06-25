import React from 'react'
import { StyleSheet } from 'react-native'

import { AoraText, AoraView } from '@/ui'

const ProfileScreen = () => {
  return (
    <AoraView style={styles.root}>
      <AoraText>ProfileScreen</AoraText>
    </AoraView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
