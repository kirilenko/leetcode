import { Args, fns, Result } from '.'

type Case = {
  expected: Result
  id: string
  props: Args
}

const cases: Case[] = [
  {
    expected: 123,
    id: '0',
    props: [123],
  },
]

fns.forEach((fn) => {
  describe(`task-name.${fn.name}`, function () {
    cases.forEach(({ expected, id, props }) => {
      it(`should pass case ${id}`, function () {
        expect(fn(...props)).toEqual(expected)
      })
    })
  })
})
