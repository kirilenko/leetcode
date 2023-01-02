import comparator, { Case } from '../_common/comparator'
import { Args, isPalindrome0, isPalindrome1 } from '.'

const cases: Case<Args>[] = [{ args: [121] }, { args: [-121] }, { args: [123] }]

comparator<Args>({
  cases,
  fns: [isPalindrome0, isPalindrome1],
})
