import {
  Args,
  lengthOfLongestSubstring0,
  lengthOfLongestSubstring1,
  lengthOfLongestSubstringBetter,
} from '.'

type Case = {
  expected: number
  id: string
  props: Args
}

const cases: Case[] = [
  {
    expected: 3,
    id: '1',
    props: ['abcabcbb'],
  },
  {
    expected: 1,
    id: '2',
    props: ['bbbbb'],
  },
  {
    expected: 3,
    id: '3',
    props: ['pwwkew'],
  },
  {
    expected: 6,
    id: '4',
    props: ['abcdefef'],
  },
  {
    expected: 6,
    id: '5',
    props: ['ababcdefef'],
  },
]

;[
  lengthOfLongestSubstring0,
  lengthOfLongestSubstring1,
  lengthOfLongestSubstringBetter,
].forEach((fn) => {
  describe(`longest-substring-without-repeating-characters.${fn.name}`, function () {
    cases.forEach(({ expected, id, props }) => {
      it(`should pass case ${id}`, function () {
        expect(fn(...props)).toEqual(expected)
      })
    })
  })
})
