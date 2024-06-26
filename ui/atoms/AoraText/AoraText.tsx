import { FC, PropsWithChildren } from 'react'
import { Text, type TextProps, type StyleProp, TextStyle, StyleSheet } from 'react-native'

import { useThemePalette } from '@/hooks'
import { AoraTextColor } from '@/constants'

export type AoraTextVariant = 'default' | 'title' | 'caption'
export type AoraTextAlign = 'left' | 'center' | 'right'
export type AoraTextWeight =
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'

type AoraTextProps = TextProps & {
  variant?: AoraTextVariant
  color?: AoraTextColor
  align?: AoraTextAlign
  weight?: AoraTextWeight
}

export const AoraText: FC<PropsWithChildren<AoraTextProps>> = ({
  children,
  variant,
  align,
  color,
  weight,
  style: rootStyle,
  ...rest
}) => {
  const palette = useThemePalette()

  const variantStyle = variantStyles[variant ?? 'default']
  const alignStyle = alignStyles[align ?? 'left']
  const weightStyle = weightStyles[weight ?? '400']

  const style: StyleProp<TextStyle> = [
    { color: palette.text[color ?? 'default'] },
    variantStyle,
    alignStyle,
    weightStyle,
    rootStyle,
  ]

  return (
    <Text style={style} {...rest}>
      {children}
    </Text>
  )
}

type AoraTextStyle = {
  [key in AoraTextVariant]: TextStyle
}

const variantStyles = StyleSheet.create<AoraTextStyle>({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    lineHeight: 42,
  },
  caption: {
    fontSize: 14,
    lineHeight: 20,
  },
})

type AoraTextAlignStyle = {
  [key in AoraTextAlign]: TextStyle
}

const alignStyles = StyleSheet.create<AoraTextAlignStyle>({
  left: {
    textAlign: 'left',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
})

type AoraTextWeightStyle = {
  [key in AoraTextWeight]: TextStyle
}

const weightStyles = StyleSheet.create<AoraTextWeightStyle>({
  bold: {
    fontWeight: 'bold',
  },
  '100': {
    fontWeight: 100,
  },
  '200': {
    fontWeight: 200,
  },
  '300': {
    fontWeight: 300,
  },
  '400': {
    fontWeight: 400,
  },
  '500': {
    fontWeight: 500,
  },
  '600': {
    fontWeight: 600,
  },
  '700': {
    fontWeight: 700,
  },
  '800': {
    fontWeight: 800,
  },
  '900': {
    fontWeight: 900,
  },
})
