import comparator, { Case } from '../_common/comparator'
import { Args, fns } from '.'

const cases: Case<Args>[] = [
  {
    args: [
      [1, 2, 3, 4],
      [2, 3, 4, 5],
    ],
    description: 'both arrays are short',
  },
  {
    args: [[...Array(1000).keys()], [-1, ...Array(1000).keys()]],
    description: 'both arrays are long and have a lot common elements',
  },
  {
    args: [[...Array(1000).keys()], [...Array(1000).keys()].reverse()],
    description: 'one array is reversed the other one, both are long',
  },
  {
    args: [
      [...Array(1000).keys()],
      [...Array(1000).keys()].map((n) => -(n + 1)),
    ],
    description: "both arrays are long and haven't common elements",
  },
  {
    args: [[1, 2, 3, 4], [...Array(1000).keys()]],
    description: 'first array is short, the second is long',
  },
  {
    args: [[...Array(1000).keys()], [1, 2, 3, 4]],
    description: 'first array is long, the second is short',
  },
]

comparator<Args>({
  cases,
  fns,
  repeat: 100,
})
