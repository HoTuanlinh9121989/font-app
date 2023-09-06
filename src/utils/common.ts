export const formatCurrency = (number = 0) => {
  if (!number) {
    return '--'
  }
  const formattedNumber = number.toLocaleString('vi-VN')
  return `${formattedNumber} đ`
}

export const convertStringNormalize = (string: string) => {
  return `${string}`
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}
