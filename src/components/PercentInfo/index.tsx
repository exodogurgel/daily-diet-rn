import { TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'
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
  percentInDiet: number
}

export function PercentInfo({
  percentInDiet,
  type = 'PRIMARY',
  ...rest
}: PercentProps) {
  const { COLORS } = useTheme()
  const navigation = useNavigation()

  function goToStatistics() {
    navigation.navigate('statistics')
  }

  return (
    <Container type={type}>
      <Button onPress={goToStatistics} {...rest}>
        <OpenStatistics
          color={type === 'PRIMARY' ? COLORS.GREEN_500 : COLORS.RED_500}
        />
      </Button>
      <Title>{percentInDiet.toFixed(2)}%</Title>
      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  )
}
