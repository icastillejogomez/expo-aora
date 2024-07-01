import React, { useCallback } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'

import { AoraIcon, AoraText, AoraView } from '@/ui'
import { useAuth, useThemePalette } from '@/hooks'

const ProfileScreen = () => {
  const [session, , { logout }] = useAuth()
  const palette = useThemePalette()

  const onPressLogout = useCallback(() => {
    logout().then(() => router.replace('sign-in'))
  }, [logout])

  if (!session) return null

  return (
    <AoraView container style={styles.root}>
      <AoraView style={styles.header}>
        <TouchableOpacity onPress={onPressLogout} activeOpacity={0.6} style={styles.logoutIcon}>
          <AoraIcon name="logout" size={24} tintColor={palette.icon.logout} />
        </TouchableOpacity>
      </AoraView>
      <AoraView container style={styles.content}>
        <AoraView style={styles.profileContent}>
          <AoraView style={[styles.avatar, { backgroundColor: palette.icon.primary }]} />
          <AoraText style={styles.nickname} weight="600" align="center">
            {session.nickname}
          </AoraText>
          <AoraView style={styles.stats}>
            <AoraView style={styles.stat}>
              <AoraText style={styles.statValue}>19</AoraText>
              <AoraText style={styles.statLabel}>Posts</AoraText>
            </AoraView>
            <AoraView style={styles.stat}>
              <AoraText style={styles.statValue}>1.2k</AoraText>
              <AoraText style={styles.statLabel}>Views</AoraText>
            </AoraView>
          </AoraView>
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
    gap: 24,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 8,
    alignSelf: 'center',
  },
  nickname: {
    fontSize: 18,
    lineHeight: 20,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'center',
    columnGap: 32,
    alignItems: 'center',
  },
  stat: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  statLabel: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 21,
  },
  statValue: {
    fontWeight: '600',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: -2,
  },
})
