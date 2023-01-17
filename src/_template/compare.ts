import comparator, { Case } from '../_common/comparator'
import { Args, fns } from '.'

const cases: Case<Args>[] = [{ args: [123] }]

comparator<Args>({ cases, fns })
