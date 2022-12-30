// https://leetcode.com/problems/merge-two-sorted-lists/

class ListNode {
  val: number
  next: ListNode | null

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }

  mapToArr(): number[] {
    const arr: number[] = []
    let node: ListNode | null = this

    while (node) {
      arr.push(node.val)
      node = node.next
    }

    return arr
  }
}

const createList = (array: number[]): ListNode | null =>
  !array.length
    ? null
    : array.reduceRight(
        (acc: ListNode | null, val: number) => new ListNode(val, acc),
        null,
      )

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

const list1: ListNode | null = createList([1, 2, 4])
const list2: ListNode | null = createList([1, 3, 4])

console.log(mergeTwoLists(list1, list2)?.mapToArr() || []) // [1, 1, 2, 3, 4, 4]
