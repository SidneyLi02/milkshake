/*
This solution uses recursive BFS.

An explanation with CPP and a dry run is at:
https://leetcode.com/problems/maximum-depth-of-binary-tree/discuss/1770060/C%2B%2B-oror-Recursive-oror-DFS-oror-Example-Dry-Run-oror-Well-Explained

Runtime: 78 ms, faster than 80.78% of TypeScript online submissions for Maximum Depth of Binary Tree.
Memory Usage: 46.6 MB, less than 49.93% of TypeScript online submissions for Maximum Depth of Binary Tree.
*/

// Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  const leftDepth: number = maxDepth(root?.left);
  const rightDepth: number = maxDepth(root?.right);
  return 1 + Math.max(leftDepth, rightDepth);
};