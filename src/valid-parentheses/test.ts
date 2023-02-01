import { Args, isValid0 } from '.'

type Case = {
  expected: boolean
  id: string
  props: Args
}

const cases: Case[] = [
  {
    expected: true,
    id: '0',
    props: [''],
  },
  {
    expected: true,
    id: '1',
    props: ['()'],
  },
  {
    expected: true,
    id: '2',
    props: ['()[]{}'],
  },
  {
    expected: false,
    id: '3',
    props: ['(]'],
  },
  {
    expected: true,
    id: '4',
    props: ['([{()}])[]{}'],
  },
]

;[isValid0].forEach((fn) => {
  describe(`valid-parentheses.${fn.name}`, () => {
    cases.forEach(({ expected, id, props }) => {
      it(`should pass case ${id}`, () => {
        expect(fn(...props)).toEqual(expected)
      })
    })
  })
})
