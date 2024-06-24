import { Stack } from 'expo-router'

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        title: 'Aora',
      }}
      initialRouteName="home">
      <Stack.Screen name="home" options={{ headerTitle: 'Home' }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
}
