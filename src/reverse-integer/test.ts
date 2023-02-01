import { Args, fns, Result } from '.'

type Case = {
  expected: Result
  id: string
  props: Args
}

const cases: Case[] = [
  {
    expected: 321,
    id: '0',
    props: [123],
  },
  {
    expected: -321,
    id: '1',
    props: [-123],
  },
  {
    expected: 21,
    id: '2',
    props: [120],
  },
  {
    expected: 0,
    id: '3',
    props: [0],
  },
  {
    expected: 0,
    id: '4',
    props: [1534236469],
  },
  {
    expected: 9,
    id: '5',
    props: [900000],
  },
]

fns.forEach((fn) => {
  describe(`reverse-integer.${fn.name}`, () => {
    cases.forEach(({ expected, id, props }) => {
      it(`should pass case ${id}`, () => {
        expect(fn(...props)).toEqual(expected)
      })
    })
  })
})
