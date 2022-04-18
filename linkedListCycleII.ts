/*
Mathematical "proof": https://stackoverflow.com/a/6110767

This implementation uses the tortoise and hare algorithm and TypeScript's 
optional chaining.

If there is a cycle, proceed with determining the head of the cycle.
Let m be the number of nodes required to reach the cycle head,
and k be the number of nodes traversed to reach the meeting point of slow and fast pointer.
Let n be the cycle length.

Then, from the "proof", we have that m + k is nothing more than a mulitple 
of n, so since m + k is where fast and slow pointers meet, if we subtract k
from both sides of this multiple relation, then we have that one pointer
set at head will travel m nodes, while the other pointer within the cycle
will be k nodes behind a full rotation, but this means both pointers meet
at the head of the cycle.

Runtime: 92 ms, faster than 78.65% of TypeScript online submissions for Linked List Cycle II.
Memory Usage: 46 MB, less than 31.77% of TypeScript online submissions for Linked List Cycle II.
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

function detectCycle(head: ListNode | null): ListNode | null {
  let slowPointer: ListNode | null = head?.next;
  let fastPointer: ListNode | null = head?.next?.next;

  while (fastPointer) {
    if (slowPointer === fastPointer) {
      break;
    }
    slowPointer = slowPointer?.next;
    fastPointer = fastPointer?.next?.next;
  }

  if (!fastPointer) {
    return null;
  }

  slowPointer = head;

  while (slowPointer !== fastPointer) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next;
  }

  return slowPointer;
};