const content = [
  {
    title: '125. Valid Palindrome',
    slug: 'valid-palindrome',
    difficulty: 'easy',
    description: `
      A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

      Given a string s, return true if it is a palindrome, or false otherwise.
      
      Example 1:
      
      Input: s = "A man, a plan, a canal: Panama"
      Output: true
      Explanation: "amanaplanacanalpanama" is a palindrome.
      Example 2:
      
      Input: s = "race a car"
      Output: false
      Explanation: "raceacar" is not a palindrome.
      Example 3:
      
      Input: s = " "
      Output: true
      Explanation: s is an empty string "" after removing non-alphanumeric characters.
      Since an empty string reads the same forward and backward, it is a palindrome.
      
      Constraints:
      1 <= s.length <= 2 * 105
      s consists only of printable ASCII characters.
      `,
    code: `
      \`\`\`js
        const isPalindrome = function(s) {
      
          // turn string to lowercase and use regex to remove non-alphanumeric
          s = s.toLowerCase();
          s = s.replace(/[^A-Za-z0-9]/g, '');
      
          let start = 0;
          let end = s.length-1; 
          
          while (start < end){
              
              if(s[start] !== s[end]) return false
              start++;
              end--;
          }
          return true
        };
      \`\`\`
    `,
  },
];

module.exports = content;
