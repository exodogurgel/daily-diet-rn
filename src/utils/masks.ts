function maskDate(date: string) {
  date = date.replace(/\D/g, '')
  date = date.replace(/^(\d{2})(\d{2})(\d)/, '$1/$2/$3')

  return date
}

function maskTime(hour: string) {
  hour = hour.replace(/\D/g, '')
  hour = hour.replace(/^(\d{2})/, '$1:')
  hour = hour.replace(/:(\d{2})(\d)/, ':$1')

  return hour
}

export { maskDate, maskTime }
