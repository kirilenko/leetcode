import { Args, minDeletionSize0, minDeletionSize1 } from '.'

type Case = {
  expected: number
  id: string
  props: Args
}

const cases: Case[] = [
  {
    expected: 1,
    id: '1',
    props: [
      [
        'cba', //
        'daf', //
        'ghi', //
      ],
    ],
  },
  {
    expected: 0,
    id: '2',
    props: [['a', 'b']],
  },
  {
    expected: 3,
    id: '2',
    props: [
      [
        'zyx', //
        'wvu', //
        'tsr', //
      ],
    ],
  },
]

;[minDeletionSize0, minDeletionSize1].forEach((fn) => {
  describe(`delete-columns-to-make-sorted.${fn.name}`, function () {
    cases.forEach(({ expected, id, props }) => {
      it(`should pass case ${id}`, function () {
        expect(fn(...props)).toEqual(expected)
      })
    })
  })
})
