import comparator, { Case } from '../_common/comparator'
import {
  Args,
  longestPalindrome0,
  longestPalindrome1,
  longestPalindrome2,
} from '.'

const cases: Case<Args>[] = [
  { args: ['abaqwer'], description: 'short string with palindrome at start' },
  {
    args: [`${new Array(100).fill('qwertyuioplkjhgfdsazxcvbnm').join('')}aba`],
    description: 'long string with short palindrome at end',
  },
  {
    args: [
      `${new Array(100).fill('popqwertyuioplkjhgfdsazxcvbnm').join('')}abba`,
    ],
    description: 'long string with short palindromes at start and end',
  },
  {
    args: [
      (() => {
        const left = new Array(100).fill('popqwertyuioplkjhgfdsazxcvbnm')
        const right = left.reverse()
        const tail = new Array(200)
          .fill('popqwertyuioplkjhgfdsazxcvbnm')
          .join('')
        return left.join('') + right.join('') + tail
      })(),
    ],
    description: 'long string w/ long palindrome at start',
  },
]

comparator<Args>({
  cases,
  fns: [longestPalindrome0, longestPalindrome1, longestPalindrome2],
  repeat: 3,
})
