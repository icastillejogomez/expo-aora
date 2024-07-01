import React from 'react'
import { Tabs } from 'expo-router'

import { useThemePalette } from '@/hooks'
import { AoraIcon } from '@/ui'

const MainAppLayout = () => {
  const palette = useThemePalette()

  return (
    <>
      <Tabs
        sceneContainerStyle={{
          backgroundColor: palette.background.primary,
        }}
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: palette.background.tabBar,
            borderTopWidth: 1,
            borderTopColor: palette.text.tintInactive,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '500',
          },
          tabBarIconStyle: {},
          tabBarActiveTintColor: palette.primary['600'],
          tabBarInactiveTintColor: palette.text.tintInactive,
        }}>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarIcon: (props) => {
              return <AoraIcon name="home" tintColor={props.color} size={20} contentFit="contain" />
            },
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: (props) => {
              return (
                <AoraIcon name="profile" tintColor={props.color} size={20} contentFit="contain" />
              )
            },
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: 'Publish',
            tabBarIcon: (props) => {
              return <AoraIcon name="plus" tintColor={props.color} size={20} contentFit="contain" />
            },
            unmountOnBlur: true,
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: 'Saved',
            tabBarIcon: (props) => {
              return (
                <AoraIcon name="bookmark" tintColor={props.color} size={20} contentFit="contain" />
              )
            },
          }}
        />
      </Tabs>
    </>
  )
}

export default MainAppLayout
