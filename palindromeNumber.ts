/*
Naive number approach:
Runtime: 170 ms, faster than 86.61% of TypeScript online submissions for Palindrome Number.
Memory Usage: 51.4 MB, less than 87.46% of TypeScript online submissions for Palindrome Number.

String approach:
Runtime: 207 ms, faster than 74.87% of TypeScript online submissions for Palindrome Number.
Memory Usage: 51.6 MB, less than 73.21% of TypeScript online submissions for Palindrome Number.
*/

// Solution using math: naive number approach
function numberLength(n: number): number {
  if (n < 10) {
    return 1;
  }

  let count: number = 1;
  while (n >= 10) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

function isPalindromeNumber(x: number): boolean {
  if (x < 0) return false;
  let len: number = numberLength(x);
  
  let leftDiv = 10 ** (len - 1);

  let leftNum: number = x, rightNum: number = x;

  while (len > 1) {
    const leftComp: number = Math.floor(leftNum / leftDiv);
    const rightComp: number = rightNum % 10;

    if (leftComp !== rightComp) return false;

    // leftNum specific
    leftNum = leftNum - leftComp * leftDiv;
    leftDiv = leftDiv / 10;

    // rightNum specific
    rightNum = Math.floor(rightNum / 10);

    len = len - 2;
  }

  return true
};

// Solution using string casting
function isPalindromeString(x: number): boolean {
  return x.toString().split('').reverse().join('') === x.toString();
};