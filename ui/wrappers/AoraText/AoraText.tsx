import { FC, PropsWithChildren } from 'react'
import { Text, type TextProps, type StyleProp, TextStyle, StyleSheet } from 'react-native'

import { useThemePalette } from '@/hooks'
import { AoraTextColor } from '@/constants'

export type AoraTextType = 'default' | 'title'

type AoraTextProps = TextProps & {
  type?: AoraTextType
  color?: AoraTextColor
}

export const AoraText: FC<PropsWithChildren<AoraTextProps>> = ({
  children,
  type,
  color,
  style: rootStyle,
  ...rest
}) => {
  const palette = useThemePalette()

  const typedStyle = styles[type ?? 'default']
  const style: StyleProp<TextStyle> = [
    { color: palette.text[color ?? 'primary'] },
    typedStyle,
    rootStyle,
  ]

  return (
    <Text style={style} {...rest}>
      {children}
    </Text>
  )
}

type AoraTextStyle = {
  [key in AoraTextType]: TextStyle
}

const styles = StyleSheet.create<AoraTextStyle>({
  default: {
    fontSize: 14,
    lineHeight: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
})
