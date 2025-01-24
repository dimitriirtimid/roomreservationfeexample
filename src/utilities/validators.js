export const validateNumericInputAsInteger = (
  text,
  minValue = 0,
  maxValue = 100
) => {
  const value = parseInt(text)
  if (isNaN(value)) {
    return 'Not a valid number'
  } else if (value < minValue) {
    return `Value must be at least ${minValue}`
  } else if (value > maxValue) {
    return `Value must be at most ${maxValue}`
  }
  return ''
}
