import { FC, PropsWithChildren, useMemo } from 'react'
import { View, type ViewProps, type StyleProp, ViewStyle, StyleSheet } from 'react-native'

import { useThemePalette } from '@/hooks'

type AoraViewProps = ViewProps & {
  container?: boolean
  withBackgroundColor?: boolean
}

export const AoraView: FC<PropsWithChildren<AoraViewProps>> = ({
  children,
  container,
  withBackgroundColor,
  style: rootStyle,
  ...rest
}) => {
  const palette = useThemePalette()
  const backgroundColor = useMemo(() => palette.background.primary, [palette])

  const style: StyleProp<ViewStyle> = [localStyles.root]
  if (withBackgroundColor) style.push({ backgroundColor })
  if (container) style.push(localStyles.container)
  style.push(rootStyle)

  return (
    <View style={style} {...rest}>
      {children}
    </View>
  )
}

const localStyles = StyleSheet.create({
  root: {},
  container: {
    flex: 1, // By default, AoraView fills the entire container
  },
})
