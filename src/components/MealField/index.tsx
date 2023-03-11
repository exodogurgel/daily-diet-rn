import { TouchableOpacityProps } from 'react-native'
import {
  Container,
  Hour,
  Separator,
  Status,
  StatusTypeStyleProps,
  Title,
} from './styles'

type MealFieldProps = TouchableOpacityProps & {
  status: StatusTypeStyleProps
  meal: string
  time: string
}

export function MealField({ status, meal, time }: MealFieldProps) {
  return (
    <Container>
      <Hour>{time}</Hour>
      <Separator />
      <Title>{meal}</Title>
      <Status status={status} />
    </Container>
  )
}
