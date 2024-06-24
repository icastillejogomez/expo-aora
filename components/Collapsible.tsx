import Ionicons from '@expo/vector-icons/Ionicons'
import { PropsWithChildren, useState } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'

import { useThemePalette } from '@/hooks'
import { AoraView, AoraText } from '@/ui'

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const palette = useThemePalette()

  return (
    <AoraView>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <Ionicons
          name={isOpen ? 'chevron-down' : 'chevron-forward-outline'}
          size={18}
          color={palette.icon.primary}
        />
        <AoraText type="title">{title}</AoraText>
      </TouchableOpacity>
      {isOpen && <AoraView style={styles.content}>{children}</AoraView>}
    </AoraView>
  )
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
  },
})
