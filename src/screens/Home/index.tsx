import { SectionList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { MealDTO } from 'src/dtos/MealDTO'

import { getMealsByDate } from '@storage/meal/getMealsByDate'

import { Plus } from 'phosphor-react-native'

import { Button } from '@components/Button'
import { MealField } from '@components/MealField'
import { PercentInfo } from '@components/PercentInfo'

import { Container, Header, Logo, Profile, Title, SectionTitle } from './styles'

import logoImg from '@assets/logo.png'
import profileImg from '@assets/profile.png'

const MEALS: MealDTO[] = [
  {
    id: '1',
    name: 'X-tudo',
    description: '',
    date: '12.08.22',
    hour: '20:00',
    inDiet: false,
  },
  {
    id: '2',
    name: 'Whey protein com leite',
    description: '',
    date: '12.08.22',
    hour: '16:00',
    inDiet: true,
  },
  {
    id: '3',
    name: 'Salada cesar com frango grelhado',
    description: '',
    date: '12.08.22',
    hour: '12:30',
    inDiet: true,
  },
  {
    id: '4',
    name: 'Vitamina de banana com abacate',
    description: '',
    date: '12.08.22',
    hour: '09:30',
    inDiet: true,
  },

  {
    id: '5',
    name: 'X-tudo',
    description: '',
    date: '11.08.22',
    hour: '20:00',
    inDiet: false,
  },
  {
    id: '6',
    name: 'Whey protein com leite',
    description: '',
    date: '11.08.22',
    hour: '16:00',
    inDiet: true,
  },
  {
    id: '7',
    name: 'Salada cesar com frango grelhado',
    description: '',
    date: '11.08.22',
    hour: '12:30',
    inDiet: true,
  },
  {
    id: '8',
    name: 'Vitamina de banana com abacate',
    description: '',
    date: '10.08.22',
    hour: '09:30',
    inDiet: true,
  },
]

export function Home() {
  const { navigate } = useNavigation()

  function goNewPage() {
    navigate('new')
  }

  function handleOpenMeal(id: string) {
    navigate('meal', { id })
  }

  const mealsByDate = getMealsByDate(MEALS)

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
        sections={mealsByDate}
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
          MEALS.length === 0 && {
            flex: 1,
            justifyContent: 'center',
          }
        }
      />
    </Container>
  )
}
