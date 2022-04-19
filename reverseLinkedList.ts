/*
Iterative:

Terribly memory inefficient, uses a stack and assignment recursion has the potential
to stack overflow for a sufficiently large LLStack.

Runtime: 69 ms, faster than 86.09% of TypeScript online submissions for Reverse Linked List.
Memory Usage: 45.7 MB, less than 13.07% of TypeScript online submissions for Reverse Linked List.
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

// Iterative helper
function assignHelper(head: ListNode, LLStack: ListNode[]): void {
  if (LLStack.length > 0) {
    const poppedNode: ListNode = LLStack.pop()!;
    head.next = poppedNode;
    assignHelper(head.next, LLStack)
  }
}

// Iteratively
function reverseListIterative(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  const LLStack: ListNode[] = [];
  while (head) {
    LLStack.push(new ListNode(head.val, null));
    head = head.next;
  }

  const retHead: ListNode = LLStack.pop()!;

  assignHelper(retHead, LLStack)
  return retHead;
};