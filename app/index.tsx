import { FC } from 'react'
import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

import { AoraView, AoraText } from '@/ui'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Index: FC = () => {
  return (
    <AoraView style={styles.container}>
      <AoraText>Index</AoraText>
      <Link href="/home">Go to home</Link>
    </AoraView>
  )
}
export default Index
