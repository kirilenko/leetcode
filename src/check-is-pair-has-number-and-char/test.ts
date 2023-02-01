import { Args, checkIsPairHasNumberAndChar, Result } from '.'

type Case = {
  expected: Result
  id: string
  props: Args
}

const cases: Case[] = [
  {
    expected: 'YES',
    id: '0',
    props: ['a1'],
  },
  {
    expected: 'NO',
    id: '1',
    props: ['11'],
  },
  {
    expected: 'NO',
    id: '1',
    props: ['aa'],
  },
  {
    expected: 'YES',
    id: '0',
    props: ['1a'],
  },
]

describe(`tmp0`, () => {
  cases.forEach(({ expected, id, props }) => {
    it(`should pass case ${id}`, () => {
      expect(checkIsPairHasNumberAndChar(...props)).toEqual(expected)
    })
  })
})
