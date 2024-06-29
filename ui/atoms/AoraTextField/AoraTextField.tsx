import { FC } from 'react'
import { StyleSheet, TextInput, TextInputProps } from 'react-native'

import { AoraText } from '@/ui/atoms/AoraText/AoraText'
import { AoraView } from '@/ui/atoms/AoraView/AoraView'
import { useThemePalette } from '@/hooks'

type AoraTextFieldProps = TextInputProps & {
  label: string
  errorMessage?: string
  helperText?: string
  error?: boolean
}

export const AoraTextField: FC<AoraTextFieldProps> = (props) => {
  const { label, error, errorMessage, helperText, ...inputProps } = props
  const palette = useThemePalette()

  return (
    <AoraView>
      <AoraText variant="default" color="default" weight="500" style={styles.inputLabel}>
        {label}
      </AoraText>
      <TextInput
        keyboardType="visible-password"
        placeholderTextColor={palette.input.placeholder}
        style={[
          styles.input,
          {
            backgroundColor: palette.input.background,
            borderColor: error ? palette.input.borderError : palette.input.border,
            color: error ? palette.text.error : palette.input.color,
          },
        ]}
        {...inputProps}
      />
      {((error && errorMessage) || helperText) && (
        <AoraText
          variant="caption"
          color="neutral"
          style={[styles.helperText, error && { color: palette.text.error }]}>
          {errorMessage ?? helperText}
        </AoraText>
      )}
    </AoraView>
  )
}

const styles = StyleSheet.create({
  inputLabel: {
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  helperText: {
    marginTop: 4,
  },
})
