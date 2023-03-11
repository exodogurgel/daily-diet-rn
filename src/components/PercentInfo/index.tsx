import { TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components/native'
import {
  Button,
  Container,
  OpenStatistics,
  PercentInfoTypeStyleProps,
  SubTitle,
  Title,
} from './styles'

type PercentProps = TouchableOpacityProps & {
  type?: PercentInfoTypeStyleProps
}

export function PercentInfo({ type = 'PRIMARY' }: PercentProps) {
  const { COLORS } = useTheme()

  return (
    <Container type={type}>
      <Button>
        <OpenStatistics
          color={type === 'PRIMARY' ? COLORS.GREEN_500 : COLORS.RED_500}
        />
      </Button>
      <Title>90,86%</Title>
      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  )
}
