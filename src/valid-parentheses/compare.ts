import comparator, { Case } from '../_common/comparator'
import { Args, isValid0 } from '.'

const cases: Case<Args>[] = [
  {
    args: ['([])'],
  },
]

comparator<Args>({ cases, fns: [isValid0], repeat: 1 })
