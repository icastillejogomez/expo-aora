import { StyleSheet } from 'react-native'
import { AoraView, AoraText } from '@/ui'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default function Index() {
  return (
    <AoraView style={styles.container}>
      <AoraText>Edit app/index.tsx to edit this screen.</AoraText>
    </AoraView>
  )
}
