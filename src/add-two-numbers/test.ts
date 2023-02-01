import { createListNodeFromArray } from '../_common/list-node'
import { addTwoNumbers } from '.'

type Case = {
  expected: number[]
  id: string
  props: [number[], number[]]
}

const cases: Case[] = [
  {
    expected: [7, 0, 8], // 342 + 465 = 807
    id: '1',
    props: [
      [2, 4, 3],
      [5, 6, 4],
    ],
  },
  {
    expected: [0],
    id: '2',
    props: [[0], [0]],
  },
  {
    expected: [8, 9, 9, 9, 0, 0, 0, 1],
    id: '3',
    props: [
      [9, 9, 9, 9, 9, 9, 9],
      [9, 9, 9, 9],
    ],
  },
]

describe('add-two-numbers', () => {
  cases.forEach(({ expected, id, props }) => {
    it(`should pass case ${id}`, () => {
      const [list1, list2] = props.map(createListNodeFromArray)
      const result = addTwoNumbers(list1, list2)
      expect(result?.mapToArr() || []).toEqual(expected)
    })
  })
})
