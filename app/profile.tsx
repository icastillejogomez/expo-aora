import { FC } from 'react'
import { StyleSheet } from 'react-native'

import { AoraView, AoraText } from '@/ui'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const Profile: FC = () => {
  return (
    <AoraView style={styles.container}>
      <AoraText>Profile</AoraText>
    </AoraView>
  )
}
export default Profile
