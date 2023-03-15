export function validateHour(hour: string) {
  const timeValid = /^([0-1][0-9]|2[0-3]):[0-5][0-9]$/

  return timeValid.test(hour)
}
