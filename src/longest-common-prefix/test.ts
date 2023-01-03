import { Args, longestCommonPrefix0, longestCommonPrefix1 } from '.'

type Case = {
  expected: string
  id: string
  props: Args
}

const cases: Case[] = [
  {
    expected: 'fl',
    id: '1',
    props: [['flower', 'flow', 'flight']],
  },
  {
    expected: '',
    id: '2',
    props: [['dog', 'racecar', 'car']],
  },
]

;[longestCommonPrefix0, longestCommonPrefix1].forEach((fn) => {
  describe(`longest-common-prefix.${fn.name}`, function () {
    cases.forEach(({ expected, id, props }) => {
      it(`should pass case ${id}`, function () {
        expect(fn(...props)).toEqual(expected)
      })
    })
  })
})
