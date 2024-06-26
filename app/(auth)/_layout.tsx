import React, { ReactNode } from 'react'
import { StyleSheet } from 'react-native'

import { AoraText, AoraView } from '@/ui'

type Props = {
  children: ReactNode
}

const AuthLayout = (props: Props) => {
  return (
    <AoraView>
      <AoraText>AuthLayout</AoraText>
      {props.children}
    </AoraView>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})
