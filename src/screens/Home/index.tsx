/* eslint-disable no-unused-expressions */
import { SectionList } from 'react-native'
import { useCallback, useState } from 'react'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import { MealsHistoryDTO } from 'src/dtos/MealsHistoryDTO'

import { getAllMeals } from '@storage/meal/getAllMeals'
import { getMealsByDate } from '@storage/meal/getMealsByDate'

import { Plus } from 'phosphor-react-native'

import { Button } from '@components/Button'
import { MealField } from '@components/MealField'
import { PercentInfo } from '@components/PercentInfo'

import { Container, Header, Logo, Profile, Title, SectionTitle } from './styles'

import logoImg from '@assets/logo.png'
import profileImg from '@assets/profile.png'

export function Home() {
  const [meals, setMeals] = useState<MealsHistoryDTO[]>([])
  const [percentInDiet, setPercentInDiet] = useState(0)

  const { navigate } = useNavigation()

  function goNewPage() {
    navigate('new', {})
  }

  function handleOpenMeal(id: string) {
    navigate('meal', { id })
  }

  async function calculatePercentageWithinDiet() {
    const meals = await getAllMeals()

    const mealsWithinDiet = meals.reduce((acc, meal) => {
      meal.inDiet ? (acc += 1) : acc

      return acc
    }, 0)

    const percent = (mealsWithinDiet / meals.length) * 100

    setPercentInDiet(percent)
  }

  async function fetchMeals() {
    try {
      const data = await getAllMeals()

      const mealsByDate = getMealsByDate(data)

      setMeals(mealsByDate.sort().reverse())
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals()
    }, []),
  )

  useFocusEffect(
    useCallback(() => {
      calculatePercentageWithinDiet()
    }, []),
  )

  return (
    <Container>
      <Header>
        <Logo source={logoImg} />
        <Profile source={profileImg} />
      </Header>

      <PercentInfo
        percentInDiet={percentInDiet}
        type={percentInDiet >= 50 ? 'PRIMARY' : 'SECONDARY'}
      />

      <Title>Refeições</Title>
      <Button
        title="Nova refeição"
        onPress={goNewPage}
        icon={<Plus size={18} color="white" />}
      />

      <SectionList
        style={{
          width: '100%',
        }}
        sections={meals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealField
            status={item.inDiet}
            meal={item.name}
            time={item.hour}
            onPress={() => handleOpenMeal(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({ section: { title } }) => (
          <SectionTitle>{title}</SectionTitle>
        )}
        contentContainerStyle={
          meals.length === 0 && {
            flex: 1,
            justifyContent: 'center',
          }
        }
      />
    </Container>
  )
}
