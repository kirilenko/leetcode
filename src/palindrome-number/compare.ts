import comparator, { Case } from '../_common/comparator'
import { Args, isPalindrome0, isPalindrome1, isPalindromeBetter } from '.'

const cases: Case<Args>[] = [
  { args: [121], description: 'short number and palindrome' },
  { args: [-121], description: 'negative number' },
  { args: [123], description: 'short number and not palindrome' },
  { args: [0], description: 'zero' },
  {
    args: [2147447412],
    description: 'long number less than 2^31 - 1 and palindrome',
  },
]

comparator<Args>({
  cases,
  fns: [isPalindrome0, isPalindrome1, isPalindromeBetter],
})
