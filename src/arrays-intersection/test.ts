import { Args, fns } from '.'

type Case = {
  expected: number[]
  id: string
  props: Args
}

const cases: Case[] = [
  {
    expected: [2, 3, 4],
    id: '0',
    props: [
      [1, 2, 3, 4],
      [2, 3, 4, 5],
    ],
  },
  {
    expected: [],
    id: '1',
    props: [
      [1, 2, 3, 4],
      [20, 30, 40, 50],
    ],
  },
  {
    expected: [],
    id: '2',
    props: [[], [20, 30, 40, 50]],
  },
  {
    expected: [],
    id: '3',
    props: [[1, 2, 3, 4], []],
  },
  {
    expected: [],
    id: '4',
    props: [[], []],
  },
  {
    expected: [2, 3, 2, 4],
    id: '5',
    props: [
      [1, 2, 3, 2, 4],
      [2, 3, 4, 2, 5],
    ],
  },
  {
    expected: [],
    id: '6',
    props: [[2, 3, 4, 2, 5], [1]],
  },
]

fns.forEach((fn) => {
  describe(`palindrome.${fn.name}`, () => {
    cases.forEach(({ expected, id, props }) => {
      it(`should pass case ${id}`, () => {
        expect(fn(...props).sort()).toEqual(expected.sort())
      })
    })
  })
})
