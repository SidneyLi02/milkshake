/*
This implementation uses a two pass hashmap.

Explanation: We first iterate through the nums array to set a hashmap with
value as key, and index as value.

Then, we iterate again through the nums array to determine the complement
by subtracting the target from the current number. Then, we use a hashmap
lookup for this complement, and return if certain conditions hold.

Runtime: 66 ms, faster than 96.91% of TypeScript online submissions for Two Sum.
Memory Usage: 46 MB, less than 17.26% of TypeScript online submissions for Two Sum.
*/

function twoSum(nums: number[], target: number): number[] {
  const hashMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    hashMap.set(nums[i], i);
  }

  let ret: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    const complement: number = target - nums[i];
    const res: number | undefined = hashMap.get(complement);
    if (res && res !== i) {
      ret = [i, res];
      break;
    }
  }
  
  return ret;
};

const exampleOne = twoSum([2, 7, 11, 15], 9);
const exampleTwo = twoSum([3, 2, 4], 6)
const exampleThree = twoSum([3, 3], 6)