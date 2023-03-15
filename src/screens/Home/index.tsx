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

  const { navigate } = useNavigation()

  function goNewPage() {
    navigate('new')
  }

  function handleOpenMeal(id: string) {
    navigate('meal', { id })
  }

  async function fetchMeals() {
    try {
      const data = await getAllMeals()

      const mealsByDate = getMealsByDate(data)

      setMeals(mealsByDate)
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
      <Header>
        <Logo source={logoImg} />
        <Profile source={profileImg} />
      </Header>

      <PercentInfo />

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
