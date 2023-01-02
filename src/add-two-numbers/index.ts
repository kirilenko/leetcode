// https://leetcode.com/problems/add-two-numbers/

import ListNode from '../_common/list-node'

export const addTwoNumbers = (
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
