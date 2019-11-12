const _  = require('lodash');

const removeCharAt = (string, i) => {
  return string.slice(0, i) + string.slice(i + 1);
}
console.assert(removeCharAt('abc', 0) === 'bc', 'removeCharAt fails at beginning');
console.assert(removeCharAt('abc', 1) === 'ac', 'removeCharAt fails in middle');
console.assert(removeCharAt('abc', 2) === 'ab', 'removeCharAt fails at end');

const getSubsequences = (string, accumulatingList = [string]) => {
  const currentSubsequences = accumulatingList;
  for(let i = 0; i <  string.length; i++){
    const stringWithoutCharAtIndex = removeCharAt(string, i);
    if(stringWithoutCharAtIndex && !currentSubsequences.includes(stringWithoutCharAtIndex)){
      currentSubsequences.push(stringWithoutCharAtIndex);
      getSubsequences(stringWithoutCharAtIndex, currentSubsequences);
    } 
  }
  return currentSubsequences;
}
console.assert(_.isEqual(getSubsequences('abc').sort(), ['a', 'ab', 'abc', 'ac', 'b','bc','c']), 'Subsequences of abc failed');
console.assert(_.isEqual(getSubsequences('aabc').sort(), ['a', 'aa', 'aab', 'aabc', 'aac', 'ab', 'abc', 'ac', 'b','bc','c']), 'Subsequences of aabc failed');

const getArraySortedByStringLength = (array) => {
    // ties in length will be ignored, but could be further sorted alphabetically to break the tie.
    // assumes descending
    return array.sort((a, b) => {
        return b.length - a.length;
    });
};
console.assert(_.isEqual(getArraySortedByStringLength(['1', '1234', '12', '123']), [ '1234', '123', '12', '1' ]), 'getArraysortedByString fails');

const firstSubstringMatchOfArrayStrings = (arrayOfTestStrings, string) => {
  // could make more generic and not assume first param is array'
  for( let i = 0; i < arrayOfTestStrings.length; i++){
    const testString = arrayOfTestStrings[i];
    if(string.includes(testString)) {
        return testString;
    }
  }
};
console.assert(firstSubstringMatchOfArrayStrings(['z', 'foo', 'bar', 'bam'], 'barista') === 'bar', 'firstSubstringMatchOfArrayOfStrings fails');

function longestSubsequenceSubstring(subsequenceString, string) {
  // finds the longest subsequence from one string that is a substring of another string
    const subsequences = getSubsequences(subsequenceString);
    const subsequencesSortedByLength = getArraySortedByStringLength(subsequences);
    return firstSubstringMatchOfArrayStrings(subsequencesSortedByLength, string);
}

console.assert(longestSubsequenceSubstring('ABCD', 'BACDBDCD') === 'ACD', 'longestSubsequenceSubstring fails');

