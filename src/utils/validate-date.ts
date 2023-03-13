import { AppError } from './AppError'

export function validateHour(date: string) {
  const dateValid = /^([01]\d|2[0-3]):([0-5]\d)$/

  if (!dateValid.test(date)) {
    throw new AppError('Data inválida')
  }

  return date
}
