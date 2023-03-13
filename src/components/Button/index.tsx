import { ReactNode } from 'react'
import { TouchableOpacityProps } from 'react-native'
import { ButtonTypeStyleProps, Container, Title } from './styles'

type ButtonProps = TouchableOpacityProps & {
  type?: ButtonTypeStyleProps
  icon?: ReactNode
  title: string
}

export function Button({
  title,
  type = 'PRIMARY',
  icon,
  ...rest
}: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      {icon && icon}
      <Title type={type}>{title}</Title>
    </Container>
  )
}
