import comparator, { Case } from '../_common/comparator'
import {
  Args,
  lengthOfLongestSubstring0,
  lengthOfLongestSubstring1,
  lengthOfLongestSubstringBetter,
} from '.'

const cases: Case<Args>[] = [
  {
    args: ['abcabcbb'],
  },
  {
    args: ['bbbbb'],
  },
  {
    args: [new Array(10000).fill('a').join('')],
    description: '10000 times: a',
  },
  {
    args: [
      new Array(100)
        .fill('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789')
        .join(''),
    ],
    description: '100 times: a...zA...Z0...9',
  },
  {
    args: ['abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'],
    description: 'only once: a...zA...Z0...9',
  },
]

comparator<Args>({
  cases,
  fns: [
    lengthOfLongestSubstring0,
    lengthOfLongestSubstring1,
    lengthOfLongestSubstringBetter,
  ],
})
