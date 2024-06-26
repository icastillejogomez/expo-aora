import { FC, useCallback } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import { Image } from 'expo-image'

import { AoraView, AoraText } from '@/ui'
import { useThemePalette } from '@/hooks'

const Index: FC = () => {
  const palette = useThemePalette()

  const handlePressContinueWithEmail = useCallback(() => {
    router.push('sign-in')
  }, [])

  return (
    <AoraView container withBackgroundColor style={styles.container}>
      <AoraView style={styles.content}>
        <AoraText type="title" color="primary" style={styles.title} weight="bold">
          Aora!
        </AoraText>
        <Image
          style={styles.hero}
          source={require('../assets/images/onboarding/hero.png')}
          contentFit="cover"
        />
        <AoraText type="default" color="default" style={styles.description}>
          Discover Endless Possibilities with Aora
        </AoraText>
        <AoraText color="neutral" style={styles.caption}>
          Where Creativity Meets Innovation: Embark on a Journey of Limitless Exploration with Aora
        </AoraText>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: palette.primary['600'] }]}
          onPress={handlePressContinueWithEmail}
          activeOpacity={0.6}>
          <AoraText align="center" color="primaryContrast" weight="600">
            Continue with Email
          </AoraText>
        </TouchableOpacity>
      </AoraView>
    </AoraView>
  )
}
export default Index

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    maxWidth: 320,
    alignItems: 'center',
  },
  title: {
    marginBottom: 30,
  },
  hero: {
    width: 320,
    height: 320,
  },
  description: {
    fontSize: 30,
    lineHeight: 36,
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: -1,
  },
  caption: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: '400',
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    alignSelf: 'stretch',
    marginTop: 30,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
})
