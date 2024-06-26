import { FC, useCallback } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import { Image } from 'expo-image'

import { AoraView, AoraText } from '@/ui'
import { useThemePalette } from '@/hooks'

const Index: FC = () => {
  const palette = useThemePalette()

  const handlePressContinueWithEmail = useCallback(() => {
    router.replace('sign-in')
  }, [])

  return (
    <AoraView container withBackgroundColor style={styles.container}>
      <AoraView style={styles.content}>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo.png')}
          contentFit="contain"
        />
        <Image
          style={styles.hero}
          source={require('../assets/images/onboarding/hero.png')}
          contentFit="contain"
        />
        <AoraView style={styles.descriptionWrapper}>
          <AoraText variant="default" color="default" style={styles.description}>
            Discover Endless Possibilities with{' '}
            <AoraText color="primary" weight="bold" style={styles.description}>
              Aora
            </AoraText>
          </AoraText>
          <Image
            style={styles.pathImage}
            source={require('../assets/images/onboarding/path.png')}
            contentFit="contain"
          />
        </AoraView>
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
    overflow: 'visible',
  },
  content: {
    maxWidth: 320,
    overflow: 'visible',
    alignItems: 'center',
  },
  logo: {
    width: 140,
    height: 60,
  },
  hero: {
    width: 340,
    height: 340,
  },
  descriptionWrapper: {
    position: 'relative',
  },
  description: {
    fontSize: 30,
    lineHeight: 36,
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: -1,
  },
  pathImage: {
    position: 'absolute',
    width: 70,
    height: 20,
    right: -5,
    bottom: -7,
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
