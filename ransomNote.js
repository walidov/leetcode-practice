// 383 - Ransom Note
// https://leetcode.com/problems/ransom-note/

const ransomNote = (ransomNote, magazine) => {
  let map = {};
  for (let char of magazine) {
    if (!map[char]) {
      map[char] = 0;
    }
    map[char]++;
  }
  for (let char of ransomNote) {
    if (!map[char]) {
      return false;
    }
    map[char]--;
  }
  return true;
};

console.log("('baa', 'aab'):", ransomNote("baa", "aab")); // true
console.log("('a', 'b'):", ransomNote("a", "b")); // false
console.log("('ab', 'b'):", ransomNote("ab", "b")); // flase
console.log("('abb', 'ab'):", ransomNote("abb", "ab")); // flase
