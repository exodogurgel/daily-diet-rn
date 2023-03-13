import { Button } from '@components/Button'
import { ButtonSelect } from '@components/ButtonSelect'
import { Input } from '@components/Input'
import { SectionHeader } from '@components/SectionHeader'
import { useState } from 'react'
import { Form, Container, DateAndTime, InDietContainer, Label } from './styles'

export function New() {
  const [isActive, setIsActive] = useState<'IN-DIET' | 'OUT-DIET' | ''>('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

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
            value={date}
            maxLength={8}
            keyboardType="number-pad"
            mask="DATE"
            inputMaskChange={(text: string) => setDate(text)}
          />
          <Input
            label="Hora"
            size="SM"
            value={time}
            mask="TIME"
            maxLength={5}
            inputMaskChange={setTime}
            keyboardType="number-pad"
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
