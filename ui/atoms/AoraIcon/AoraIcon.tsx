import React, { FC } from 'react'
import { StyleProp, StyleSheet } from 'react-native'
import { Image, ImageProps, ImageStyle } from 'expo-image'

type AoraIconProps = ImageProps & {
  name:
    | 'bookmark'
    | 'eye-hide'
    | 'eye'
    | 'home'
    | 'left-arrow'
    | 'logout'
    | 'menu'
    | 'play'
    | 'plus'
    | 'profile'
    | 'right-arrow'
    | 'search'
    | 'upload'
  size?: number
}

const icons = {
  bookmark: require(`../../../assets/icons/bookmark.png`),
  'eye-hide': require(`../../../assets/icons/eye-hide.png`),
  eye: require(`../../../assets/icons/eye.png`),
  home: require(`../../../assets/icons/home.png`),
  'left-arrow': require(`../../../assets/icons/left-arrow.png`),
  logout: require(`../../../assets/icons/logout.png`),
  menu: require(`../../../assets/icons/menu.png`),
  play: require(`../../../assets/icons/play.png`),
  plus: require(`../../../assets/icons/plus.png`),
  profile: require(`../../../assets/icons/profile.png`),
  'right-arrow': require(`../../../assets/icons/right-arrow.png`),
  search: require(`../../../assets/icons/search.png`),
  upload: require(`../../../assets/icons/upload.png`),
}

export const AoraIcon: FC<AoraIconProps> = ({ name, size, style: parentStyles, ...rest }) => {
  const style: StyleProp<ImageStyle> = [
    styles.icon,
    {
      ...(!size ? {} : { width: size, height: size }),
    },
    parentStyles,
  ]

  return <Image style={style} tintColor="black" source={icons[name]} {...rest} />
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
})
