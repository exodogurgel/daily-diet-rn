import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import {
  CardSubtitle,
  CardTitle,
  Container,
  FooterCards,
  GoBack,
  Header,
  Icon,
  StatisticsCard,
  StatisticsContent,
  StatisticsTitle,
  Subtitle,
  Title,
} from './styles'

export function Statistics() {
  const { COLORS } = useTheme()

  const isDietOk = true

  const navigation = useNavigation()

  function previousPage() {
    navigation.goBack()
  }

  return (
    <Container>
      <Header isDietPositive={isDietOk}>
        <GoBack onPress={previousPage}>
          <Icon color={isDietOk ? COLORS.GREEN_500 : COLORS.RED_500} />
        </GoBack>

        <Title>90,86%</Title>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </Header>

      <StatisticsContent>
        <StatisticsTitle>Estatísticas gerais</StatisticsTitle>

        <StatisticsCard size="LG">
          <CardTitle>22</CardTitle>
          <CardSubtitle>
            melhor sequência de pratos dentro da dieta
          </CardSubtitle>
        </StatisticsCard>

        <StatisticsCard size="LG">
          <CardTitle>109</CardTitle>
          <CardSubtitle>refeições registradas</CardSubtitle>
        </StatisticsCard>

        <FooterCards>
          <StatisticsCard size="SM" bgColor="GREEN">
            <CardTitle>99</CardTitle>
            <CardSubtitle>refeições dentro da dieta</CardSubtitle>
          </StatisticsCard>

          <StatisticsCard size="SM" bgColor="RED">
            <CardTitle>10</CardTitle>
            <CardSubtitle>refeições fora da dieta</CardSubtitle>
          </StatisticsCard>
        </FooterCards>
      </StatisticsContent>
    </Container>
  )
}
