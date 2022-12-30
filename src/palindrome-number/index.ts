// https://leetcode.com/problems/palindrome-number/

import comparator, { Case } from '../_common/comparator'

type Args = [number]

const isPalindrome0 = (...[x]: Args): boolean => {
  const xString = x.toString()
  return xString === xString.split('').reverse().join('')
}

const isPalindrome1 = (...[x]: Args): boolean =>
  x === +[...x.toString()].reverse().join('')

const cases: Case<Args>[] = [{ args: [121] }, { args: [-121] }, { args: [123] }]

comparator<Args>({
  cases,
  fns: [isPalindrome0, isPalindrome1],
})
