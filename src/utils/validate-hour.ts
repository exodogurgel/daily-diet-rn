import { AppError } from './AppError'

export function validateHour(hour: string) {
  const timeValid = /^([01]\d|2[0-3]):([0-5]\d)$/

  if (!timeValid.test(hour)) {
    throw new AppError('Horário inválido')
  }

  return hour
}
