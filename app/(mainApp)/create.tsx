import React from 'react'
import { StyleSheet } from 'react-native'

import { AoraText, AoraView } from '@/ui'

const CreateScreen = () => {
  return (
    <AoraView style={styles.root}>
      <AoraText>CreateScreen</AoraText>
    </AoraView>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
