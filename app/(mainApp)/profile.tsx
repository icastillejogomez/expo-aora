import React, { useCallback } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'

import { AoraIcon, AoraText, AoraView } from '@/ui'
import { useAuth, useThemePalette } from '@/hooks'

const ProfileScreen = () => {
  const [sessionToken, , { logout }] = useAuth()
  const palette = useThemePalette()

  const onPressLogout = useCallback(() => {
    logout().then(() => router.replace('sign-in'))
  }, [logout])

  console.log('profile', { sessionToken })

  return (
    <AoraView container style={styles.root}>
      <AoraView style={styles.header}>
        <TouchableOpacity onPress={onPressLogout} activeOpacity={0.6} style={styles.logoutIcon}>
          <AoraIcon name="logout" size={24} tintColor={palette.icon.logout} />
        </TouchableOpacity>
      </AoraView>
      <AoraView container style={styles.content}>
        <AoraView style={styles.profileContent}>
          <AoraText style={styles.nickname} weight="600" align="center">
            John Doe
          </AoraText>
        </AoraView>
      </AoraView>
    </AoraView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  root: {},
  header: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  logoutIcon: {
    marginLeft: 'auto',
    marginRight: 8,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 16,
  },
  profileContent: {
    maxWidth: 160,
    width: '100%',
    marginHorizontal: 'auto',
  },
  nickname: {
    fontSize: 18,
    lineHeight: 20,
  },
})
