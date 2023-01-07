import { Args, isPalindrome0, isPalindrome1, isPalindromeBetter } from '.'

type Case = {
  expected: boolean
  id: string
  props: Args
}

const cases: Case[] = [
  {
    expected: true,
    id: '1',
    props: [121],
  },
  {
    expected: false,
    id: '2',
    props: [-121],
  },
  {
    expected: false,
    id: '3',
    props: [123],
  },
  {
    expected: true,
    id: '4',
    props: [2147447412],
  },
]

;[isPalindrome0, isPalindrome1, isPalindromeBetter].forEach((isPalindrome) => {
  describe(`palindrome-number.${isPalindrome.name}`, function () {
    cases.forEach(({ expected, id, props }) => {
      it(`should pass case ${id}`, function () {
        const result = isPalindrome(...props)
        expect(result).toEqual(expected)
      })
    })
  })
})
