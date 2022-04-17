/*
This implementation uses the tortoise and hare algorithm and TypeScript's 
optional chaining.

If there is a cycle, then the fast pointer and slow pointer must equate
at some point since the circle is finite.

If there is no cycle, then fastPointer will be null.

Runtime: 93 ms, faster than 74.63% of TypeScript online submissions for Linked List Cycle.
Memory Usage: 45.5 MB, less than 71.63% of TypeScript online submissions for Linked List Cycle.
*/

// Definition for singly-linked list.
class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

function hasCycle(head: ListNode | null): boolean {
  let slowPointer: ListNode | null = head?.next;
  let fastPointer: ListNode | null = head?.next?.next;

  while (fastPointer) {
    if (fastPointer == slowPointer) {
      return true;
    }

    fastPointer = fastPointer?.next?.next;
    slowPointer = slowPointer?.next;
  }

  return false;
};