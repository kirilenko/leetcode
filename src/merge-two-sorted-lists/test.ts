import { createListNodeFromArray } from '../_common/list-node'
import { mergeTwoLists } from '.'

type Case = {
  expected: number[]
  id: string
  props: [number[], number[]]
}

const cases: Case[] = [
  {
    expected: [1, 1, 2, 3, 4, 4],
    id: '1',
    props: [
      [1, 2, 4],
      [1, 3, 4],
    ],
  },
  {
    expected: [],
    id: '2',
    props: [[], []],
  },
  {
    expected: [0],
    id: '3',
    props: [[], [0]],
  },
]

describe('merge-two-sorted-lists', function () {
  cases.forEach(({ expected, id, props }) => {
    it(`should pass case ${id}`, function () {
      const [list1, list2] = props.map(createListNodeFromArray)
      const result = mergeTwoLists(list1, list2)
      expect(result?.mapToArr() || []).toEqual(expected)
    })
  })
})
