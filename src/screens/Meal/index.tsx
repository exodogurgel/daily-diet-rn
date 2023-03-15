import { useCallback, useState } from 'react'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'

import { MealDTO } from 'src/dtos/MealDTO'

import { getAllMeals } from '@storage/meal/getAllMeals'

import { Button } from '@components/Button'
import { Loading } from '@components/Loading'
import { SectionHeader } from '@components/SectionHeader'

import {
  Container,
  Content,
  DateAndTime,
  Description,
  Footer,
  MealStatus,
  Status,
  Subtitle,
  Title,
  TitleStatus,
} from './styles'

type RouteParams = {
  id: string
}

export function Meal() {
  const [meal, setMeal] = useState<MealDTO>()

  const route = useRoute()
  const { id } = route.params as RouteParams

  const navigation = useNavigation()

  function handleGoToEditMeal() {
    navigation.navigate('new', { id })
  }

  useFocusEffect(
    useCallback(() => {
      async function fetchMeal() {
        try {
          const meals = await getAllMeals()

          const meal = meals.find((meal) => meal.id === id)

          setMeal(meal)
        } catch (error) {
          console.log(error)
        }
      }

      fetchMeal()
    }, [id]),
  )

  return (
    <Container>
      <SectionHeader
        title="Refeição"
        bgColor={meal?.inDiet ? 'GREEN' : 'RED'}
      />

      {meal ? (
        <Content>
          <Title>{meal.name}</Title>
          <Description>{meal.description}</Description>

          <Subtitle>Data e hora</Subtitle>
          <DateAndTime>{`${meal.date} às ${meal.hour}`}</DateAndTime>

          <MealStatus>
            <Status inDiet={meal.inDiet} />
            <TitleStatus>
              {meal.inDiet ? 'dentro da dieta' : 'fora da dieta'}
            </TitleStatus>
          </MealStatus>

          <Footer>
            <Button
              onPress={handleGoToEditMeal}
              icon={<PencilSimpleLine color="white" />}
              title="Editar refeição"
            />
            <Button
              icon={<Trash />}
              title="Excluir refeição"
              type="SECONDARY"
            />
          </Footer>
        </Content>
      ) : (
        <Content>
          <Loading />
        </Content>
      )}
    </Container>
  )
}
