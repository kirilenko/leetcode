export type Args = [string]
export type Result = 'YES' | 'NO'

export const checkIsPairHasNumberAndChar = (...[str]: Args): Result => {
  const hasNumberAndChar = (pair: string) =>
    Number.isNaN(+pair[0]) && !Number.isNaN(+pair[1])

  return hasNumberAndChar(str) ||
    hasNumberAndChar(str.split('').reverse().join(''))
    ? 'YES'
    : 'NO'
}
