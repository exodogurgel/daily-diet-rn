import { Button } from '@components/Button'
import { SectionHeader } from '@components/SectionHeader'
import { PencilSimpleLine, Trash } from 'phosphor-react-native'
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

export function Meal() {
  const inDiet = true
  return (
    <Container>
      <SectionHeader title="Refeição" bgColor={inDiet ? 'GREEN' : 'RED'} />
      <Content>
        <Title>Sanduíche</Title>
        <Description>
          Sanduíche de pão integral com atum e salada de alface e tomate
        </Description>

        <Subtitle>Data e hora</Subtitle>
        <DateAndTime>12/08/2022 às 16:00</DateAndTime>

        <MealStatus>
          <Status inDiet={inDiet} />
          <TitleStatus>
            {inDiet ? 'dentro da dieta' : 'fora da dieta'}
          </TitleStatus>
        </MealStatus>

        <Footer>
          <Button
            icon={<PencilSimpleLine color="white" />}
            title="Editar refeição"
          />
          <Button icon={<Trash />} title="Excluir refeição" type="SECONDARY" />
        </Footer>
      </Content>
    </Container>
  )
}
