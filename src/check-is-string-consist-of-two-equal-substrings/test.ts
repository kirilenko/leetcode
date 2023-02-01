import { Args, checkIsStringConsistOfTwoEqualSubstrings, Result } from '.'

type Case = {
  expected: Result
  id: string
  props: Args
}

const cases: Case[] = [
  {
    expected: 'YES',
    id: '0',
    props: [6, 'aababa'],
  },
  {
    expected: 'NO',
    id: '1',
    props: [5, 'aaaaa'],
  },
  {
    expected: 'NO',
    id: '2',
    props: [8, 'aaaabbbb'],
  },
  {
    expected: 'YES',
    id: '3',
    props: [4, 'abab'],
  },
  {
    expected: 'NO',
    id: '4',
    props: [8, 'aaabbbbb'],
  },
]

describe(`tmp0`, () => {
  cases.forEach(({ expected, id, props }) => {
    it(`should pass case ${id}`, () => {
      expect(checkIsStringConsistOfTwoEqualSubstrings(...props)).toEqual(
        expected,
      )
    })
  })
})
