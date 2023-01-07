import { isValid0, Args } from '.'

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
  describe(`valid-parentheses.${fn.name}`, function () {
    cases.forEach(({ expected, id, props }) => {
      it(`should pass case ${id}`, function () {
        expect(fn(...props)).toEqual(expected)
      })
    })
  })
})
