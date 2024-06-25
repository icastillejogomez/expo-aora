import { FC, PropsWithChildren, useMemo } from 'react'
import { View, type ViewProps, type StyleProp, ViewStyle, StyleSheet } from 'react-native'

import { useThemePalette } from '@/hooks'

type AoraViewProps = ViewProps & {}

export const AoraView: FC<PropsWithChildren<AoraViewProps>> = ({
  children,
  style: rootStyle,
  ...rest
}) => {
  const palette = useThemePalette()
  const backgroundColor = useMemo(() => palette.background.primary, [palette])

  const style: StyleProp<ViewStyle> = [localStyles.container, { backgroundColor }, rootStyle]

  return (
    <View style={style} {...rest}>
      {children}
    </View>
  )
}

const localStyles = StyleSheet.create({
  container: {
    flex: 1, // By default, AoraView fills the entire container
  },
})
