import { TouchableOpacityProps } from 'react-native'
import { Container, SelectStyleProps, Status, Title } from './styles'

type ButtonSelectProps = TouchableOpacityProps &
  SelectStyleProps & {
    title: string
  }

export function ButtonSelect({
  status,
  isSelected,
  title,
  ...rest
}: ButtonSelectProps) {
  return (
    <Container status={status} isSelected={isSelected} {...rest}>
      <Status status={status} />
      <Title>{title}</Title>
    </Container>
  )
}
