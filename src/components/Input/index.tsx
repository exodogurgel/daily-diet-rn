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
}

export function Input({
  size = 'DEFAULT',
  label,
  type = 'DEFAULT',
  ...props
}: InputProps) {
  return (
    <Container size={size}>
      <Label>{label}</Label>
      <InputContainer type={type} multiline {...props}></InputContainer>
    </Container>
  )
}
