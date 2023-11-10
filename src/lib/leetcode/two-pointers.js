const content = [
  {
    title: 'Valid Palindrome',
    slug: 'valid-palindrome',
    difficulty: 'easy',
    description: `
      A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

      Given a string s, return true if it is a palindrome, or false otherwise.
      
      #### Example 1:
      
      <strong>Input</strong>: s = "A man, a plan, a canal: Panama"
      <br/><strong>Output</strong>: true
      <br/><strong>Explanation</strong>: "amanaplanacanalpanama" is a palindrome.
      
      #### Example 2:
      
      <strong>Input</strong>: s = "race a car"
      <br/><strong>Output</strong>: false
      <br/><strong>Explanation</strong>: "raceacar" is not a palindrome.
      
      #### Example 3:

      <strong>Input</strong>: s = " "
      <br/><strong>Output</strong>: true
      <br/><strong>Explanation</strong>: s is an empty string "" after removing non-alphanumeric characters.
      Since an empty string reads the same forward and backward, it is a palindrome.
      
      
      
      #### Constraints:

      - \`1 <= s.length <= 2 * 105\`
      - s consists only of printable ASCII characters.
      `,
    code: `
      \`\`\`js
        const isPalindrome = function(s) {
      
          // turn string to lowercase and use regex to remove non-alphanumeric
          s = s.replace(/[^\p{L}\p{N}]/giu, '');
          s = s.toLowerCase()
      
          let a = 0, b = s.length - 1
          
          while(a < b){
            if(s[a] !== s[b]) return false
            a++
            b--
          }
          return true
        };
      \`\`\`
    `,
    explanation: `
    #### Explanation:

      1. Get rid of non alphanumeric values and turn string to lowercase  
      2. Pointer 'a' points at the beginning of the string and pointer 'b' points at the end of the string
      3. While 'a' is less than 'b', if the values at 'a' and 'b' are not equal, return false
      4. If the values at 'a' and 'b' are equal, increment 'a' and decrement 'b'
      5. If the loop finishes, return true
    `,
  },
];

module.exports = content;
