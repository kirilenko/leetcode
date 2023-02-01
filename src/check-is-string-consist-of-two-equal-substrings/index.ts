export type Args = [number, string]
export type Result = 'YES' | 'NO'

export const checkIsStringConsistOfTwoEqualSubstrings = (
  ...[length, str]: Args
): Result => {
  if (length % 2) {
    return 'NO'
  }

  if (str.substring(0, length / 2) === str.substring(length / 2)) {
    return 'YES'
  }

  const sourceArr = str.split('')
  const evenChars = sourceArr.reduce(
    (acc, cur) => ({ ...acc, [cur]: (acc[cur] || 0) + 1 }),
    {} as Record<string, number>,
  )

  if (Object.values(evenChars).some((p) => p % 2)) {
    return 'NO'
  }

  for (let sourceIndex = 0; sourceIndex < length; sourceIndex += 1) {
    const sourceItem = sourceArr[sourceIndex]

    for (
      let targetIndex = sourceIndex + 1;
      targetIndex < length;
      targetIndex += 1
    ) {
      const targetItem = sourceArr[targetIndex]
      if (sourceItem === targetItem) {
        continue
      }

      const targetArr = sourceArr.slice()
      targetArr[targetIndex] = sourceItem
      targetArr[sourceIndex] = targetItem
      const targetString = targetArr.join('')
      if (
        targetString.substring(0, length / 2) ===
        targetString.substring(length / 2)
      ) {
        return 'YES'
      }
    }
  }

  return 'NO'
}
