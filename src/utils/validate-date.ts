export function validateDate(date: string) {
  const dateValid = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(\d{2})$/
  return dateValid.test(date)
}
