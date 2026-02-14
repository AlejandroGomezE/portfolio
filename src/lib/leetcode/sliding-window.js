const content = [
  {
    title: 'Contains Duplicate II',
    slug: 'contains-duplicate-ii',
    difficulty: 'easy',
    description: `
      Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) < = k.

      #### Example 1:

      <strong>Input</strong>: nums = [1,2,3,1], k = 3
      <br/><strong>Output</strong>: true

      #### Example 2:

      <strong>Input</strong>: nums = [1,0,1,1], k = 1
      <br/><strong>Output</strong>: true

      #### Example 3:

      <strong>Input</strong>: nums = [1,2,3,1,2,3], k = 2
      <br/><strong>Output</strong>: false

      #### Constraints:

      - \`1 <= nums.length <= 105\`
      - \`-109 <= nums[i] <= 109\`
      - \`0 <= k <= 105\`
      `,
    code: `
      \`\`\`js
        /**
         * @param {number[]} nums
         * @param {number} k
         * @return {boolean}
         */
        var containsNearbyDuplicate = function(nums, k) {
            const set = new Set();

            for (let i = 0; i < nums.length; i++) {
                // Remove the element that is now outside the window
                if (i > k) {
                    set.delete(nums[i - k - 1]);
                }

                // Check for duplicate in the current window
                if (set.has(nums[i])) {
                    return true;
                }

                // Add the current element to the window
                set.add(nums[i]);
            }

            return false;
        };
      \`\`\`
    `,
    explanation: `
    #### Explanation:

      1. Maintain a sliding window of at most k elements using a Set.
      2. For each index i, if i > k, remove the element at index \`i - k - 1\` from the set (it's now outside the window).
      3. If the current element \`nums[i]\` is already in the set, we found two indices within distance k with the same value → return true.
      4. Otherwise add \`nums[i]\` to the set and continue.
      5. If the loop finishes without finding a duplicate in any window, return false.
    `,
  },
];

module.exports = content;
