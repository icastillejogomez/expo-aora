import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import { Image, ImageProps } from 'expo-image'

export type AoraLogoProps = ImageProps & {}

const AoraLogo: FC<AoraLogoProps> = (props) => {
  return (
    <Image
      style={styles.logo}
      source={require('../../../assets/images/logo.png')}
      contentFit="contain"
      {...props}
    />
  )
}

export default AoraLogo

const styles = StyleSheet.create({
  logo: {
    width: 140,
    height: 60,
  },
})
