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
  {
    title: 'Assign Cookies',
    slug: 'assign-cookies',
    difficulty: 'easy',
    description: `
      Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.

      Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.

      #### Example 1:

      <strong>Input</strong>: g = [1,2,3], s = [1,1]
      <br/><strong>Output</strong>: 1
      <br/><strong>Explanation</strong>: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.

      #### Example 2:

      <strong>Input</strong>: g = [1,2], s = [1,2,3]
      <br/><strong>Output</strong>: 2
      <br/><strong>Explanation</strong>: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. You have 3 cookies and their sizes are big enough to gratify all of the children.

      #### Constraints:

      - \`1 <= g.length <= 3 * 104\`
      - \`0 <= s.length <= 3 * 104\`
      - \`1 <= g[i], s[j] <= 231 - 1\`
      `,
    code: `
      \`\`\`js
        const findContentChildren = function(g, s) {
          g.sort((a, b) => a - b);
          s.sort((a, b) => a - b);
          
          let childIndex = 0;
          let cookieIndex = 0;

          let count = 0;

          while (childIndex < g.length && cookieIndex < s.length) {
            if (s[cookieIndex] >= g[childIndex]) {
              count++;
              childIndex++; 
            }
            cookieIndex++;
          }

          return count;
        };
      \`\`\`
    `,
    explanation: `
    #### Explanation:

      1. Sort greed factors (g) and cookie sizes (s) ascending so we can match smallest cookie to smallest greed first.
      2. Two pointers: childIndex = current child, cookieIndex = current cookie.
      3. While both pointers are in range: if the cookie satisfies the child (s[cookieIndex] >= g[childIndex]), assign it (count++, move both). Otherwise try the next cookie (cookieIndex++).
      4. Return the number of content children.
    `,
  },
];

module.exports = content;
