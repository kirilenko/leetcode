// https://leetcode.com/problems/palindrome-number/

export type Args = [number]

export const isPalindrome0 = (...[x]: Args): boolean => {
  const xString = x.toString()
  return xString === xString.split('').reverse().join('')
}

export const isPalindrome1 = (...[x]: Args): boolean =>
  x === +[...x.toString()].reverse().join('')
