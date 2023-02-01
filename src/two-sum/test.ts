import { Args, twoSum0, twoSum1, twoSum2, twoSum3 } from '.'

type Case = {
  expected: number[]
  id: string
  props: Args
}

const cases: Case[] = [
  {
    expected: [0, 1],
    id: '1',
    props: [[2, 7, 11, 15], 9],
  },
  {
    expected: [1, 2],
    id: '2',
    props: [[3, 2, 4], 6],
  },
  {
    expected: [0, 1],
    id: '3',
    props: [[3, 3], 6],
  },
]

;[twoSum0, twoSum1, twoSum2, twoSum3].forEach((twoSum) => {
  describe(`two-sum.${twoSum.name}`, () => {
    cases.forEach(({ expected, id, props }) => {
      it(`should pass case ${id}`, () => {
        const result = twoSum(...props)
        expect(result.sort()).toEqual(expected.sort())
      })
    })
  })
})
