import React from 'react'
import { StyleSheet } from 'react-native'

import { AoraText, AoraView } from '@/ui'

const BookmarkScreen = () => {
  return (
    <AoraView style={styles.root}>
      <AoraText>BookmarkScreen</AoraText>
    </AoraView>
  )
}

export default BookmarkScreen

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})
