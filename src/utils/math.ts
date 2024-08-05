export const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
export const getRandomNumbers = (min: number, max: number, count: number) => {
  return Array.from({ length: count }, () => Math.floor(Math.random() * (max - min + 1)) + min)
}

export const getUniqueRandomNumbers = (min: number, max: number, count: number): number[] => {
  if (count > max - min + 1) {
    throw new Error('Count cannot be greater than the range of numbers.')
  }
  const uniqueNumbers = new Set<number>()
  while (uniqueNumbers.size < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    uniqueNumbers.add(randomNumber)
  }
  return Array.from(uniqueNumbers)
}
