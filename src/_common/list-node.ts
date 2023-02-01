class ListNode {
  val: number

  next: ListNode | null

  constructor(val = 0, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }

  mapToArr(): number[] {
    const arr: number[] = []
    let node: ListNode | null = this // eslint-disable-line @typescript-eslint/no-this-alias

    while (node) {
      arr.push(node.val)
      node = node.next
    }

    return arr
  }
}

export const createListNodeFromArray = (array: number[]): ListNode | null =>
  !array.length
    ? null
    : array.reduceRight(
        (acc: ListNode | null, val: number) => new ListNode(val, acc),
        null,
      )

export default ListNode
