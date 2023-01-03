import comparator, { Case } from '../_common/comparator'
import { Args, longestCommonPrefix0, longestCommonPrefix1 } from '.'

const cases: Case<Args>[] = [
  {
    args: [['flower', 'flow', 'flight']],
  },
  {
    args: [['dog', 'racecar', 'car']],
  },
]

comparator<Args>({ cases, fns: [longestCommonPrefix0, longestCommonPrefix1] })
