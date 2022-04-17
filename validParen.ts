/*
This implementation uses a stack to determine if there are valid parentheses.

If the input is an opening bracket, push it to the stack. If the input is a closing
bracket, then pop an element off the stack, and compare. Then, if the stack height
is greater than 0 at the end, the parentheses are not balanced.

Runtime: 81 ms, faster than 70.11% of TypeScript online submissions for Valid Parentheses.
Memory Usage: 44.7 MB, less than 37.58% of TypeScript online submissions for Valid Parentheses.
*/

const openingBrackets = ['(', '{', '['];
const closingBrackets = [')', '}', ']'];

const bracketsMap = new Map<string, string>([
  [')', '('],
  ['}', '{'],
  [']', '['],
])

function isValid(s: string): boolean {
  const stack: string[] = [];

  const inputArr = s.split('');

  for (const bracket of inputArr) {
    if (openingBrackets.includes(bracket)) {
      stack.push(bracket);
    }

    if (closingBrackets.includes(bracket)) {
      const popped = stack.pop();
      if (bracketsMap.get(bracket) !== popped) {
        return false;
      }
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
};

const exampleOne = isValid('()');
const exampleTwo = isValid('()[]{}');
const exampleThree = isValid('(]');