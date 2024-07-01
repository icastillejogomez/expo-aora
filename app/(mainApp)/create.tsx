import React, { useCallback } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import { router } from 'expo-router'

import { AoraText, AoraView } from '@/ui'
import { useThemePalette } from '@/hooks'

const CreateScreen = () => {
  const palette = useThemePalette()

  const handlePressGoBack = useCallback(() => {
    router.canGoBack() && router.back()
  }, [])

  return (
    <AoraView container style={styles.root}>
      <AoraView style={styles.header}>
        <TouchableOpacity activeOpacity={0.6} onPress={handlePressGoBack} style={styles.backButton}>
          <AoraText>Cancel</AoraText>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={[styles.postButton, { backgroundColor: palette.primary[600] }]}>
          <AoraText
            variant="caption"
            weight="600"
            style={[{ color: palette.text.primaryContrast }]}>
            Post
          </AoraText>
        </TouchableOpacity>
      </AoraView>
      <KeyboardAvoidingView
        keyboardVerticalOffset={100} // this could be dependent on something else
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
          <AoraView container style={styles.content}>
            <TextInput
              autoFocus
              placeholderTextColor={palette.input.placeholder}
              autoCapitalize="sentences"
              multiline
              scrollEnabled={false}
              placeholder="What's happening?"
              style={[styles.input, { color: palette.text.default }]}
            />
          </AoraView>
        </ScrollView>
      </KeyboardAvoidingView>
    </AoraView>
  )
}

export default CreateScreen

const styles = StyleSheet.create({
  root: {},
  header: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  backButton: {},
  postButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 24,
  },
  input: {
    fontSize: 16,
    maxWidth: '100%',
    lineHeight: 24,
    flex: 1,
  },
})
