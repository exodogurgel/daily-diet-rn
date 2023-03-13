import { maskDate, maskTime } from '@utils/masks'
import { TextInputProps } from 'react-native'
import {
  Container,
  InputContainer,
  Label,
  TextInputTypeStyleProps,
} from './styles'

type InputProps = TextInputProps & {
  type?: TextInputTypeStyleProps
  label: string
  size?: 'SM' | 'DEFAULT'
  mask?: 'DATE' | 'TIME'
  inputMaskChange?: (text: string) => void
}

export function Input({
  size = 'DEFAULT',
  label,
  type = 'DEFAULT',
  inputMaskChange,
  mask,
  ...props
}: InputProps) {
  function handleChange(text: string) {
    if (mask === 'DATE' && inputMaskChange) {
      const value = maskDate(text)
      inputMaskChange(value)
    }

    if (mask === 'TIME' && inputMaskChange) {
      const value = maskTime(text)
      inputMaskChange(value)
    }
  }

  return (
    <Container size={size}>
      <Label>{label}</Label>
      <InputContainer
        onChangeText={(text) => handleChange(text)}
        type={type}
        {...props}
      ></InputContainer>
    </Container>
  )
}
