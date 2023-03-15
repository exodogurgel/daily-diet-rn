export function verifyIfDecimalNumber(percent: number) {
  const isDecimalNumber = percent % 1 !== 0 && !isNaN(percent % 1)

  if (isDecimalNumber) {
    return percent.toFixed(2)
  } else {
    return percent
  }
}
