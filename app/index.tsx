import { FC } from 'react'
import { StyleSheet } from 'react-native'
import { Link } from 'expo-router'

import { AoraView, AoraText } from '@/ui'

const Index: FC = () => {
  return (
    <AoraView style={styles.container}>
      <AoraText type="title">Aora!</AoraText>
      <Link href="/home" style={styles.link}>
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
  link: {
    marginTop: 15,
    color: 'blue',
  },
})
