/*
The first approach uses the Set DS in which the Set preserves unique values.

The second approach uses a two pass hashmap, and updates key value pairs within the first pass.

Unique set:
Runtime: 112 ms, faster than 66.58% of TypeScript online submissions for Contains Duplicate.
Memory Usage: 51.7 MB, less than 34.88% of TypeScript online submissions for Contains Duplicate.

One pass hashmap:
Runtime: 116 ms, faster than 63.65% of TypeScript online submissions for Contains Duplicate.
Memory Usage: 52.6 MB, less than 6.87% of TypeScript online submissions for Contains Duplicate.
*/

function containsDuplicateSet(nums: number[]): boolean {
  const set = new Set<number>(nums);
  return set.size < nums.length;
}

// Two pass hashmap
function containsDuplicateHashMap(nums: number[]): boolean {
  const hashMap = new Map<number, number>();

  for (const num of nums) {
    if (hashMap.has(num)) {
      hashMap.set(num, hashMap.get(num)! + 1);
    } else {
      hashMap.set(num, 1);
    }
  }

  for (const num of nums) {
    if (hashMap.get(num)! > 1) {
      return true;
    }
  }

  return false;
};