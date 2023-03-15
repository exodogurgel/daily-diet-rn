import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { getAllMeals } from '@storage/meal/getAllMeals'
import { verifyIfDecimalNumber } from '@utils/verify-if-decimal-number'
import { useCallback, useState } from 'react'
import { MealDTO } from 'src/dtos/MealDTO'
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

type RouteParams = {
  percentInDiet: number
}

export function Statistics() {
  const { COLORS } = useTheme()
  const [meals, setMeals] = useState<MealDTO[]>([])

  const route = useRoute()
  const { percentInDiet } = route.params as RouteParams

  const isDietOk = percentInDiet >= 50

  const navigation = useNavigation()

  const infoMeals = meals.reduce(
    (acc, meals) => {
      if (meals.inDiet) {
        acc.mealsInDiet += 1
      } else {
        acc.mealsOutDiet += 1
      }

      acc.total += 1

      return acc
    },
    { mealsInDiet: 0, mealsOutDiet: 0, total: 0 },
  )

  function countMaxInDietSequence(meals: MealDTO[]) {
    let maxSequence = 0
    let currentSequence = 0

    for (let i = 0; i < meals.length; i++) {
      const currentItem = meals[i]

      if (currentItem.inDiet) {
        currentSequence++
        maxSequence = Math.max(maxSequence, currentSequence)
      } else {
        currentSequence = 0
      }
    }

    return maxSequence
  }

  function previousPage() {
    navigation.goBack()
  }

  async function fetchMeals() {
    try {
      const AllMeals = await getAllMeals()

      setMeals(AllMeals)
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    }, []),
  )

  return (
    <Container>
      <Header isDietPositive={isDietOk}>
        <GoBack onPress={previousPage}>
          <Icon color={isDietOk ? COLORS.GREEN_500 : COLORS.RED_500} />
        </GoBack>

        <Title>{verifyIfDecimalNumber(percentInDiet)}%</Title>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </Header>

      <StatisticsContent>
        <StatisticsTitle>Estatísticas gerais</StatisticsTitle>

        <StatisticsCard size="LG">
          <CardTitle>{countMaxInDietSequence(meals)}</CardTitle>
          <CardSubtitle>
            melhor sequência de pratos dentro da dieta
          </CardSubtitle>
        </StatisticsCard>

        <StatisticsCard size="LG">
          <CardTitle>{infoMeals.total}</CardTitle>
          <CardSubtitle>refeições registradas</CardSubtitle>
        </StatisticsCard>

        <FooterCards>
          <StatisticsCard size="SM" bgColor="GREEN">
            <CardTitle>{infoMeals.mealsInDiet}</CardTitle>
            <CardSubtitle>refeições dentro da dieta</CardSubtitle>
          </StatisticsCard>

          <StatisticsCard size="SM" bgColor="RED">
            <CardTitle>{infoMeals.mealsOutDiet}</CardTitle>
            <CardSubtitle>refeições fora da dieta</CardSubtitle>
          </StatisticsCard>
        </FooterCards>
      </StatisticsContent>
    </Container>
  )
}
