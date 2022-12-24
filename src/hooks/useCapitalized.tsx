export const useCapitalizedString = (string: string) => {
  if (!string) return
  const slicedFirstIndex = string.slice(1)
  return string[0].toLocaleUpperCase() + slicedFirstIndex
}
