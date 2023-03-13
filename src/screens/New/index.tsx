import { Button } from '@components/Button'
import { ButtonSelect } from '@components/ButtonSelect'
import { Input } from '@components/Input'
import { SectionHeader } from '@components/SectionHeader'
import { useState } from 'react'
import { Form, Container, DateAndTime, InDietContainer, Label } from './styles'

export function New() {
  const [isActive, setIsActive] = useState<'IN-DIET' | 'OUT-DIET' | ''>('')

  return (
    <Container>
      <SectionHeader title="Nova refeição" />
      <Form>
        <Input label="Nome" />
        <Input label="Descrição" type="TEXTAREA" multiline />

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

        <Label>Está dentro da dieta?</Label>

        <InDietContainer>
          <ButtonSelect
            title="Sim"
            status="IN-DIET"
            isSelected={isActive}
            onPress={() => setIsActive('IN-DIET')}
          />
          <ButtonSelect
            title="Não"
            status="OUT-DIET"
            isSelected={isActive}
            onPress={() => setIsActive('OUT-DIET')}
          />
        </InDietContainer>

        <Button style={{ marginTop: 'auto' }} title="Cadastrar refeição" />
      </Form>
    </Container>
  )
}
