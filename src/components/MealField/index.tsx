import { TouchableOpacityProps } from 'react-native'
import { Container, Hour, Separator, Status, Title } from './styles'

type MealFieldProps = TouchableOpacityProps & {
  status: boolean
  meal: string
  time: string
}

export function MealField({ status, meal, time, ...props }: MealFieldProps) {
  return (
    <Container {...props}>
      <Hour>{time}</Hour>
      <Separator />
      <Title>{meal}</Title>
      <Status status={status} />
    </Container>
  )
}
