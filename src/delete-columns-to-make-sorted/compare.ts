import comparator, { Case } from '../_common/comparator'
import { Args, minDeletionSize0, minDeletionSize1 } from '.'

const cases: Case<Args>[] = [
  {
    args: [
      [
        'cba', //
        'daf', //
        'ghi', //
      ],
    ],
  },
  {
    args: [
      [
        'zyx', //
        'wvu', //
        'tsr', //
      ],
    ],
  },
]

comparator<Args>({ cases, fns: [minDeletionSize0, minDeletionSize1] })
