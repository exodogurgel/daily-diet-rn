import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { SectionHeader } from '@components/SectionHeader'
import { Form, Container, DateAndTime, InDietContainer } from './styles'

export function New() {
  return (
    <Container>
      <SectionHeader title="Nova refeição" />
      <Form>
        <Input label="Nome" />
        <Input label="Descrição" type="TEXTAREA" />

        <DateAndTime>
          <Input
            label="Data"
            size="SM"
            keyboardType="numbers-and-punctuation"
          />
          <Input
            label="Hora"
            size="SM"
            keyboardType="numbers-and-punctuation"
          />
        </DateAndTime>

        <InDietContainer></InDietContainer>

        <Button />
      </Form>
    </Container>
  )
}
