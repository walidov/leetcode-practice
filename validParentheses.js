// 20. Valid Parentheses
// https://leetcode.com/problems/valid-parentheses/

const isValid = (s) => {
  const stack = [];
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let char of s) {
    if (map[char]) {
      if (stack[stack.length - 1] === map[char]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
