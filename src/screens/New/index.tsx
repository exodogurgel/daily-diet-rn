import { useState } from 'react'
import { Alert } from 'react-native'
import uuid from 'react-native-uuid'
import { useNavigation } from '@react-navigation/native'

import { AppError } from '@utils/AppError'
import { validateHour } from '@utils/validate-hour'
import { validateDate } from '@utils/validate-date'

import { MealDTO } from 'src/dtos/MealDTO'

import { createMeal } from '@storage/meal/createMeal'

import { Input } from '@components/Input'
import { Button } from '@components/Button'
import { ButtonSelect } from '@components/ButtonSelect'
import { SectionHeader } from '@components/SectionHeader'

import { Form, Container, DateAndTime, InDietContainer, Label } from './styles'

export function New() {
  const [isActive, setIsActive] = useState<'IN-DIET' | 'OUT-DIET' | ''>('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const navigation = useNavigation()

  const inDiet = isActive === 'IN-DIET'

  async function handleAddMeal() {
    const isValidDate = validateDate(date)

    if (!isValidDate) {
      return Alert.alert(
        'Data inválida',
        'Digite uma data válida no formato DD/MM/AA',
      )
    }

    const isHourValid = validateHour(time)

    if (!isHourValid) {
      return Alert.alert(
        'Horário inválido',
        'Digite um horário válido no formato 00:00',
      )
    }

    const id = String(uuid.v4())

    const newMeal: MealDTO = {
      id,
      name,
      description,
      date,
      hour: time,
      inDiet: isActive === 'IN-DIET',
    }

    try {
      await createMeal(newMeal)
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert('Nova refeição', error.message)
      } else {
        return Alert.alert('Nova refeição', 'Não foi possível salvar.')
      }
    } finally {
      navigation.navigate('feedback', { inDiet })
    }
  }

  return (
    <Container
      scrollEnabled={false}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <SectionHeader title="Nova refeição" />
      <Form>
        <Input label="Nome" onChangeText={setName} value={name} />
        <Input
          label="Descrição"
          type="TEXTAREA"
          multiline
          onChangeText={setDescription}
          value={description}
        />

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
            keyboardType="numeric"
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

        <Button
          style={{ marginTop: 'auto' }}
          title="Cadastrar refeição"
          onPress={handleAddMeal}
        />
      </Form>
    </Container>
  )
}
