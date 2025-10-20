
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}


function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let prev: ListNode | null = null
  let curr: ListNode | null = head
  let next: ListNode | null = null
  let check: ListNode | null = head
  let canProceed: number = 0
  let count: number = 0
  while (canProceed < k && check !== null) {
    canProceed++
    check = check.next
  }
  if (canProceed === k) {
    while (count < k) {
      next = curr!.next
      curr!.next = prev
      prev = curr
      curr = next
      count++
    }
    if (next !== null) {
      head!.next = reverseKGroup(next, k)
    }
    return prev
  } else {
    return head
  }
};