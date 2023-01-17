// https://leetcode.com/problems/reverse-integer/

export type Args = [number]
export type Result = number

const reverse0 = (...[x]: Args): Result => {
  if (`${x}`.length === 1) return x

  const isNegative = x < 0
  const absX = isNegative ? Math.abs(x) : x
  const reversed = +`${absX}`.split('').reverse().join('')

  const result = isNegative ? -reversed : reversed
  if (result < -2147483648 || result > 2147483647) return 0
  return result
}

const reverse1 = (...[x]: Args) => {
  const xStr = '' + x
  let resultStr = xStr[0] === '-' ? '-' : ''

  for (let i = xStr.length - 1; i >= 0; i--) resultStr += xStr[i]
  const result = parseInt(resultStr)
  if (result < -2147483648 || result > 2147483647) return 0
  return result
}

export const fns = [reverse0, reverse1]
