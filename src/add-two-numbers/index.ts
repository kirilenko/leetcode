// https://leetcode.com/problems/add-two-numbers/

import ListNode, { createListNodeFromArray } from '../_common/list-node'

const addTwoNumbers = (
  list1: ListNode | null,
  list2: ListNode | null,
): ListNode | null => {
  const result = new ListNode(0)
  let node: ListNode | null = result
  let carry = 0

  while (list1 || list2 || carry) {
    const sum = (list1?.val || 0) + (list2?.val || 0) + carry
    carry = Math.floor(sum / 10)
    node.next = new ListNode(sum % 10)
    node = node.next
    list1 = list1?.next || null
    list2 = list2?.next || null
  }

  return result.next
}

// const list1: ListNode | null = createListNodeFromArray([2, 4, 3])
// const list2: ListNode | null = createListNodeFromArray([5, 6, 4])
//
// console.log(addTwoNumbers(list1, list2)?.mapToArr() || []) // [7, 0, 8] 342 + 465 = 807

// const list1: ListNode | null = createListNodeFromArray([0])
// const list2: ListNode | null = createListNodeFromArray([0])
//
// console.log(addTwoNumbers(list1, list2)?.mapToArr() || []) // [0]

const list1: ListNode | null = createListNodeFromArray([9, 9, 9, 9, 9, 9, 9])
const list2: ListNode | null = createListNodeFromArray([9, 9, 9, 9])

console.log(addTwoNumbers(list1, list2)?.mapToArr() || []) // [8, 9, 9, 9, 0, 0, 0, 1]
