// https://leetcode.com/problems/merge-two-sorted-lists/

import ListNode, { createListNodeFromArray } from '../_common/list-node'

const mergeTwoLists = (
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null => {
  if (!list1) {
    return list2
  }

  if (!list2) {
    return list1
  }

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  }

  list2.next = mergeTwoLists(list1, list2.next)
  return list2
}

const list1: ListNode | null = createListNodeFromArray([1, 2, 4])
const list2: ListNode | null = createListNodeFromArray([1, 3, 4])

console.log(mergeTwoLists(list1, list2)?.mapToArr() || []) // [1, 1, 2, 3, 4, 4]
