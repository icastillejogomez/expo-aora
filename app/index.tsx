import { FC, useCallback } from 'react'
import { Alert, StyleSheet, TouchableOpacity } from 'react-native'
import { Redirect, router } from 'expo-router'
import { Image } from 'expo-image'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { AoraView, AoraText, AoraLogo } from '@/ui'
import { useAuth, useThemePalette } from '@/hooks'

const Index: FC = () => {
  const [sessionToken] = useAuth()
  const palette = useThemePalette()

  const handlePressClearData = useCallback(async () => {
    await AsyncStorage.clear()
    Alert.alert('Data cleared', 'Data cleared successfully')
  }, [])

  const handlePressContinueWithEmail = useCallback(() => {
    router.replace('sign-in')
  }, [])

  if (sessionToken) {
    return <Redirect href="home" />
  }

  return (
    <AoraView container withBackgroundColor style={styles.container}>
      <TouchableOpacity
        onPress={handlePressClearData}
        activeOpacity={0.6}
        style={styles.clearDataCaption}>
        <AoraText variant="caption" color="neutral">
          Clear data
        </AoraText>
      </TouchableOpacity>
      <AoraView style={styles.content}>
        <AoraLogo />
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
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'visible',
  },
  clearDataCaption: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  content: {
    maxWidth: 320,
    overflow: 'visible',
    alignItems: 'center',
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
