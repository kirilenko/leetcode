import {
  Args,
  isPalindrome,
  longestPalindrome0,
  longestPalindrome1,
  longestPalindrome2,
} from '.'

describe('longest-palindromic-substring.isPalindrome', () => {
  it('returns true for a palindrome', () => {
    expect(isPalindrome('aba')).toBe(true)
  })

  it('returns false for a non-palindrome', () => {
    expect(isPalindrome('ab')).toBe(false)
  })
})

type Case = {
  expected: string[]
  id: string
  props: Args
}

const cases: Case[] = [
  {
    expected: ['a'], // bab or aba
    id: '0',
    props: ['a'],
  },
  {
    expected: ['bb'],
    id: '1',
    props: ['cbbd'],
  },
  {
    expected: ['bab', 'aba'], // bab or aba
    id: '2',
    props: ['babad'],
  },
  {
    expected: ['baab'],
    id: '3',
    props: ['babaab'],
  },
  {
    expected: ['qwertyabbaiabbaytrewq'],
    id: '4',
    props: ['qwertyabbaiabbaytrewq'],
  },
  {
    expected: ['a', 'c'],
    id: '5',
    props: ['ac'],
  },
]

;[longestPalindrome0, longestPalindrome1, longestPalindrome2].forEach((fn) => {
  describe(`longest-palindromic-substring.${fn.name}`, () => {
    cases.forEach(({ expected, id, props }) => {
      it(`should pass case ${id}`, () => {
        expect(expected).toContain(fn(...props))
      })
    })
  })
})
