export function formatDate(rawDate: string, format: 'short' | 'long' = 'short') {
  const date = new Date(rawDate)
  if (Number.isNaN(date.getTime())) {
    return rawDate
  }

  return date.toLocaleDateString('pt-br', { dateStyle: format })
}
