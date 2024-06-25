import { FC } from 'react'
import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

import { AoraView, AoraText } from '@/ui'
import { useThemePalette } from '@/hooks'

const Index: FC = () => {
  const palette = useThemePalette()

  return (
    <AoraView style={styles.container}>
      <AoraText type="title" color="primary" style={styles.title}>
        Aora!
      </AoraText>
      <AoraText type="default" color="default" style={styles.description}>
        The best app in the world!
      </AoraText>
      <AoraText type="caption" color="neutral" style={styles.caption}>
        Join today and start building!
      </AoraText>
      <Link href="/home" style={[styles.link, { color: palette.text.link }]}>
        Go to home
      </Link>
    </AoraView>
  )
}
export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {},
  title: {
    marginBottom: 30,
  },
  description: {},
  caption: {
    marginBottom: 30,
  },
})
