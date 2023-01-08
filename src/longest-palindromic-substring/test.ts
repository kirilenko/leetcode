import { isPalindrome, longestPalindrome0, Args, longestPalindrome1 } from '.'

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
    expected: ['bab', 'aba'], // bab or aba
    id: '0',
    props: ['babad'],
  },
  {
    expected: ['bb'],
    id: '1',
    props: ['cbbd'],
  },
  {
    expected: ['baab'],
    id: '2',
    props: ['babaab'],
  },
  {
    expected: ['qwertyabbaiabbaytrewq'],
    id: '3',
    props: ['qwertyabbaiabbaytrewq'],
  },
]

;[longestPalindrome0, longestPalindrome1].forEach((fn) => {
  describe(`longest-palindromic-substring.${fn.name}`, function () {
    cases.forEach(({ expected, id, props }) => {
      it(`should pass case ${id}`, function () {
        expect(expected).toContain(fn(...props))
      })
    })
  })
})
