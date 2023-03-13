import { AppError } from './AppError'

export function validateHour(hour: string) {
  const padrao = /^([01]\d|2[0-3]):([0-5]\d)$/

  if (!padrao.test(hour)) {
    throw new AppError('Horário Invalido')
  }

  return hour
}
